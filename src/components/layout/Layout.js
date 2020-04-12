import React from 'react'
import {Navbar, Nav} from "react-bootstrap";
import {BrowserRouter as Router, Switch, Route, NavLink,} from "react-router-dom";
import Home from "../home/Home";
import About from "../about/About";
import Tours from "../tours/Tours";
import Contact from "../contact/Contact";
import LogoTop from "../../assets/images/thelogo5.png";


function Layout() {
    return (
        <Router>
            <Navbar expand="md">
                
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <NavLink to="/" exact>
                            
                        </NavLink>
                        <NavLink to="/" exact id="nav-link">
                            Home
                        </NavLink>
                        <NavLink to="/tours" id="nav-link">
                            Tours
                        </NavLink>
                        
                        <Navbar.Brand><img alt="" src={LogoTop} width="80" height="70" className="d-inline-block align-top" /></Navbar.Brand>

                        <NavLink to="/about" id="nav-link">
                            About
                        </NavLink>
                        <NavLink to="/contact" id="nav-link">
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