import { ThemeOptions } from '@mui/material/styles';

/**
 * Color palette configuration
 * Defines the color schemes for both light and dark modes
 * Following Material Design color guidelines
 */
const colorSchemes = {
  dark: {
      primary: {
      main: '#90CAF9',      // Lighter blue for better contrast in dark mode
      light: '#BBE3FF',
      dark: '#5D99C6',
      contrastText: '#000000',
    },
    secondary: {
      main: '#CE93D8',      // Lighter purple for dark mode
      light: '#F3E5F5',
      dark: '#AB47BC',
      contrastText: '#000000',
    },
    background: {
      default: '#121212',   // Material Design dark theme background
      paper: '#1E1E1E',     // Slightly lighter for cards and surfaces
      },
      text: {
      primary: '#FFFFFF',
      secondary: 'rgba(255, 255, 255, 0.7)',
    },
    divider: 'rgba(255, 255, 255, 0.12)',
      action: {
      active: '#FFFFFF',
      hover: 'rgba(255, 255, 255, 0.08)',
      selected: 'rgba(255, 255, 255, 0.16)',
      disabled: 'rgba(255, 255, 255, 0.3)',
      disabledBackground: 'rgba(255, 255, 255, 0.12)',
    },
  },
};

/**
 * Typography configuration
 * Defines responsive font sizes and weights
 * Optimized for readability across devices
 */
const typography = {
  fontFamily: [
    'Inter',
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
  ].join(','),
  h1: {
    fontSize: '3.5rem',
    fontWeight: 700,
    lineHeight: 1.2,
    '@media (max-width:600px)': {
      fontSize: '2.5rem',
    },
  },
  h2: {
    fontSize: '3rem',
    fontWeight: 700,
    lineHeight: 1.2,
    '@media (max-width:600px)': {
      fontSize: '2rem',
    },
  },
  h3: {
    fontSize: '2.25rem',
    fontWeight: 600,
    lineHeight: 1.3,
    '@media (max-width:600px)': {
      fontSize: '1.75rem',
  },
  },
  h4: {
    fontSize: '1.75rem',
    fontWeight: 600,
    lineHeight: 1.4,
    '@media (max-width:600px)': {
      fontSize: '1.5rem',
    },
  },
  body1: {
    fontSize: '1rem',
    lineHeight: 1.75,
    '@media (max-width:600px)': {
      fontSize: '0.875rem',
    },
  },
  body2: {
    fontSize: '0.875rem',
    lineHeight: 1.75,
    '@media (max-width:600px)': {
      fontSize: '0.75rem',
    },
  },
};

/**
 * Shadow configuration
 * Optimized for dark mode with subtle elevation
 */
const shadows = [
  'none',
  '0px 2px 4px rgba(0,0,0,0.2)',
  '0px 4px 8px rgba(0,0,0,0.3)',
  '0px 8px 16px rgba(0,0,0,0.4)',
  // ... add more shadow levels as needed
];

/**
 * Shape configuration
 * Defines consistent border radius across components
 */
const shape = {
  borderRadius: 8,
};

/**
 * Component overrides
 * Global component style customizations
 */
const components = {
  MuiButton: {
    styleOverrides: {
      root: {
        textTransform: 'none',
        fontWeight: 600,
        borderRadius: 8,
      },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: 12,
        backgroundImage: 'none',
      },
    },
  },
  // Add more component overrides as needed
};

export { colorSchemes, typography, shadows, shape, components };
