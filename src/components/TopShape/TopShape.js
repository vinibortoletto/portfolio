import React from 'react';

// Contexts
import { useData } from '../../contexts/Data';

// Images
import shapeMobile from '../../images/illustrations/shape-top-mobile.svg';
import shapeDesktop from '../../images/illustrations/shape-top-desktop.svg';
import drawing from '../../images/illustrations/drawing.svg';

// Styles
import { Container, Drawing, Shape } from './TopShape.styles';

export default function TopShape() {
  const { data, width } = useData();

  return (
    <Container>
      <Drawing src={drawing} alt={data.illustrationsAlt.drawing} />
      <Shape
        src={width < 768 ? shapeMobile : shapeDesktop}
        alt={data.illustrationsAlt.shape}
      />
    </Container>
  );
}
