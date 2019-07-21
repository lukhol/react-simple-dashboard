import React, { ReactNode, Component } from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import styled, { css, StyledFunction  } from 'styled-components';

import "./App.scss";
import { Menu, Footer, TopBar } from './layout';
import { HomePage, MapPage, LoginPage } from './pages';
import PrivateRoute from './PrivateRoute';

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

const Layout = (props: any) => {
    return (
        <div>
            <TopBar />
            <div className="container">
                <Menu />
                <div className="content">
                    <div className="content-top">
                        {props.children}
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    )
}

function renderWithLayout(Component: any, Layout: any) {
    return <Layout><Component /></Layout>
} 

const App: React.FC = () => {
    return (
        <Router>
            <Switch>
                <PrivateRoute path="/" exact render={() => renderWithLayout(HomePage, Layout)} />
                <PrivateRoute path="/about" exact render={() => renderWithLayout(About, Layout)} />
                <PrivateRoute path="/users" exact render={() => renderWithLayout(Users, Layout)} />
                <PrivateRoute path="/map" exact render={() => renderWithLayout(MapPage, Layout)} />
                <PrivateRoute path="/test1" exact render={() => renderWithLayout(Test, Layout)} />
                <PrivateRoute path="/test2" exact render={() => renderWithLayout(Test, Layout)} />
                <Route path="/login" exact component={LoginPage} />
            </Switch>
        </Router>
    );
};

export default App;
