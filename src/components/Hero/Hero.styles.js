import styled from 'styled-components/macro';
import { vars } from '../../helpers/styles/variables';
import { media } from '../../helpers/styles/mixins';

export const Container = styled.section`
  width: 100%;
  max-width: ${vars.maxWidth};
  height: 90vh;

  display: grid;
  justify-items: center;
  grid-template-rows: 1fr 1fr 3fr;

  padding-top: 3rem;
  margin: auto;

  ${media('laptop')} {
    height: 86vh;
    padding: 7rem 5rem 0 5rem;

    grid-template-rows: 1fr 1fr 3fr;
    grid-template-columns: 2fr 1fr;
  }
`;

export const Avatar = styled.div`
  width: 10rem;
  margin-bottom: 1.5rem;

  img {
    width: 100%;
  }

  ${media('laptop')} {
    width: 17vw;
    max-width: 13rem;

    grid-column: 2 / 3;
    grid-row: 1 / 3;
    align-self: center;
    justify-self: end;
  }
`;

export const Title = styled.div`
  text-align: center;

  h1 {
    font-weight: bold;
    font-family: ${vars.fontFamily.special};
    font-size: 1.5rem;
    color: ${vars.color.lightGreen};
  }

  h2 {
    color: ${vars.color.grey};
  }

  ${media('laptop')} {
    justify-self: start;
    text-align: left;
    margin-bottom: 3rem;

    h1 {
      font-size: 3.5rem;
    }

    h2 {
      font-size: 1.3rem;
    }
  }
`;

export const Info = styled.div`
  ul {
    display: grid;
    gap: 1rem;
    justify-items: center;
  }

  svg {
    position: relative;
    top: 3px;

    margin-right: 0.5rem;
    color: ${vars.color.lightGreen};
  }

  ${media('laptop')} {
    justify-self: start;

    ul {
      justify-items: start;
      grid-template-columns: 1fr 1fr;
      row-gap: 4rem;
      font-size: 1.2rem;
    }
  }
`;
