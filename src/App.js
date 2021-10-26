import React from 'react';
import BottomShape from './components/BottomShape/BottomShape';
import Footer from './components/Footer/Footer';

// Components
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import MainContent from './components/MainContent/MainContent';
import TopShape from './components/TopShape/TopShape';

// Contexts
import { DataProvider } from './contexts/Data';

// Styles
import { GlobalStyles } from './helpers/styles/GlobalStyles';

export default function App() {
  return (
    <DataProvider>
      <GlobalStyles />

      <Header />

      <main>
        <Hero />
        <TopShape />
        <MainContent />
      </main>

      <Footer />
    </DataProvider>
  );
}
