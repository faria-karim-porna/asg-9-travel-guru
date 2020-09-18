import React, { useContext } from 'react';
import './Header.css';
import { UserContext } from '../../App';
import logo from '../../Icon/Logo.png'
import { Link } from 'react-router-dom';

const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div>
        <nav className="navbar navbar-expand-lg">
        <a className="navbar-brand justify-content-start ml-0" href="#"><Link to="/home"><img src={logo}/></Link></a>
        <form className="form-inline justify-content-center my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav justify-content-end">
            <li className="nav-item active">
              <a className="nav-link" href="#">News</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Destination</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Blog</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>
            <li className="nav-item">
              <Link to="/login"><a className="nav-link" href="#">Log-in</a></Link>
            </li>
            <li className="nav-item active">
              <button className="log-out" onClick={() => setLoggedInUser({})}>Log out</button>
            </li>
          </ul>
        </div>
      </nav>
        </div>
    );
};

export default Header;