import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import Paper from '@mui/material/Paper';
import ChatIcon from '@mui/icons-material/Chat';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import CircularProgress from '@mui/material/CircularProgress';

const API_KEY = '893e0115-5088-4d7a-b615-352f9d16f703';
const PROJECT_ID = 180;
const VERSION_UUID = 'a0fcdad5-6f3c-466a-80e4-3d2f2f12a41f';

const ChatWindow = ({ onClose }) => {
  const [messages, setMessages] = useState([
    { text: 'Hello! How can I assist you today?', isBot: true }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { text: userMessage, isBot: false }]);
    setIsLoading(true);

    try {
      console.log('Sending request with:', {
        projectId: PROJECT_ID,
        versionUuid: VERSION_UUID,
        path: 'forcythe-1',
        inputs: {
          message: userMessage
        }
      });

      const response = await fetch(`https://api.latitude.io/prompts/run`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          projectId: PROJECT_ID,
          versionUuid: VERSION_UUID,
          path: 'forcythe-1',
          inputs: {
            message: userMessage
          }
        })
      });

      console.log('Response status:', response.status);
      console.log('Response headers:', Object.fromEntries(response.headers.entries()));

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Full API Response:', {
        status: response.status,
        headers: Object.fromEntries(response.headers.entries()),
        body: data
      });

      setMessages(prev => [...prev, { 
        text: data.output || data.response || JSON.stringify(data, null, 2),
        isBot: true 
      }]);
    } catch (error) {
      console.error('Detailed Error:', {
        message: error.message,
        response: error.response,
        stack: error.stack
      });
      setMessages(prev => [...prev, { 
        text: `Error: ${error.message}. Please try again.`,
        isBot: true 
      }]);
    }
    
    setIsLoading(false);
  };

  return (
    <Paper
      elevation={3}
      sx={{
        position: 'fixed',
        bottom: 80,
        right: 20,
        width: 350,
        height: 500,
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        borderRadius: 2,
        zIndex: 9999,
        boxShadow: (theme) => theme.shadows[24],
      }}
    >
      {/* Header */}
      <Box sx={{ 
        p: 2, 
        bgcolor: 'primary.main', 
        color: 'white',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <span>Chat Assistant</span>
        <IconButton size="small" onClick={onClose} sx={{ color: 'white' }}>
          <CloseIcon />
        </IconButton>
      </Box>

      {/* Messages Area with updated styling for code blocks */}
      <Box sx={{ 
        flex: 1, 
        overflowY: 'auto',
        p: 2,
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        bgcolor: 'grey.50',
      }}>
        {messages.map((message, index) => (
          <Box
            key={index}
            sx={(theme) => ({
              maxWidth: '80%',
              alignSelf: message.isBot ? 'flex-start' : 'flex-end',
              bgcolor: message.isBot 
                ? theme.palette.grey[200]
                : theme.palette.primary.main,
              color: message.isBot 
                ? theme.palette.text.primary
                : 'white',
              p: 1.5,
              borderRadius: 2,
              boxShadow: 1,
              whiteSpace: 'pre-wrap',
              fontFamily: message.isBot ? 'monospace' : 'inherit',
              fontSize: message.isBot ? '0.85rem' : 'inherit',
              '& pre': {
                margin: 0,
                padding: theme.spacing(1),
                backgroundColor: theme.palette.grey[100],
                borderRadius: 1,
                overflowX: 'auto',
              }
            })}
          >
            {message.text}
          </Box>
        ))}
        {isLoading && (
          <Box sx={{ display: 'flex', justifyContent: 'center', p: 2 }}>
            <CircularProgress size={24} />
          </Box>
        )}
      </Box>

      {/* Input Area with updated styling */}
      <Box sx={{ 
        p: 2, 
        borderTop: 1, 
        borderColor: 'divider',
        bgcolor: 'background.paper',
      }}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && !e.shiftKey && handleSend()}
          multiline
          maxRows={4}
          InputProps={{
            endAdornment: (
              <IconButton onClick={handleSend} color="primary">
                <SendIcon />
              </IconButton>
            ),
          }}
        />
      </Box>
    </Paper>
  );
};

export default function ChatButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Fab
        color="primary"
        aria-label="chat"
        sx={{
          position: 'fixed',
          bottom: 20,
          right: 20,
          zIndex: 9999,
          boxShadow: (theme) => theme.shadows[8],
          '&:hover': {
            transform: 'scale(1.1)',
            transition: 'transform 0.2s',
          },
        }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <ChatIcon />
      </Fab>
      {isOpen && <ChatWindow onClose={() => setIsOpen(false)} />}
    </>
  );
} 