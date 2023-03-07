import styled from 'styled-components/macro';
import { media } from '../../../helpers/styles/mixins';

export const Container = styled.section`
  display: grid;
  justify-items: center;

  p {
    max-width: 40rem;
  }

  ${media('laptop')} {
    display: block;

    p {
      max-width: none;
      margin-bottom: 1rem;
    }
  }
`;
