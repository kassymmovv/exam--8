import React from 'react';
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
            <div className="NavBar">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <h1 className="navbar-brand">QUOTES</h1>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">All</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/starwars">Star Wars</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/famous">Famous people</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/saying">Saying</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/humour">Humour</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/motivational">Motivational</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/addquote">Add Quote</NavLink>
                            </li>

                        </ul>
                    </div>
                </nav>
            </div>
    );
};

export default NavBar;