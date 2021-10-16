import logo from '../assets/logo.png';
import './Header.css'

function Header() {
    return (
      <header className="App-header">
        <a href="/">
          <img src={logo} alt="logo" id="logo" />
        </a>
        <div className="header-text">
          <p><a href="/om-oss">Om oss</a></p>
          <p><a href="/var-vision">Vår vision</a></p>
          <button id="contact-button"><a href="/kontakta-oss">Kontakta oss</a></button>
        </div>
      </header>
    )
}

export default Header;