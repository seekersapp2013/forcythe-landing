import * as React from 'react';
import Divider from '@mui/material/Divider';
import AppAppBar from './components/AppAppBar';
import Hero from './components/Hero';
import LogoCollection from './components/LogoCollection';
import Highlights from './components/Highlights';
import Portfolio from './components/Portfolio';
import Features from './components/Features';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import AppTheme from '../shared-theme/AppTheme';
import ZohoChat from './components/ZohoChat';

export default function MarketingPage(props) {
  return (
    <AppTheme {...props}>
      <AppAppBar />
      <Hero />
      <div>
        <LogoCollection />
        <Features />
        <Divider />
        <Highlights />
        <Divider />
        <Portfolio />
        <Divider />
        <FAQ />
        <Divider />
        <Footer />
        <ZohoChat />
      </div>
    </AppTheme>
  );
}
