import styled from 'styled-components/macro';
import { media } from '../../helpers/styles/mixins';

export const Container = styled.div`
  position: relative;
  margin-bottom: 4rem;
`;

export const Drawing = styled.img`
  width: 80%;
  position: absolute;
  bottom: 99.7%;
  left: 50%;
  z-index: -1;
  transform: translateX(-50%);

  ${media(500)} {
    opacity: 0.2;
    filter: saturate(0.6);
  }
`;

export const Shape = styled.img`
  width: 100%;
`;
