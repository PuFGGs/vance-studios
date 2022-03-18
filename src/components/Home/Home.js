import vance_logo from './assets/images/vpng3.png';
import vance_logo2 from './assets/images/vpng2.png';

import './Home.css';
import Biography from '../Biography/Biography';
import Contact from '../Contact/Contact';
import OurTeam from '../OurTeam/OurTeam';
import OurProjects from '../OurProjects/OurProjects';

function Home() {
  return (
    <div className='Home'>
      <div className='Home-FirstPart'>
        <img src={vance_logo} className='Home-FirstPart-Logo noselect' />
      </div>

      <h1>OUR PROJECTS</h1>
      <OurProjects/>

      <h1>OUR TEAM</h1>
      <OurTeam/>

      <h1>BIOGRAPHY</h1>
      <Biography image={vance_logo}/>

      <h1>CONTACT</h1>
      <Contact/>
    </div>
  );
}



export default Home;
