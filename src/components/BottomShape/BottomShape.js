import React from 'react';
import shapeMobile from '../../images/illustrations/shape-bottom-mobile.svg';
import shapeDesktop from '../../images/illustrations/shape-bottom-desktop.svg';
import { useData } from '../../contexts/Data';
import { Container } from './BottomShape.styles';

export default function BottomShape() {
  const { data, width } = useData();

  return (
    <Container>
      <img
        src={width < 768 ? shapeMobile : shapeDesktop}
        alt={data.illustrationsAlt.shape}
      />
    </Container>
  );
}
