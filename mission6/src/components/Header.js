import './Header.css';
import NavBar from './NavBar';

function Header() {
  return (
    <>
      <header className="Header_Body">
        <div className="Header_Home">
        <img 
          className="Header_Logo"
          src='./company_logo.png' 
          alt='company_logo' />
        <h3 className="Header_Company">My Company</h3>
        </div>
        <NavBar />
      </header>
    </>
  );
};

export default Header;