import styled from 'styled-components/macro';
import { media } from '../../helpers/styles/mixins';
import { vars } from '../../helpers/styles/variables';

export const Container = styled.header`
  max-width: ${vars.maxWidth};
  margin: auto;

  display: flex;
  justify-content: space-between;
  padding: 1rem 1.5rem 0 1.5rem;

  ${media('laptop')} {
    padding: 2rem 2.5rem 0 2.5rem;
  }
`;

export const Logo = styled.img`
  ${media('laptop')} {
    width: 3.5rem;
  }
`;

export const Wrapper = styled.div`
  ${media('laptop')} {
    margin: auto 0;
  }
`;

export const FlagButton = styled.button`
  margin-left: 1rem;
`;
