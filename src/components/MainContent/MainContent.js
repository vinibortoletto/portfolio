import React from 'react';

// Components
import RecentProjects from './RecentProjects/RecentProjects';
import Skills from './Skills/Skills';
import AboutMe from './AboutMe/AboutMe';

// Styles
import { Container } from './MainContent.styles';

export default function MainContent() {
  return (
    <Container>
      <RecentProjects />
      <div>
        <Skills />
        <AboutMe />
      </div>
    </Container>
  );
}
