import { v4 as uuidv4 } from 'uuid';

// the images
import Seasoned from '../images/Seasoned.png';
import Portfolio from '../images/PortfolioIMG.png';
import DribbleData from '../images/DribbleData.jpg';
import BinaryImage from '../images/BinaryImage.png';
import PageRank from '../images/gPagerank.png';
import MusicOrganizer from '../images/musicOrganizer.jpg';
import Minesweeper from '../images/minesweeper.png';
import Sickulator from '../images/Sickulator.gif';

const projects = [
  {
    id: uuidv4(),
    name: 'The Sickulator',
    desc: 'Using Python, PyGame, and Rust, the Sickulator simulates disease spread. Agents are assigned into families and have set schedules to follow everyday. Pathing algorithms determine their destinations and chances determines the rest.',
    img: Sickulator,
  },
  {
    id: uuidv4(),
    name: 'Dahlia Portfolio Website',
    desc: 'This is where we are currently. This website utilizes React and Javascript to create the website you are browsing through right now!',
    img: Portfolio,
  },
  {
    id: uuidv4(),
    name: 'Dribble Data',
    desc: 'Using Spring and Java, Dribble Data manipulates NBA data and finds trends between several variable points, allowing users to compare their favorite teams and players from the beginning of the NBA.',
    img: DribbleData,
  },
  {
    id: uuidv4(),
    name: 'Seasoned',
    desc: 'Seasoned was built using the MERN stack to provide relief to college students during the COVID-19 pandemic. With the Edamam API, Seasoned is able to send queries for recipes by ingredients users have right in their cupboard and  provide COVID testing sites are right at their fingertips.',
    img: Seasoned,
  },
  {
    id: uuidv4(),
    name: 'Music Organizer',
    desc: 'Short and sweet, this application simplifies music playlist creation with C++. Several sorting algorithms are explored, and users can see just how fast each one is in realtime.',
    img: MusicOrganizer,
  },
  {
    id: uuidv4(),
    name: 'Page Rank',
    desc: 'Imitating Google\'s Page Rank, this simple application uses adjacency list in C++ to execute the algorithm. ',
    img: PageRank,
  },
  {
    id: uuidv4(),
    name: 'Minesweeeper',
    desc: 'This appication takes after the wellknown Minesweeper game using C++, built from scratch using the external SFML library.',
    img: Minesweeper,
  },
  {
    id: uuidv4(),
    name: 'Binary Image Processor',
    desc: 'With C++, this project imitates photoshop features without the PhotoShop UI. Blending, overlays, color effects, and more were implemented using data structures to help with efficiency.',
    img: BinaryImage,
  },
];

export default projects;
