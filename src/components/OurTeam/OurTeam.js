import React from 'react';
import pufggs_logo from './assets/images/pufggs_logo.png';
import hydra_logo from './assets/images/hydra_logo.png';
import newbiedrummer_logo from './assets/images/newbiedrummer_logo.png';
import kaancer_logo from './assets/images/kaancer_logo.png';
import Content from '../Content/Content';

class OurTeam extends React.Component {
    render() {
        return (
            <div className='ListPart'>
                <h1 className='noselect'>{this.props.titleText}</h1>
                <Content image={pufggs_logo} title='PuFGGs' type='Software Developer' borderRadius='15px' />
                <Content image={hydra_logo} title='Hydra Artz' type='Graphic Designer' borderRadius='15px' />
                <Content image={newbiedrummer_logo} title='NewbieDrummer' type='Level Designer / Sound Designer' borderRadius='15px' />
                <Content image={kaancer_logo} title='KaanCer' type='Sound Designer' borderRadius='15px' />
            </div>
        );
    }
}

export default OurTeam;