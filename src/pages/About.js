import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import { Link } from 'react-router-dom';
import DResume from '../assets/data/DahliaResume.pdf'
import AboutImg from '../assets/images/MemojiGIF.gif';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';

const ButtonStyle = styled.div`
  margin-top: 2rem;
  .button {
    font-size: 2.2rem;
    background-color: ${(props) =>
      props.outline ? 'transperant' : 'var(--gray-1)'};
    padding: 0.7em 2em;
    border: 2px solid var(--gray-1);
    border-radius: 8px;
    display: inline-block;
    color: ${(props) => (props.outline ? 'var(--gary-1)' : 'black')};
  }
  @media only screen and (max-width: 768px) {
    .button {
      font-size: 1.8rem;
    }
  }
`;

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: gray; //subject to chnage
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid white;
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Hi! My name is <span>Dahlia La Pommeray</span> and I am a
              </p>
              <h2 className="about__heading">Computer Science Student</h2>
              <div className="about__info">
                <PText>
                  When I was 11 years old, I stumbled upong the art of programming. 
                  I would take website templates and break each line to see what it was responsible for.
                  I eventually started creating my own website templates and... that was the beginning of my passion 
                  for coding. I neglected programming after a few months of this and eventually returned my senior year 
                  of high school by participating in programming competitions.
                  <br /> <br />
                  I also got into dancing around the same time. I auditioned for my high school's dance team and
                  the opportunity changed my life. I decided to take dance more seriously after COVID-19 hit and made
                  the decision to transfer schools to pursue becoming a better dancer along with my aspirations of 
                  becoming a computer scientist.
                  <br />
                  <br />
                  My goal is to ultimately become the best programmer that I can be. I hope to learn as much as I can so that
                  the applications and softwares that I develop make life easier and better for others, one individual at a time. 
                  Becoming a part of something bigger than myself is how I want to contribute to the world and programming gives 
                  me the opportunity to do exactly that.
                </PText>
              </div>
              <ButtonStyle> 
              <Link className="button" to={DResume} download="DahliaLResume" target='_blank'>
                Download Resume
              </Link>
              </ButtonStyle>
            </div>
            <div className="right">
            <img src={AboutImg} alt="me" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading"> Education </h1>
              <AboutInfoItem
                title="School"
                items={['University of Florida, University of Central Florida']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">My Skills</h1>
              <AboutInfoItem
                title="Languages"
                items={['Java', 'C++', 'JavaScript', 'Python', 'R', 'HTML', 'CSS', 'React']}
              />
              <AboutInfoItem
                title="More"
                items={['Express.JS', 'Bootstrap', 'Git', 'OOP', 'SQL', 'MongoDB']}
              />
              <AboutInfoItem
                title="Learning"
                items={['Django']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Experiences</h1>

              <AboutInfoItem
                title="January 2021 - May 2021"
                items={['Undergraduate Teaching Assistant for Software Engineering']}
              />
              <AboutInfoItem
                title="August 2019"
                items={['Started Bachelors Degree in Computer Science']}
              />
            </div>
          </div>
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </>
  );
}
