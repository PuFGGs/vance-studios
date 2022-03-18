import vance_logo from './assets/images/vpng3.png';
import mxc_logo from './assets/images/mxc_logo.png';
import er_logo from './assets/images/er_logo.png';
import jt_logo from './assets/images/jewelthief_logo.png';

import pufggs_logo from './assets/images/pufggs_logo.png';

import './Home.css';
import { Button } from 'react-bootstrap';
import Content from '../Content/Content';

function Home() {
  return (
    <div className='Home'>
      <div className='Home-FirstPart'>
        <img src={vance_logo} className='Home-FirstPart-Logo' />
      </div>

      <h1>OUR PROJECTS</h1>
      <div className='Home-SecondPart'>
        <Content image={mxc_logo} title='MEXICAN CASINO' type='BLACKJACK GAME' />
        <Content image={er_logo} title='EXPLOIT RUSH' type='HYPER CASUAL GAME' />
        <Content image={jt_logo} title='JEWEL THIEF' type='ISOMETRIC ROBBERY GAME' />
      </div>

      <h1>Contributors</h1>
      <div className='Home-ThirdPart'>
        <Content image={pufggs_logo} title='PuFGGs' type='Software Developer' borderRadius='25%'/>
        <Content image={mxc_logo} title='Hydra Artz' type='Graphic Designer' borderRadius='25%'/>
        <Content image={mxc_logo} title='NewbieDrummer' type='Level Designer / Sound Designer' borderRadius='25%'/>
        <Content image={mxc_logo} title='KaanCer' type='Sound Designer' borderRadius='25%'/>
      </div>

      <h1>Biography</h1>
      <h1>Contact</h1>
    </div>
  );
}



export default Home;
