import logo from './assets/images/vpng2.png';
import './Header.css';
// import { Button } from 'react-bootstrap';

function Header() {
  return (
    <header className="Header noselect">
      <img src={logo} className="Header-vance-logo" alt="logo" />
      {/* <div className="Header-button-container">
        <Button className="button-container-item">Home</Button>
        <Button className="button-container-item">Our Project</Button>
        <Button href="https://discord.gg/5cAgqBUj5h" className="button-container-item">Hydra Networkz</Button>
      </div> */}
    </header>
  );
}



export default Header;
