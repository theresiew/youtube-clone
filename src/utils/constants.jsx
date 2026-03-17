import { MdHome, MdLocalFireDepartment, MdSportsEsports, MdLiveTv, MdSportsBasketball, MdSchool } from 'react-icons/md';
import { BsMusicNoteBeamed } from 'react-icons/bs';
import { GiFilmProjector } from 'react-icons/gi';
import { FaCode, FaGlobe, FaLaughSquint } from 'react-icons/fa';
import { BiNews } from 'react-icons/bi';

export const categories = [
  { name: 'Home',      icon: <MdHome />,                keyword: 'New Videos' },
  { name: 'Trending',  icon: <MdLocalFireDepartment />, keyword: 'Trending' },
  { name: 'Coding',    icon: <FaCode />,                keyword: 'Coding' },
  { name: 'Music',     icon: <BsMusicNoteBeamed />,     keyword: 'Music' },
  { name: 'Gaming',    icon: <MdSportsEsports />,       keyword: 'Gaming' },
  { name: 'Movies',    icon: <GiFilmProjector />,       keyword: 'Movies Trailers' },
  { name: 'Live',      icon: <MdLiveTv />,              keyword: 'Live' },
  { name: 'News',      icon: <BiNews />,                keyword: 'News' },
  { name: 'Sports',    icon: <MdSportsBasketball />,    keyword: 'Sports' },
  { name: 'Comedy',    icon: <FaLaughSquint />,         keyword: 'Comedy' },
  { name: 'Education', icon: <MdSchool />,              keyword: 'Education' },
  { name: 'World',     icon: <FaGlobe />,               keyword: 'World' },
];

export const demoThumbnailUrl = 'https://i.ibb.co/G2L2Gwp/API-Course.png';
export const demoChannelUrl = '/channel/UCmXmlB4-HJytD7wek0Uo97A';
export const demoVideoUrl = '/video/GDa8kZLNhJ4';
export const demoChannelTitle = 'JavaScript Mastery';
export const demoVideoTitle = 'Build and Deploy 5 JavaScript & React API Projects';
export const demoProfilePicture = 'http://dergipark.org.tr/assets/app/images/buddy_sample.png';
export const demoViews = '2,348,573';