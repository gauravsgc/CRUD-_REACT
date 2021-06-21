import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

//import { Navbar,Nav } from 'react-bootstrap';
export class Navig extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light  bg-danger">
                <div className="navbar-brand" href="#">StUdentRecords</div>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item" >
                            <NavLink to="/" exact activeStyle={{ color: 'green' }} className="nav-link text-indigo">Home</NavLink>
                        </li>
                        <li className="nav-item" >
                            <NavLink to="/ADD" exact activeStyle={{ color: 'green' }} className="nav-link text-indigo">ADD DATA</NavLink>
                        </li>
                    </ul>

                </div>

            </nav>







        )
    }
}

export default Navig
