import * as React from 'react';
import Box from '@mui/material/Box';

export default function Sitemark() {
  return (
    <Box
      component="img"
      src="/img/logo.svg"  // Your logo path here
      sx={{
        height: 32,
        width: 'auto',
        mr: 2,
        cursor: 'pointer'
      }}
      alt="Your Company Logo"
    />
  );
}
