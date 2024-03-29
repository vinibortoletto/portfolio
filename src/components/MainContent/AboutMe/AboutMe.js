import React from 'react';

// Contexts
import { useData } from '../../../contexts/Data';

// Components
import { Title } from '../../Title/Title.styles';

// Styles
import { Container } from './AboutMe.styles';

export default function AboutMe() {
  const { data } = useData();

  return (
    <Container className="about-me">
      <Title>{data.aboutMe.title}</Title>
      
      {data.aboutMe.description.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </Container>
  );
}
