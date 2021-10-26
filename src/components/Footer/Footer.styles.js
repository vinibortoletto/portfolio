import styled from 'styled-components/macro';
import { media } from '../../helpers/styles/mixins';
import { vars } from '../../helpers/styles/variables';

export const Container = styled.footer`
  margin-top: 15rem;
  text-align: center;
`;

export const Logo = styled.img`
  width: 10rem;
  margin-bottom: 2rem;
`;

export const SocialNetworks = styled.ul`
  display: flex;
  justify-content: center;
  grid-gap: 1rem;
  margin-bottom: 1rem;

  svg {
    font-size: 2rem;
    color: ${vars.color.lightGreen};
  }
`;

export const Copyright = styled.p`
  color: ${vars.color.lightGreen};
  font-size: ${vars.fontSize.small};
  margin: 3rem 0 15rem 0;

  span {
    font-weight: bold;
    font-family: ${vars.fontFamily.special};
  }

  ${media('laptop')} {
    font-size: ${vars.fontSize.regular};
  }
`;
