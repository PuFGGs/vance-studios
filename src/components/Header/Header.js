import logo from './assets/images/vpng2.png';
import './Header.css';

function Header() {
  return (
    <header className="Header noselect">
      <img src={logo} className="Header-vance-logo" alt="logo" />
    </header>
  );
}



export default Header;
