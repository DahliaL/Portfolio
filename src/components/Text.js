import React from 'react';
import styled from 'styled-components';
import Typed from 'react-typed';

const PStyle = styled.div`
  max-width: 800px;
  margin: 0 auto;
  font-size: 60px;
  line-height: 1.3em;
  @media only screen and (max-width: 768px) {
    font-size: 1.4rem;
  }
  .para {
    font-size: 900px;
  }
`;

const textLines = [
  'Current Computer Science Student',
  'Aspiring Software Engineer',
  'Occasional Dancer',
];

export default function Text() {
  return (
    <PStyle className="para">
      <Typed
        strings={textLines}
        typeSpeed={40}
        backSpeed={50}
        attr="placeholder"
        loop
      >
        <input type="text" />
      </Typed>
    </PStyle>
  );
}
