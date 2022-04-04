import './Biography.css';
import React from 'react';

class Biography extends React.Component {
    render() {
        return (
            <div className='Biography'>
                <img src={this.props.image} alt='Team Image' className='Biography-Logo noselect' />
                <div>
                    <p>
                            Vance was founded in 2018, first started by creating business related softwares.
                        In 2020 we decided to start making games and changed our name to Vance Studios.
                    </p>
                    <p>
                            Our first game was a hyper-casual mobile game called Exploit Rush.
                        We published this game at end of 2020 on Google Play Store.
                    </p>
                    <p>
                            Next, we found a game jam that was an opportunity for improving
                        our-self in that sector. Game-jam's subject was "is something missing?".
                        We thought about it and decided to make an isometric robbery game.
                        We did "Jewel Thief" in 3 days and had more fun doing it than we thought.
                    </p>
                    <p>
                            After doing nothing for three months, we engaged in another Game Jam which was about cheating in games.
                        That's when we created our Blackjack game MXCasino.
                    </p>
                    <p>
                            Currently we are working on a 2D hacking game called "HackerGame".
                            The idea has arised from our passion about hacking games such as Hacknet and Uplink.
                            Hackergame is our biggest and most detailed project yet.

                    </p>
                </div>
            </div>
        );
    }
}



export default Biography;