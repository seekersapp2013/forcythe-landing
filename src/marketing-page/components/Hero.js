import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import InputLabel from '@mui/material/InputLabel';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { visuallyHidden } from '@mui/utils';
import { styled } from '@mui/material/styles';

const StyledVideo = styled('video')(({ theme }) => ({
  alignSelf: 'center',
  width: '100%',
  height: 400,
  marginTop: theme.spacing(8),
  borderRadius: (theme.vars || theme).shape.borderRadius,
  outline: '6px solid',
  outlineColor: 'hsla(220, 25%, 80%, 0.2)',
  border: '1px solid',
  borderColor: (theme.vars || theme).palette.grey[200],
  boxShadow: '0 0 12px 8px hsla(220, 25%, 80%, 0.2)',
  objectFit: 'cover',
  [theme.breakpoints.up('sm')]: {
    marginTop: theme.spacing(10),
    height: 700,
  },
  ...theme.applyStyles('dark', {
    boxShadow: '0 0 24px 12px hsla(210, 100%, 25%, 0.2)',
    outlineColor: 'hsla(220, 20%, 42%, 0.1)',
    borderColor: (theme.vars || theme).palette.grey[700],
  }),
}));

export default function Hero() {
  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundImage:
          'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 90%), transparent)',
        ...theme.applyStyles('dark', {
          backgroundImage:
            'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 16%), transparent)',
        }),
      })}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
          px: { xs: 2, sm: 4 },
        }}
      >
        <Stack
          spacing={2}
          useFlexGap
          sx={{ 
            alignItems: 'center', 
            width: { xs: '100%', sm: '80%', md: '70%' },
            maxWidth: '1200px' 
          }}
        >
          <Typography
            component="h1"
            variant="h1"
            sx={{
              fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
              textAlign: 'center',
              width: '100%',
              lineHeight: { xs: 1.2, sm: 1.4 },
              mb: { xs: 2, sm: 3 },
            }}
          >
            <Box 
              sx={{ 
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                alignItems: 'center',
                justifyContent: 'center',
                gap: { xs: 1, sm: '0.5rem' },
                flexWrap: { xs: 'wrap', sm: 'wrap' },
                wordBreak: { xs: 'break-word', sm: 'normal' },
              }}
            >
              <Box 
                component="span" 
                sx={{ 
                  display: 'inline-flex',
                  whiteSpace: { xs: 'normal', sm: 'nowrap' },
                }}
              >
                We build
              </Box>
              <Typography
                component="span"
                variant="inherit"
                sx={(theme) => ({
                  color: 'primary.main',
                  display: 'inline-flex',
                  whiteSpace: { xs: 'normal', sm: 'nowrap' },
                  ...theme.applyStyles('dark', {
                    color: 'primary.light',
                  }),
                })}
              >
              &nbsp;products
              </Typography>
              <Box 
                component="span" 
                sx={{ 
                  display: 'inline-flex',
                  whiteSpace: { xs: 'normal', sm: 'nowrap' },
                }}
              >
                that shape a better future
              </Box>
            </Box>
          </Typography>

          <Typography
            sx={{
              textAlign: 'center',
              color: 'text.secondary',
              width: { xs: '100%', sm: '90%', md: '80%' },
              px: { xs: 2, sm: 4 },
              fontSize: { xs: '1rem', sm: '1.1rem' },
              lineHeight: 1.6,
            }}
          >
            We're the architects of digital excellence across industries. We redefine business with cutting-edge digital strategies that invokes sector-wide transformation.
          </Typography>

          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{ 
              minWidth: 'fit-content',
              px: 4,
              py: 1.5,
              mt: { xs: 2, sm: 3 }
            }}
          >
            Book a Call
          </Button>
        </Stack>
        <StyledVideo
          autoPlay
          muted
          loop
          playsInline
          id="video"
        >
          <source 
            src="https://cdn.prod.website-files.com/66578fd98f1535d11770d8a7%2F67478059a3dc6f2ef9f2d7c7_Speck%20Design%20Home%20Background%20Video%20v3_2-transcode.mp4" 
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </StyledVideo>
      </Container>
    </Box>
  );
}
