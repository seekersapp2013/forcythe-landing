import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import MuiChip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { styled } from '@mui/material/styles';

import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';

const items = [
  {
    icon: <LightbulbOutlinedIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    title: 'Idea - Your vision is unique',
    description:
      'Nurture Your Idea into a Blueprint for Success with our strategic insights and industry expertise. Your vision is unique, let’s us shape it',
    imageLight: `url(/img/idea2.jpeg)`,
    imageDark: `url(/img/idea2.jpg)`,
  },
  {
    icon: <BrushOutlinedIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    title: 'Design - Crafting the blueprint for success',
    description:
      'Design is more than aesthetics, it’s about creating user experiences that resonate and convert. Our design experts shape your vision into a stunning reality.',
    imageLight: `url(/img/design.jpg)`,
    imageDark: `url(/img/design.jpg)`,
  },
  {
    icon: <CodeOutlinedIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    title: 'Develop - Turning blueprints into reality.',
    description:
      'We breathe life into designs, building robust platforms ready to disrupt markets. Harness the experience of our development team to bring your Concept to Life.',
    imageLight: `url(/img/develop.jpg)`,
    imageDark: `url(/img/develop.jpg)`,
  },
  {
    icon: <RocketLaunchOutlinedIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    title: 'Launch - Your launchpad to the market.',
    description:
      'Launching is just the beginning, we ensure your product makes a splash and keeps making waves, ensuring a continual customer acquisition.',
    imageLight: `url(/img/launch.jpg)`,
    imageDark: `url(/img/launch.jpg)`,
  },
];

const Chip = styled(MuiChip)(({ theme }) => ({
  variants: [
    {
      props: ({ selected }) => selected,
      style: {
        background:
          'linear-gradient(to bottom right, hsl(210, 98%, 48%), hsl(210, 98%, 35%))',
        color: 'hsl(0, 0%, 100%)',
        borderColor: (theme.vars || theme).palette.primary.light,
        '& .MuiChip-label': {
          color: 'hsl(0, 0%, 100%)',
        },
        ...theme.applyStyles('dark', {
          borderColor: (theme.vars || theme).palette.primary.dark,
        }),
      },
    },
  ],
}));

function MobileLayout({ selectedItemIndex, handleItemClick, selectedFeature }) {
  if (!items[selectedItemIndex]) {
    return null;
  }

  return (
    <Box
      sx={{
        display: { xs: 'flex', sm: 'none' },
        flexDirection: 'column',
        gap: 2,
      }}
    >
      <Box sx={{ display: 'flex', gap: 2, overflow: 'auto' }}>
        {items.map(({ title }, index) => (
          <Chip
            size="medium"
            key={index}
            label={title}
            onClick={() => handleItemClick(index)}
            selected={selectedItemIndex === index}
          />
        ))}
      </Box>
      <Card variant="outlined">
        <Box
          sx={(theme) => ({
            mb: 2,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: 400,
            backgroundImage: 'var(--items-imageLight)',
            ...theme.applyStyles('dark', {
              backgroundImage: 'var(--items-imageDark)',
            }),
          })}
          style={
            items[selectedItemIndex]
              ? {
                  '--items-imageLight': items[selectedItemIndex].imageLight,
                  '--items-imageDark': items[selectedItemIndex].imageDark,
                }
              : {}
          }
        />
        <Box sx={{ px: 2, pb: 2 }}>
          <Typography
            gutterBottom
            sx={{ color: 'text.primary', fontWeight: 'medium' }}
          >
            {selectedFeature.title}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1.5 }}>
            {selectedFeature.description}
          </Typography>
        </Box>
      </Card>
    </Box>
  );
}

MobileLayout.propTypes = {
  handleItemClick: PropTypes.func.isRequired,
  selectedFeature: PropTypes.shape({
    description: PropTypes.string.isRequired,
    icon: PropTypes.element,
    imageDark: PropTypes.string.isRequired,
    imageLight: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  selectedItemIndex: PropTypes.number.isRequired,
};

export { MobileLayout };

export default function Features() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);

  const handleItemClick = (index) => {
    setSelectedItemIndex(index);
  };

  const selectedFeature = items[selectedItemIndex];

  return (
    <Container id="features" sx={{ py: { xs: 8, sm: 16 } }}>
      <Box sx={{ width: { sm: '100%', md: '60%'}, mx: 'auto', mb: { xs: 6, sm: 8 } }}>
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
          Our Methodology
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
            Idea
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
            Launch
          </Typography>
          <span>: we create an experience your users will love.</span>
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row-reverse' },
          gap: 2,
        }}
      >
        <div>
          <Box
            sx={{
              display: { xs: 'none', sm: 'flex' },
              flexDirection: 'column',
              gap: 2,
              height: '100%',
            }}
          >
            {items.map(({ icon, title, description }, index) => (
              <Box
                key={index}
                component={Button}
                onClick={() => handleItemClick(index)}
                sx={[
                  (theme) => ({
                    p: 2,
                    height: '100%',
                    width: '100%',
                    borderRadius: 2,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: (theme.vars || theme).palette.action.hover,
                      transform: 'translateY(-2px)',
                    },
                  }),
                  selectedItemIndex === index && {
                    backgroundColor: 'action.selected',
                  },
                ]}
              >
                <Box
                  sx={[
                    {
                      width: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'left',
                      gap: 2,
                      textAlign: 'left',
                      textTransform: 'none',
                      color: 'text.secondary',
                      padding: 1,
                    },
                    selectedItemIndex === index && {
                      color: 'text.primary',
                    },
                  ]}
                >
                  {icon}

                  <Typography variant="h6">{title}</Typography>
                  <Typography variant="body2">{description}</Typography>
                </Box>
              </Box>
            ))}
          </Box>
          <MobileLayout
            selectedItemIndex={selectedItemIndex}
            handleItemClick={handleItemClick}
            selectedFeature={selectedFeature}
          />
        </div>
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            width: { xs: '100%', md: '70%' },
          }}
        >
          <Card
            variant="outlined"
            sx={{
              height: '100%',
              width: '100%',
              display: { xs: 'none', sm: 'flex' },
            }}
          >
            <Box
              sx={(theme) => ({
                width: '100%',
                height: '100%',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                minHeight: '500px',
                maxHeight: '700px',
                backgroundImage: 'var(--items-imageLight)',
                ...theme.applyStyles('dark', {
                  backgroundImage: 'var(--items-imageDark)',
                }),
              })}
              style={
                items[selectedItemIndex]
                  ? {
                      '--items-imageLight': items[selectedItemIndex].imageLight,
                      '--items-imageDark': items[selectedItemIndex].imageDark,
                    }
                  : {}
              }
            />
          </Card>
        </Box>
      </Box>
    </Container>
  );
}
