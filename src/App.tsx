import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./App.scss";
import { Menu, Footer, TopBar } from './layout';
import { HomePage, MapPage } from './pages';

const About = () => <div className="p-l">About</div>
const Users = () => <div className="p-l">Users</div>
const Test = () => <div className="p-l">Test</div>

const App: React.FC = () => {
  	return (
        <Router>
            <div>
                <TopBar />
                <div className="container">
                    <Menu />
                    <div className="content">
                        <div className="content-top">
                            <Route path="/" exact component={HomePage} />
                            <Route path="/about/" exact component={About} />
                            <Route path="/users" exact component={Users} />
                            <Route path="/map/" exact component={MapPage} />
                            <Route path="/test1/" exact component={Test} />
                            <Route path="/test2/" exact component={Test}/>
                        </div>
                        <Footer />
                    </div>
                </div>
            </div>
        </Router>
  	);
};

export default App;
