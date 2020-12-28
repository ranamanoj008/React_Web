import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = ()=>{
    return(
        <>
        <div className="container-fluid mb-2">
        <div className="row">
          <div className="col-10 mx-auto">

        <nav className="navbar navbar-expand-md navbar-light">
            <div className="container">
            <NavLink  exact className="navbar-brand" to="/" ><h1>Navbar</h1></NavLink>
              <button className="navbar-toggler" data-toggle="collapse" data-target="#collpasedlinks">
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className=" collapse navbar-collapse" id="collpasedlinks">
              <ul className="navbar-nav ml-auto mb-2 text-center">
                <li className="nav-item">
                    <NavLink activeClassName="menu_active" exact className="nav-link" to="/" >Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink activeClassName="menu_active" exact className="nav-link" to="/services" >Services</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink activeClassName="menu_active" exact className="nav-link" to="/about" >About</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink activeClassName="menu_active" exact className="nav-link" to="/contact" >Contact</NavLink>
                </li>
              </ul>
              </div>
            </div>
          </nav>

          </div>
        </div>
        </div>
         </>
    )
}

export default Navbar;