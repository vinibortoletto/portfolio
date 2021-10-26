import styled from 'styled-components/macro';
import { vars } from '../../helpers/styles/variables';
import { media } from '../../helpers/styles/mixins';

export const Button = styled.button`
  width: 10rem;
  padding: 0.5rem 1rem;

  border: 1px solid ${vars.color.lightGreen};
  border-radius: 100rem;

  background-color: transparent;
  color: ${vars.color.lightGreen};
  font-size: ${vars.fontSize.small};
  transition: 0.2s ease-in-out;

  svg {
    margin-right: 0.3rem;
    position: relative;
    top: 2px;
  }

  &:hover {
    background-color: ${vars.color.lightGreen};
    color: ${vars.color.darkGreen};
  }

  ${media('laptop')} {
    font-size: 1rem;
    width: 12rem;
  }
`;
