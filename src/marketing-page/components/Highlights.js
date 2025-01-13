import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import InsightsIcon from '@mui/icons-material/Insights';

/**
 * Service highlights data
 * Each entry represents a core service offering
 */
const highlights = [
  {
    icon: <DesignServicesIcon />,
    title: 'Strategic Design',
    description: 'We blend aesthetics with functionality to create user-centric designs that drive engagement and conversion.',
  },
  {
    icon: <InsightsIcon />,
    title: 'Digital Innovation',
    description: 'Leveraging cutting-edge technologies to build scalable solutions that keep you ahead of the competition.',
  },
  {
    icon: <RocketLaunchIcon />,
    title: 'Growth Solutions',
    description: 'Data-driven strategies that accelerate your business growth and maximize market opportunities.',
  },
  {
    icon: <AutoAwesomeIcon />,
    title: 'Brand Evolution',
    description: 'Transform your brand identity with compelling digital experiences that resonate with your audience.',
  },
];

/**
 * HighlightCard Component
 * Displays individual service offering with icon and description
 */
function HighlightCard({ icon, title, description }) {
  return (
    <Card
      component="article"
      elevation={0}
      sx={{
        height: '100%',
        background: 'rgba(30, 30, 30, 0.4)',
        backdropFilter: 'blur(8px)',
        border: '1px solid',
        borderColor: 'divider',
        transition: 'all 0.3s ease-in-out',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: 'linear-gradient(90deg, transparent, rgba(144, 202, 249, 0.2), transparent)',
          transform: 'translateX(-100%)',
          transition: 'transform 0.5s ease-in-out',
        },
        '&:hover': {
          transform: 'translateY(-4px)',
          borderColor: 'rgba(144, 202, 249, 0.3)',
          '&::before': {
            transform: 'translateX(100%)',
          },
          '& .icon': {
            color: 'primary.main',
            transform: 'scale(1.1) rotate(5deg)',
          },
        },
      }}
    >
      <Stack
        spacing={3}
        sx={{
          p: 3.5,
          height: '100%',
        }}
      >
        <Box
          className="icon"
          sx={{
            color: 'text.secondary',
            transition: 'all 0.3s ease-in-out',
            '& > svg': {
              fontSize: 44,
            },
          }}
        >
          {icon}
        </Box>
        <Box>
          <Typography
            variant="h6"
            component="h3"
            gutterBottom
            sx={{
              fontWeight: 600,
              fontSize: { xs: '1.25rem', sm: '1.5rem' },
              mb: 1.5,
              background: 'linear-gradient(90deg, #fff, rgba(255, 255, 255, 0.8))',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              lineHeight: 1.7,
              fontSize: { xs: '0.875rem', sm: '1rem' },
            }}
          >
            {description}
          </Typography>
        </Box>
      </Stack>
    </Card>
  );
}

/**
 * Highlights Component
 * Showcases core service offerings in a grid layout
 */
export default function Highlights() {
  return (
    <section id="highlights" aria-label="Our Services">
      <Box
        sx={{
          position: 'relative',
          py: { xs: 8, sm: 12, md: 16 },
          background: 'linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.3))',
        }}
      >
        <Container maxWidth="lg">
          <Stack spacing={6}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography
                component="h2"
                variant="h2"
                align="center"
                sx={{
                  fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                  fontWeight: 700,
                  letterSpacing: '-0.01em',
                  background: 'linear-gradient(90deg, #fff, rgba(255, 255, 255, 0.8))',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  mb: 2,
                }}
              >
                Our Expertise
              </Typography>
              <Typography
                variant="h5"
                component="p"
                sx={{
                  color: 'text.secondary',
                  fontSize: { xs: '1rem', sm: '1.25rem' },
                  maxWidth: { xs: '100%', sm: '600px' },
                  mx: 'auto',
                  mb: { xs: 6, sm: 8 },
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: { xs: 0.5, sm: 1 },
                  flexWrap: 'wrap'
                }}
              >
                <span>From</span>{' '}
                <Typography
                  component="span"
                  variant="inherit"
                  sx={(theme) => ({
                    color: 'primary.main',
                    ...theme.applyStyles('dark', {
                      color: 'primary.light',
                    }),
                  })}
                >
                  Spark
                </Typography>{' '}
                <span>to</span>{' '}
                <Typography
                  component="span"
                  variant="inherit"
                  sx={(theme) => ({
                    color: 'primary.main',
                    ...theme.applyStyles('dark', {
                      color: 'primary.light',
                    }),
                  })}
                >
                  Spotlight
                </Typography>
                <span>: we take you every step of the way to success.</span>
              </Typography>
            </Box>
            <Grid
              container
              spacing={{ xs: 3, md: 4 }}
              sx={{ maxWidth: 1200, mx: 'auto' }}
            >
              {highlights.map((highlight, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <HighlightCard {...highlight} />
                </Grid>
              ))}
            </Grid>
          </Stack>
        </Container>
      </Box>
    </section>
  );
}
