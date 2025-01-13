import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MarketingPage from './marketing-page/MarketingPage';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { getDesignTokens } from './shared-theme/themePrimitives';

// Force dark mode theme with custom colors
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#60A6E7',
      light: '#83B9EC',
      dark: '#4389C9',
    },
    background: {
      default: '#030516',
      paper: '#0C2645',
    },
    text: {
      primary: '#fff',
      secondary: 'rgba(255, 255, 255, 0.7)',
    },
    ...getDesignTokens('dark').palette,
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#0C2645',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#0C2645',
        },
      },
    },
  },
  ...getDesignTokens('dark'),
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline enableColorScheme />
      <Router>
        <Routes>
          <Route path="/" element={<MarketingPage />} />
     
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
