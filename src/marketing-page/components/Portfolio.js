import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const StyledBox = styled('div')(({ theme }) => ({
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
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  position: 'relative',
  cursor: 'pointer',
  overflow: 'hidden',
  [theme.breakpoints.up('sm')]: {
    marginTop: theme.spacing(10),
    height: 700,
  },
  '&:hover .content-overlay': {
    transform: 'translateY(0)',
    opacity: 1,
  },
}));

const ContentOverlay = styled('div')(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: 'rgba(12, 38, 69, 0.95)',
  padding: '2rem',
  transform: 'translateY(101%)',
  transition: 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out',
  opacity: 0,
  height: '50%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  backdropFilter: 'blur(5px)'
}));

const NavigationButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  backgroundColor: 'rgba(12, 38, 69, 0.8)',
  color: theme.palette.primary.main,
  '&:hover': {
    backgroundColor: 'rgba(12, 38, 69, 0.95)',
  },
  zIndex: 2,
}));

// Updated portfolio items data with URLs
const portfolioItems = [
  {
    id: 1,
    image: '/img/portfolio/project1.jpg',
    title: 'Starks Associate',
    tags: ['UI/UX', 'Landing Page', 'Web Development'],
    description: 'Starks is a liquidity and treasury management company leveraging technology to empower businesses across emerging markets through liquidity provision, multi-currency settlements, and borderless banking services. With Starks, the possibilities are endless for businesses across Africa and beyond, who want to trade on a global scale.',
    url: 'https://starksassociate.com/'
  },
  {
    id: 2,
    image: '/img/portfolio/project2.jpg',
    title: 'UBA Redtv',
    tags: ['Digital Marketing', ],
    description: 'REDTV, a dynamic lifestyle channel by the United Bank for Africa (UBA), brings Africa to the global stage with vibrant content spanning entertainment, fashion, and culture.We partnered with REDTV to drive the digital marketing campaign for "13 Kinds of Women: Stories That Connect Us", a captivating drama series celebrating diversity, relatability, and the transformative power of storytelling. Our efforts contributed to amplifying its reach and engagement across digital platforms',
    url: 'https://www.youtube.com/@itsredtv'
  },
  {
    id: 3,
    image: '/img/portfolio/project3.jpg',
    title: 'African Funding Channel',
    tags: ['UI/UX', 'Branding', 'Landing'],
    description: 'African Funding Channel is dedicated to ensuring African businesses have unrestricted access to global resources, helping to scale the continent and reposition it as a leading global force. This mission drives our efforts and fuels our journey. AFC aims to bridge the funding gap in Africa through an innovative fund arrangement approach, connecting those in need of capital with surplus resources to create impactful solutions',
    url: 'https://forcythe.com/studio'
  },
  {
    id: 4,
    image: '/img/portfolio/project4.jpg',
    title: 'Rendezvous',
    tags: ['UI/UX', 'Landing', 'Mobile App'],
    description: 'Rendezvous is the cutting-edge dating app designed for singles across the US. Its smart algorithms and intuitive design make finding meaningful connections effortless. Users enjoy a safe, diverse, and inclusive platform that prioritizes their experience. With Rendezvous, genuine relationships are just a tap away',
    url: 'https://forcythe.com/studio'
  },
  // Add more items as needed
];

export default function Portfolio() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);
  
  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? portfolioItems.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === portfolioItems.length - 1 ? 0 : prev + 1));
  };

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  const handleClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  React.useEffect(() => {
    let timer;
    if (!isPaused) {
      timer = setInterval(() => {
        handleNext();
      }, 5000);
    }

    return () => clearInterval(timer);
  }, [isPaused]);

  const currentItem = portfolioItems[currentIndex];

  return (
    <Box
      id="portfolio"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
      }}
    >
      <Container maxWidth="lg">
        <Typography 
          component="h1" 
          variant="h2" 
          align="center"
          sx={{
            color: 'text.primary',
            mb: 8
          }}
        >
          Putting Our Best Foot Forward
        </Typography>

        <Box sx={{ position: 'relative' }}>
          <NavigationButton
            onClick={handlePrevious}
            sx={{ left: { xs: '0', md: '-50px' } }}
          >
            <ArrowBackIosIcon />
          </NavigationButton>

          <StyledBox
            onClick={() => handleClick(currentItem.url)}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            sx={{
              backgroundImage: `url(${currentItem.image})`,
            }}
          >
            <ContentOverlay className="content-overlay">
              <Typography 
                variant="h4" 
                component="h2"
                sx={{ 
                  color: 'primary.main',
                  mb: 2
                }}
              >
                {currentItem.title}
              </Typography>

              <Stack direction="row" spacing={1} sx={{ mb: 2, flexWrap: 'wrap', gap: 1 }}>
                {currentItem.tags.map((tag, index) => (
                  <Chip
                    key={index}
                    label={tag}
                    size="small"
                    sx={{
                      backgroundColor: 'rgba(96, 166, 231, 0.1)',
                      color: 'primary.main',
                    }}
                  />
                ))}
              </Stack>

              <Typography 
                variant="body1"
                sx={{ 
                  color: 'grey.300',
                  lineHeight: 1.6,
                  fontSize: '1rem',
                  maxHeight: '150px',
                  overflow: 'auto'
                }}
              >
                {currentItem.description}
              </Typography>
            </ContentOverlay>
          </StyledBox>

          <NavigationButton
            onClick={handleNext}
            sx={{ right: { xs: '0', md: '-50px' } }}
          >
            <ArrowForwardIosIcon />
          </NavigationButton>
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            mt: 6
          }}
        >
          <Button
            variant="outlined"
            color="primary"
            size="large"
            endIcon={<ArrowForwardIcon />}
            onClick={() => window.open('https://forcythe.com/studio', '_blank', 'noopener,noreferrer')}
            sx={{
              borderWidth: 2,
              px: 4,
              py: 1,
              borderRadius: 2,
              fontSize: '1.1rem',
              transition: 'all 0.3s ease-in-out',
              '&:hover': {
                borderWidth: 2,
                transform: 'translateY(-3px)',
                boxShadow: '0 4px 12px rgba(96, 166, 231, 0.2)',
              }
            }}
          >
            See More Projects
          </Button>
        </Box>
      </Container>
    </Box>
  );
} 