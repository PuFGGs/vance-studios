import './Biography.css';
import React from 'react';

class Biography extends React.Component {
    render() {
        return (
            <div className='Biography'>
                <img src={this.props.image} alt='Team Image' className='Biography-Logo noselect' />
                <div>
                    <p>
                            First, Vance was founded in 2018. In those days, it was knowns for
                        business programs. In 2020 we decided to make games and changed our name
                        to Vance Studios.
                    </p>
                    <p>
                            Then, we began to make our first game called Exploit Rush,
                        which was a hyper-casual infinite runner game. We published our game
                        at end of 2020 on Google Play Store.
                    </p>
                    <p>
                            Next, we found a game jam that was an opportunity for improving
                        our-self in that sector. Game-jam's subject was "is something missing?".
                        We thought about it and decided to make an isometric robbery game.
                        We did "Jewel Thief" in 3 days and had more fun doing it than we thought.
                    </p>
                    <p>
                            After That, We had a little break for about three months because
                        of some of the team member's reasons. End of the break,
                        we engaged in another game-jam which was about "hacking in games".
                        We prepared our blackjack game that can accomplish cheats in the game.
                    </p>
                    <p>
                            Finally, We are working on a hacking simulation game called
                        "HackerGame". We have plans to publish that game mid of 2022.
                    </p>
                </div>
            </div>
        );
    }
}



export default Biography;