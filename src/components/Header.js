import React from 'react';
import { useHistory } from 'react-router-dom';
import flickrLogo from '../assets/images/flickr_logo.png';
import './header.scss';
 
const Header = () => {
  const history = useHistory();
  const changeRoute = (route) => history.push(route);

  return (
    <header className="header">
      <img className="header__logo" onClick={() => changeRoute('/')} src={flickrLogo} alt="Flickr Logo" />
      <ul className="header__menu-list">
        <li onClick={() => changeRoute('/')}>Images</li>
        <li onClick={() => changeRoute('/favorites')}>Favorites</li>
      </ul>
    </header>
  )
}
 
export default Header;
