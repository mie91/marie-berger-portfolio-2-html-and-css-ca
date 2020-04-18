import React from 'react'
import {Navbar, Nav} from "react-bootstrap";
import {BrowserRouter as Router, Switch, Route, NavLink,} from "react-router-dom";
import Home from "../home/Home";
import About from "../about/About";
import Tours from "../tours/Tours";
import Contact from "../contact/Contact";
import LogoTop from "../../assets/images/thelogo5.png";
import YelpIcon from "../../assets/images/icons/iconfinder_yelp_287630.png";
import TripIcon from "../../assets/images/icons/iconfinder_trip_advisor_287642.png";
import FbIcon from "../../assets/images/icons/iconfinder_facebook_circle_black_107153.png";
import InstaIcon from "../../assets/images/icons/iconfinder_38-instagram_1161954.png";
import TwitterIcon from "../../assets/images/icons/iconfinder_43-twitter_104461.png";


function Layout() {
    return (
        <>
            <Router>
                <Navbar expand="md">             
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <img alt="" src={LogoTop} width="120" height="120" className="second-brand" />
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
                            <Navbar.Brand><img alt="Re Cycle logo" src={LogoTop} width="80" height="70" className="d-inline-block align-top" /></Navbar.Brand>
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
            <footer>
                <div className="footercontent">
                        <div className="socialMedia">
                            <a href="/"><img className="btnIcon" src={InstaIcon} alt="Instagram Logo" /></a>
                            <a href="/"><img className="btnIcon" src={FbIcon} alt="Facebook Logo" /></a>
                            <a href="/"><img className="btnIcon" src={TwitterIcon} alt="Twitter Logo" /></a>
                            <a href="/"><img className="btnIcon" src={YelpIcon} alt="Yelp Logo" /></a>
                            <a href="/"><img className="btnIcon" src={TripIcon} alt="Trip Advisor Logo" /></a>
                        </div>
                    <p>Copyright © 2020 Re-Cycle Paris</p>
                </div>
            </footer>
        </>
    );
}

export default Layout;