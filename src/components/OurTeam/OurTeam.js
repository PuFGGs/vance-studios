import './OurTeam.css';
import React from 'react';
import pufggs_logo from './assets/images/pufggs_logo.png';
import hydra_logo from './assets/images/hydra_logo.png';
import newbiedrummer_logo from './assets/images/newbiedrummer_logo.png';
import kaancer_logo from './assets/images/kaancer_logo.png';
// import vance_logo from './assets/images/vpng3.png';
import Content from '../Content/Content';

class OurTeam extends React.Component {
    render() {
        return (
            <div className='OurTeam'>
                <Content image={pufggs_logo} title='PuFGGs' type='Software Developer' borderRadius='25%' />
                <Content image={hydra_logo} title='Hydra Artz' type='Graphic Designer' borderRadius='25%' />
                <Content image={newbiedrummer_logo} title='NewbieDrummer' type='Level Designer / Sound Designer' borderRadius='25%' />
                <Content image={kaancer_logo} title='KaanCer' type='Sound Designer' borderRadius='25%' />
            </div>
        );
    }
}




export default OurTeam;