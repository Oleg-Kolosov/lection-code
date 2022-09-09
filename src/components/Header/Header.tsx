import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/favorites">
                            Favorites
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/sign-in">
                            Sign In
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/sign-up">
                            Sign Up
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
