import React from 'react';
import styled from 'styled-components';
import HeroImg from '../assets/images/dahliaemptyface.png';
import Button from './Button';
import SocialMediaArrow from '../assets/images/social-media-arrow.svg';
import ScrollDownArrow from '../assets/images/scroll-down-arrow.svg';
import Text from './Text';

const WelcomeStyles = styled.div`
  .welcome {
    height: 100vh;
    min-height: 700px;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background-color: white; // this is temporary
  }
  .welcome__heading {
    font-size: 2rem;
    margin-bottom: -4rem;
    position: relative;
    span {
      display: inline-block;
      width: 100%;
    }
    .welcome__name {
      display: flex;
      font-family: 'Montserrat SemiBold';
      font-size: 7rem;
      letter-spacing: 0.5rem;
      left: 100px;
      flex-direction: column;
      gap: 2rem;
      color: var(--deep-dark); //change this
    }
  }
  .welcome__img {
    max-width: 600px;
    width: 100%;
    height: 450px;
    margin: 0 auto;
    margin-right: 10px;
   // border: 2px solid var(--gray-1); //ditto
  }
  .welcome__info {
    margin-top: -27rem;
    margin-right: 300px;
  }
  .welcome__social,
  .welcome__scrollDown {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: absolute;
    bottom: 20px;
    width: 50px;
  }
  .welcome__social {
    left: 50px;
  }
  .welcome__scrollDown {
    right: 50px;
  }
  .welcome__social__indicator,
  .welcome__scrollDown {
    width: 50px;
    p {
      font-size: 1.6rem;
      transform: translateY(-70px) rotate(90deg);
      letter-spacing: 0.7rem;
      text-transform: uppercase;
    }
    img {
      max-height: 45px;
      width: 16px;
      margin: 0 auto;
      object-fit: contain;
    }
  }
  .welcome__scrollDown {
    img {
      max-height: 70px;
    }
  }
  .welcome__social__text {
    ul {
      li {
        margin-bottom: 1rem;
        a {
          display: inline-block;
          font-size: 1.6rem;
          transform: rotate(-90deg);
          letter-spacing: 5px;
          margin-bottom: 2rem;
        }
      }
    }
  }
  @media only screen and (max-width: 768px) {
    .welcome {
      min-height: 750px;
    }
    .welcome__heading {
      font-size: 2.4rem;
      margin-bottom: -3rem;
      .welcome__name {
        font-size: 4.5rem;
      }
    }
    .welcome__img {
      height: 300px;
    }
    .welcome__info {
      margin-top: 3rem;
    }
    .welcome__social {
      left: 0px;
      bottom: -15%;
      width: 20px;
      .welcome__social__indicator {
        width: 20px;
        p {
          font-size: 1.2rem;
        }
        img {
          max-height: 22px;
        }
      }
      .welcome__social__text {
        ul {
          li {
            a {
              font-size: 1.2rem;
              margin-bottom: 1rem;
            }
          }
        }
      }
    }
    .welcome__scrollDown {
      right: 0;
      width: 20px;
      gap: 1rem;
      p {
        font-size: 1.3rem;
      }
    }
  }
`;

export default function WelcomeSection() {
  return (
    <WelcomeStyles>
      <div className="welcome">
        <div className="container">
          <h1 className="welcome__heading">
            <span> Hello! I am </span>
            <span className="welcome__name"> dahlia la pommeray </span>
          </h1>
          <div className="welcome__img">
            <img src={HeroImg} alt="Dahlia Drawing Image" />
          </div>
          <div className="welcome__info">
            <Text />
            <Button btnText="see my projects" btnLink="/projects" />
          </div>
          <div className="welcome__social">
            <div className="welcome__social__indicator">
              <p>Follow</p>
              <img src={SocialMediaArrow} alt="icon" />
            </div>
            <div className="welcome__social__text">
              <ul>
                <li>
                  <a
                    href="http://github.com/dahlial"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GH
                  </a>
                </li>
                <li>
                  <a
                    href="http://linkedin.com/in/dahlialapommeray"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LI
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="welcome__scrollDown">
            <p>Scroll</p>
            <img src={ScrollDownArrow} alt="ScrollDown Arrow" />
          </div>
        </div>
      </div>
    </WelcomeStyles>
  );
}
