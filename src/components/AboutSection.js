import React from 'react'
import styled from 'styled-components';
import Button from './Button';
import PText from './PText';
import SectionTitle from './SectionTitle';

const AboutSectionStyles = styled.div`
  padding: 10rem 0;
  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: center;
  }
  .aboutSection__left,
  .aboutSection__right {
    flex: 3;
    text-align: center;
  }
  .section-title {
    text-align: center;
  }
  .para {
    margin-top: 2rem;
    margin-left: 2;
  }
  .aboutSection__buttons {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    margin-top: 2rem;
    margin-left: 9rem;
  }
  @media only screen and (max-width: 950px) {
    .aboutSection__left {
      flex: 4;
    }
    .aboutSection__right {
      flex: 3;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      text-align: center;
    }
    .aboutSection__left,
    .aboutSection__right {
      width: 100%;
    }
    .aboutSection__right {
      margin-top: 3rem;
    }
    .section-title {
      text-align: center;
    }
    .para {
      margin: 0 auto;
      margin-top: 2rem;
    }
    .aboutSection__buttons {
      flex-direction: column;
      gap: 0rem;
      .button-wrapper,
      a {
        width: 100%;
        text-align: center;
      }
    }
  }
`;

export default function AboutSection() {
    return (
        <AboutSectionStyles>
        <div className="container">
          <div className="aboutSection__right">
            <SectionTitle
              subheading="Just a brief introduction"
              heading="About Me"
            />
            <PText>
              I am a computer science and dance student at the University of Central
              Florida originally from Orlando, Florida. Simply put, I love to code. You can find me either
              creating an application, reading a rom-com, dancing, or watching Tangled. 
            </PText>
            <div className="aboutSection__buttons">
              <Button btnText="Works" btnLink="/projects" />
              <Button btnText="Read More" btnLink="/about" outline />
            </div>
          </div>
        </div>
      </AboutSectionStyles>
    )
}
