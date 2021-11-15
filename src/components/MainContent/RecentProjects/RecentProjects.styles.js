import styled from 'styled-components/macro';
import { media } from '../../../helpers/styles/mixins';
import { vars } from '../../../helpers/styles/variables';

export const Container = styled.section`
  ${media('laptop')} {
    grid-column: 2/3;
    grid-row: 1/3;
  }
`;

export const CardLogo = styled.img`
  height: 3rem;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  opacity: 1;
  pointer-events: all;
  transition: 0.2s ease-in-out;
`;

export const CardContent = styled.div`
  height: 100%;
  padding: 2rem;
  text-align: center;

  display: grid;
  align-items: center;

  opacity: 0;
  pointer-events: none;
  transition: 0.2s ease-in-out;

  ${media('tablet')} {
    grid-template-columns: 49% 2% 49%;

    p {
      width: 80%;
      text-align: left;
      justify-self: center;
    }
  }
`;

export const ButtonWrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 0.5rem;

  ${media(425)} {
    grid-template-columns: 1fr 1fr;

    button {
      &:first-of-type {
        justify-self: end;
      }
      &:last-of-type {
        justify-self: start;
      }
    }
  }

  ${media('tablet')} {
    grid-template-columns: auto;

    button {
      justify-self: center !important;
    }
  }
`;

export const Card = styled.div`
  width: 100%;
  height: 10rem;
  position: relative;
  border-left: 5px solid ${vars.color.grey};
  margin-bottom: 2rem;
  transition: 0.2s ease-in-out;
  z-index: 1;

  &:last-of-type {
    margin-bottom: 0;
  }

  /* Shadow */
  &:before {
    content: '';
    width: inherit;
    height: 10rem;
    background-color: black;
    position: absolute;
    z-index: -1;
    opacity: 0;
    transition: 0.2s ease-in-out;
    pointer-events: none;
  }

  &:hover {
    height: 15rem;

    &:before {
      height: 15rem;
      opacity: 0.7;
    }

    ${CardContent} {
      opacity: 1;
      pointer-events: all;
    }

    ${CardLogo} {
      top: 30%;
      opacity: 0;
      pointer-events: none;
    }
  }
`;

export const CardBg = styled.img`
  width: 100%;
  height: 100%;

  position: absolute;
  z-index: -2;

  object-fit: cover;
  filter: brightness(0.2);
`;

export const Line = styled.div`
  width: 100%;
  max-width: 15rem;
  justify-self: center;
  height: 0.5px;
  background-color: ${vars.color.lightGreen};
  opacity: 0.5;

  ${media('tablet')} {
    width: 1px;
    height: 10rem;
  }
`;
