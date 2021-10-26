import styled from 'styled-components/macro';
import { media } from '../../helpers/styles/mixins';
import { vars } from '../../helpers/styles/variables';

export const Container = styled.div`
  padding: 0 1.5rem;
  max-width: ${vars.maxWidth};
  margin: auto;

  section {
    margin-bottom: 5rem;

    &.about-me {
      margin-bottom: 0;
    }
  }

  ${media('laptop')} {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 4rem;
    padding: 2rem 2.5rem 0 2.5rem;

    h1 {
      text-align: left;
    }
  }
`;
