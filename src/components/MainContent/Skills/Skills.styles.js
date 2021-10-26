import styled from 'styled-components';
import { media } from '../../../helpers/styles/mixins';
import { vars } from '../../../helpers/styles/variables';

export const Container = styled.section`
  display: grid;
  justify-items: center;

  h2 {
    color: ${vars.color.grey};
    margin-bottom: 0.5rem;
  }

  ${media('laptop')} {
    justify-items: start;
  }
`;

export const Categories = styled.div`
  margin-bottom: 2rem;
`;
