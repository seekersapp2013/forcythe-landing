import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

/**
 * Footer Component
 * A minimal footer component displaying copyright information
 * Follows accessibility guidelines with semantic HTML and proper contrast
 * @returns {JSX.Element} Footer section of the website
 */
export default function Footer() {
  return (
    <footer> {/* Semantic HTML for better accessibility */}
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 4, sm: 8 },
          py: { xs: 8, sm: 10 }, // Consistent padding across screen sizes
        }}
      >
        <Box
          sx={{
            width: '100%',
            pt: 2,
            textAlign: 'center',
          }}
        >
          <Typography 
            variant="body2" 
            color="text.secondary"
            component="p" // Semantic HTML
            sx={{ 
              fontSize: { xs: '0.875rem', sm: '1rem' }, // Responsive font size
              fontWeight: 400 
            }}
          >
            © {new Date().getFullYear()} Forcythe. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </footer>
  );
}
