import React from 'react'
import {Navbar, Nav} from "react-bootstrap";
import {BrowserRouter as Router, Switch, Route, NavLink,} from "react-router-dom";
import Home from "../home/Home";
import About from "../about/About";
import Tours from "../tours/Tours";
import Contact from "../contact/Contact";


function Layout() {
    return (
        <Router>
            <Navbar expand="md">
                
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <NavLink to="/" exact className="nav-link">
                            Home
                        </NavLink>
                        <NavLink to="/tours" className="nav-link">
                            Tours
                        </NavLink>
                        

                        <NavLink to="/" exact>
                            <Navbar.Brand>Re-Cycle</Navbar.Brand>
                        </NavLink>
                        
                        <NavLink to="/about" className="nav-link">
                            About
                        </NavLink>
                        <NavLink to="/contact" className="nav-link">
                            Contact
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/tours" component={Tours} />
                    <Route path="/contact" component={Contact} />
                </Switch>
        </Router>
    );
}

export default Layout;