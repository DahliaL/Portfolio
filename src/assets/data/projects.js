import { v4 as uuidv4 } from 'uuid';

// the images
import Seasoned from '../images/Seasoned.png';
import DribbleData from '../images/DribbleData.jpg';
import BinaryImage from '../images/BinaryImage.png';
import PageRank from '../images/gPagerank.png';
import MusicOrganizer from '../images/musicOrganizer.jpg';
import Minesweeper from '../images/minesweeper.png';

const projects = [
  {
    id: uuidv4(),
    name: 'Dahlia Portfolio Website',
    desc: 'We are here, right now',
    img: Seasoned,
  },
  {
    id: uuidv4(),
    name: 'Dribble Data',
    desc: 'Fill in more later',
    img: DribbleData,
  },
  {
    id: uuidv4(),
    name: 'Seasoned',
    desc: 'Fill in',
    img: Seasoned,
  },
  {
    id: uuidv4(),
    name: 'Music Organizer',
    desc: 'Fill in',
    img: MusicOrganizer,
  },
  {
    id: uuidv4(),
    name: 'Page Rank',
    desc: 'Fill in',
    img: PageRank,
  },
  {
    id: uuidv4(),
    name: 'Minesweeeper',
    desc: 'Fill in',
    img: Minesweeper,
  },
  {
    id: uuidv4(),
    name: 'Binary Image Processor',
    desc: 'Fill in',
    img: BinaryImage,
  },
];

export default projects;
