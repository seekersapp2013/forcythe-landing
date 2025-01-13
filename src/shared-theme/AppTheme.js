import * as React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import { inputsCustomizations } from './customizations/inputs';
import { dataDisplayCustomizations } from './customizations/dataDisplay';
import { feedbackCustomizations } from './customizations/feedback';
import { navigationCustomizations } from './customizations/navigation';
import { surfacesCustomizations } from './customizations/surfaces';
import { colorSchemes, typography, shadows, shape } from './themePrimitives';

function AppTheme(props) {
  const { children, disableCustomTheme, themeComponents } = props;
  const theme = React.useMemo(() => {
    return disableCustomTheme
      ? {}
      : createTheme({
          palette: {
            mode: 'dark',
            background: {
              default: '#121212',
              paper: '#1e1e1e',
            },
            primary: {
              main: '#90caf9',
            },
            secondary: {
              main: '#ce93d8',
            },
            text: {
              primary: '#ffffff',
              secondary: 'rgba(255, 255, 255, 0.7)',
            },
            divider: 'rgba(255, 255, 255, 0.12)',
          },
          typography,
          shadows,
          shape,
          components: {
            ...inputsCustomizations,
            ...dataDisplayCustomizations,
            ...feedbackCustomizations,
            ...navigationCustomizations,
            ...surfacesCustomizations,
            ...themeComponents,
            MuiCssBaseline: {
              styleOverrides: {
                body: {
                  backgroundColor: '#121212',
                  color: '#ffffff',
                },
              },
            },
          },
        });
  }, [disableCustomTheme, themeComponents]);

  if (disableCustomTheme) {
    return <React.Fragment>{children}</React.Fragment>;
  }
  
  return (
    <ThemeProvider theme={theme} disableTransitionOnChange>
      <CssBaseline enableColorScheme={false} />
      {children}
    </ThemeProvider>
  );
}

AppTheme.propTypes = {
  children: PropTypes.node,
  disableCustomTheme: PropTypes.bool,
  themeComponents: PropTypes.object,
};

export default AppTheme;
