import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

/**
 * FAQ Data
 * Static content for Frequently Asked Questions
 * Each item contains an id, question, and answer
 */
const faqData = [
  {
    id: 'faq-1',
    question: "What services does Forcythe offer?",
    answer: "We specialize in product design, product strategy, and product management. Whether you need help designing a new product, refining an existing one, or managing the entire product lifecycle, we provide tailored solutions to meet your business goals."
  },
  {
    id: 'faq-2',
    question: "How does Forcythe approach product design?",
    answer: "Our approach is user-centered and data-driven. We start by understanding your target audience and their needs, then move through ideation, prototyping, testing, and refinement. This ensures the final product is not only visually appealing but also functional, scalable, and aligned with your business objectives."
  },
  {
    id: 'faq-3',
    question: "Who can benefit from Forcythe's services?",
    answer: "Our services are ideal for startups, small businesses, and established companies looking to launch new products, improve existing ones, or streamline their product management processes. If you're looking to innovate and grow, we can help."
  },
  {
    id: 'faq-4',
    question: "How long does a typical project take?",
    answer: "The timeline depends on the scope and complexity of your project. For example, a simple product design project might take a few weeks, while a full product development cycle could take several months. During our initial consultation, we'll provide a clear timeline tailored to your needs."
  },
  {
    id: 'faq-5',
    question: "What makes Forcythe different from other design studios?",
    answer: "Our unique blend of strategic thinking, design expertise, and technical knowledge sets us apart. We don't just create beautiful designs; we develop comprehensive solutions that drive business growth and user satisfaction."
  },
  {
    id: 'faq-6',
    question: "How do I get started with Forcythe?",
    answer: "Getting started is easy! Simply click on the 'Book a Call' button to schedule a consultation. During the call, we'll discuss your needs, goals, and how we can help bring your vision to life."
  }
];

/**
 * FAQ Component
 * Displays a list of frequently asked questions in an accordion format
 * Implements accessibility features and responsive design
 * @returns {JSX.Element} FAQ section of the website
 */
export default function FAQ() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <section id="faq" aria-label="Frequently Asked Questions">
      <Container
        sx={{
          pt: { xs: 4, sm: 12 },
          pb: { xs: 8, sm: 16 },
        }}
      >
        <Typography
          component="h2"
          variant="h2"
          color="text.primary"
          sx={{
            mb: { xs: 4, sm: 8 },
            textAlign: 'center',
            fontSize: { xs: '2rem', sm: '3rem' }, // Responsive font size
            fontWeight: 700,
          }}
        >
          Frequently Asked Questions
        </Typography>
        <Box 
          sx={{ 
            maxWidth: 800, 
            mx: 'auto',
            px: { xs: 2, sm: 0 } // Add padding on mobile
          }}
        >
          {faqData.map((faq) => (
            <Accordion
              key={faq.id}
              expanded={expanded === faq.id}
              onChange={handleChange(faq.id)}
              sx={{
                '& .MuiAccordionSummary-root': {
                  borderBottom: '1px solid',
                  borderColor: 'divider',
                  transition: 'background-color 0.2s ease',
                  '&:hover': {
                    bgcolor: 'action.hover',
                  },
                },
                '&.Mui-expanded': {
                  '& .MuiAccordionSummary-root': {
                    bgcolor: 'action.hover',
                  },
                },
                mb: 1, // Add spacing between accordions
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`${faq.id}-content`}
                id={`${faq.id}-header`}
              >
                <Typography 
                  component="h3" 
                  variant="h6" 
                  color="text.primary"
                  sx={{
                    fontSize: { xs: '1rem', sm: '1.25rem' }, // Responsive font size
                    fontWeight: 600
                  }}
                >
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{
                    maxWidth: '100%',
                    lineHeight: 1.75,
                    fontSize: { xs: '0.875rem', sm: '1rem' }, // Responsive font size
                  }}
                >
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
    </section>
  );
}
