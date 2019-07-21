import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import styled, { css, StyledFunction  } from 'styled-components';

import "./App.scss";
import { Menu, Footer, TopBar } from './layout';
import { HomePage, MapPage, LoginPage } from './pages';
import { ToastContainer, toast } from 'react-toastify';

interface ButtonProps { primary: boolean};

const StyledButton = styled.button<ButtonProps>`
    background-color: pink;
    padding: 8px;
    border: 0px solid transparent;
    color: white;
    font-weight: bold;
    min-width: 200px;

    ${(props: ButtonProps) =>
        props.primary && css` 
          background: palevioletred;
          color: white;
    `};
`;

const About = () => <div className="p-l">About <br/> <StyledButton primary={true}>I'm styled!</StyledButton></div>
const Users = () => <div className="p-l">Users</div>
const Test = () => <div className="p-l">Test</div>

const isAuthenticated = localStorage.getItem('bearer-token') ? true : false;

const App: React.FC = () => {
  	return (
        <>
            <Router>
                {
                    isAuthenticated ? (
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
                    ) : (<Route component={LoginPage} />)
                }
            </Router>
            <ToastContainer enableMultiContainer containerId={'A'} position={toast.POSITION.TOP_RIGHT} />
        </>
  	);
};

export default App;
