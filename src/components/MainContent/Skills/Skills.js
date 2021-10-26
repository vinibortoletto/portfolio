import React from 'react';

// Contexts
import { useData } from '../../../contexts/Data';

// Components
import { Title } from '../../Title/Title.styles';

// Styles
import { Container, Categories } from './Skills.styles';

export default function Skills() {
  const { data } = useData();

  return (
    <Container className="skills">
      <Title>{data.skills.title}</Title>

      <div>
        {data.skills.sections.map((section) => (
          <Categories key={section.id}>
            <h2>{section.title}</h2>
            <p>{section.description}</p>
          </Categories>
        ))}
      </div>
    </Container>
  );
}
