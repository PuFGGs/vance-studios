import './OurProjects.css';
import React from 'react';
import mxc_logo from './assets/images/mxc_logo.png';
import er_logo from './assets/images/er_logo.png';
import jt_logo from './assets/images/jewelthief_logo.png';
import hg_logo from './assets/images/vpng3.png';
import Content from '../Content/Content';

class OurProjects extends React.Component {
    render() {
        return (
            <div className='OurTeam'>
                <Content image={jt_logo} title='JEWEL THIEF' type='Isometric Robbery Game' />
                <Content image={er_logo} title='EXPLOIT RUSH' type='Hyper Casual Game' />
                <Content image={mxc_logo} title='MEXICAN CASINO' type='Blackjack Table Game' />
                <Content image={hg_logo} title='HACKERGAME' type='Hacking Simulation Game' progress='25' />
            </div>
        );
    }
}



export default OurProjects;