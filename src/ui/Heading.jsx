import styled, { css } from 'styled-components';

const Heading = styled.h1`
  line-height: 1.4;
  font-weight: 600;

  ${props =>
    props.as === 'h1' &&
    css`
      font-size: 3rem;
    `}
  ${props =>
    props.as === 'h2' &&
    css`
      font-size: 2rem;
    `}
    ${props =>
    props.as === 'h3' &&
    css`
      font-size: 2rem;
      font-weight: 500;
    `}
`;

export default Heading;
