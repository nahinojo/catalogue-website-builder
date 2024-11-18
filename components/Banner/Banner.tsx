import './Banner.css';
import bannerImage from '../../assets/images/mstb.jpg';

const Banner = () => {
  return (
    <div id='banner'>
      <img id='mstb' src={bannerImage} alt="Multi-purpose Science and Technology Building" />
      <div id='title'>
        <div id='title-top'>Welcome to UCI Department of Physics & Astronomy’s</div>
        <div id='title-bottom'>Lecture Demonstration Program</div>
      </div>
    </div>
  );
};

export default Banner;