import tn from "/images/night.png";
import tl from "/images/light.png";
import logotype from "/images/logo.png";
import { useContext } from "react";
import { DentalContext } from "../DentalContext";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const { theme, changeColor } = useContext(DentalContext);
  const handleColorChange = () => {
    const newColor = theme.color === 'light' ? 'dark' : 'light';
    changeColor(newColor);
  };

  return (
    <nav className='navbar'>
      <div>
        <Link to='/'>
        <img className='logoimg' src={logotype} alt="" />
        </Link>
      </div>
      <div>
        <ul>
          <li>
            <Link className='bg-navb' to='/'>Home</Link>
          </li>
          <li>
            <Link className='bg-navb' to='/favs'>Favorites</Link>
          </li>
          <li>
            <Link className='bg-navb' to='/contact'>Contact</Link>
          </li>
        </ul>
      </div>
      <div>
        <button onClick={handleColorChange}>
          {theme.color === 'light' ? <img className='imgSelectbg' src={tn} alt="Toggle Night" /> : <img className='imgSelectbg' src={tl} alt="Toggle Light" />}
        </button>
      </div>
    </nav>
  );
};