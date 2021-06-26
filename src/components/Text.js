import React from 'react';
import styled from 'styled-components';
import Typewriter from "typewriter-effect";

const PStyle = styled.div`
  max-width: 800px;
  margin: 0 auto;
  font-size: 25px;
  font: white;
  line-height: 1.3em;
  @media only screen and (max-width: 768px) {
    font-size: 1.4rem;
  }
  .para {
    width: 400px;
    font-size: 10px;
  }
`;

const textLines = [
  'Computer Science Student',
  'Aspiring Software Engineer',
  'Persistent Dancer',
];

export default function Text() {
  return (
    <PStyle>
    <Typewriter
       options={{
        strings: textLines,
        autoStart: true,
        loop: true,
      }}
       />
    </PStyle>
  );
}
