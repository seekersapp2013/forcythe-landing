import { createTheme } from '@mui/material/styles';

const skeuomorphicTheme = createTheme({
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'linear-gradient(to bottom, #ffffff, #f0f0f0)',
          boxShadow: `
            inset 0 2px 3px rgba(255, 255, 255, 0.9),
            0 4px 8px rgba(0, 0, 0, 0.15),
            0 1px 2px rgba(0, 0, 0, 0.1)
          `,
          border: '1px solid rgba(0, 0, 0, 0.1)',
          borderRadius: '8px',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundImage: 'linear-gradient(to bottom, #ffffff, #e6e6e6)',
          border: '1px solid rgba(0, 0, 0, 0.1)',
          boxShadow: `
            inset 0 1px 0 rgba(255, 255, 255, 0.8),
            0 2px 4px rgba(0, 0, 0, 0.1)
          `,
          '&:hover': {
            backgroundImage: 'linear-gradient(to bottom, #f8f8f8, #d9d9d9)',
          },
          '&:active': {
            backgroundImage: 'linear-gradient(to top, #e6e6e6, #f8f8f8)',
            boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.1)',
          },
        },
        contained: {
          backgroundImage: 'linear-gradient(to bottom, #1976d2, #1565c0)',
          color: '#ffffff',
          '&:hover': {
            backgroundImage: 'linear-gradient(to bottom, #1565c0, #0d47a1)',
          },
          '&:active': {
            backgroundImage: 'linear-gradient(to top, #0d47a1, #1565c0)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: 'linear-gradient(to bottom, #ffffff, #f5f5f5)',
          boxShadow: `
            inset 0 1px 0 rgba(255, 255, 255, 0.9),
            0 8px 16px rgba(0, 0, 0, 0.1),
            0 2px 4px rgba(0, 0, 0, 0.08)
          `,
          border: '1px solid rgba(0, 0, 0, 0.1)',
          borderRadius: '12px',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundImage: 'linear-gradient(to bottom, rgba(255,255,255,0.95), rgba(245,245,245,0.95))',
          backdropFilter: 'blur(10px)',
          boxShadow: `
            0 2px 4px rgba(0, 0, 0, 0.08),
            0 1px 2px rgba(0, 0, 0, 0.04)
          `,
          borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            backgroundImage: 'linear-gradient(to bottom, #ffffff, #fafafa)',
            boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.05)',
            border: '1px solid rgba(0, 0, 0, 0.1)',
            '&:hover': {
              border: '1px solid rgba(0, 0, 0, 0.2)',
            },
            '&.Mui-focused': {
              boxShadow: `
                inset 0 2px 4px rgba(0, 0, 0, 0.05),
                0 0 0 3px rgba(25, 118, 210, 0.2)
              `,
            },
          },
        },
      },
    },
  },
  shape: {
    borderRadius: 8,
  },
  shadows: [
    'none',
    // Customized shadow array...
    `0 2px 4px rgba(0,0,0,0.1),
     0 1px 2px rgba(0,0,0,0.05)`,
    // ... add more shadow levels as needed
  ],
});

export default skeuomorphicTheme; 