import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import logo from './images/logo.png'
import DetailsTextbox from './components/DetailsTextbox'
import Button from './components/Button'
import SocMed from './components/SocMed'
import Chat from './components/Chat'
import history from './components/history'
import { BrowserRouter, Switch, Link, Route } from 'react-router-dom'
// import { createBrowserHistory } from 'history'
import './App.css';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Container>
                        <Row>
                            <Col>
                                <div className="main">
                                    <img src={logo} />
                                    <DetailsTextbox title="Name" type="text" />
                                    <DetailsTextbox title="Age" type="number" placeholder="Optional" />
                                    <DetailsTextbox title="Email" type="email" />
                                    <DetailsTextbox title="Password" type="password" />

                                    <Switch>
                                        <Route path="/chat" component={Chat} />
                                        <Button onClick={() => history.push('/Chat')} name="Proceed" />
                                    </Switch>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className="footer">
                                    <p className="rights">2020 All rights reserved.&nbsp;&nbsp;
                                    <a href="#">Privacy Policy</a></p>
                                    <hr className="harang" />
                                    <div className="links">
                                        <SocMed className="fa-facebook" />
                                        <SocMed className="fa-twitter" />
                                        <SocMed className="fa-youtube" />
                                        <SocMed className="fa-google" />
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </BrowserRouter>
        )
    }

}

export default App;