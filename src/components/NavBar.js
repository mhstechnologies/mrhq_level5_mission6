import './NavBar.css';
import { useState } from 'react';

function NavBar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className="NavBar_Navigation">
      <button 
        className="NavBar_Hamburger" 
        onClick={() => {setIsNavExpanded(!isNavExpanded)}}>
        {/* icon from heroicons.com */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={isNavExpanded ? "NavBar_Menu expanded" : "NavBar_Menu"}>
        <ul>
          <li>
            <a href="/menu1">Menu 1</a>
          </li>
          <li>
            <a href="/menu2">Menu 2</a>
          </li>
          <li>
            <a href="/menu3">Menu 3</a>
          </li>
          <li>
            <button className="NavBar_Button">Log In</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;