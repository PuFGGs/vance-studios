import vance_logo from './assets/images/vpng3.png';

import './Home.css';
import Biography from '../Biography/Biography';
import Contact from '../Contact/Contact';
import OurTeam from '../OurTeam/OurTeam';
import OurProjects from '../OurProjects/OurProjects';

function Home() {
  return (
    <div className='Home'>
      <div className='Home-FirstPart'>
        <img alt='Vance Logo' src={vance_logo} className='Home-FirstPart-Logo noselect' />
      </div>
      <OurProjects titleText={RepeatText("Projects", 200)}/>

      <div className='Home-Splitter'></div>
      
      <OurTeam titleText={RepeatText("Team", 200)}/>

      <h1>BIOGRAPHY</h1>
      <Biography image={vance_logo}/>

      <h1>CONTACT</h1>
      <Contact/>
    </div>
  );
}

function RepeatText(text, n)
{
    var dummy = text;
    for (let index = 0; index < n; index++) {
        dummy += " " + text
        if (index % 8 == 0)
        dummy += "\n"
    }
    return dummy;
}


export default Home;
