import React, { Component } from 'react';
import {Container, Col, Row} from 'reactstrap' 

//style dependencies
import './styles/login.css'

//image dependencies
import logo from './assets/logo.jpg'
import background from './assets/background.jpg'

var backgroundStyle = {
    backgroundImage: `url(${background})`
}


class Login extends Component {
    render() {
        return (

        <div className = "login-background" style = {backgroundStyle}>
            <Container>
               <Row>
                   <Col sm ="12" lg={{ size: 8, offset: 2}}>
                        <Row>
                            <Col>
                                <Row>
                                    <img width = "100%"src = {logo}/>
                                </Row>
                                Tunnel City Scheduler App
                            </Col>
                            <Col>
                                Hello world on the right
                            </Col>
                        </Row>
                   </Col>
               </Row>
            </Container>
        </div>
        );
    }
}

export default Login;