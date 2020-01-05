import React, { Component } from 'react';
import {Container, Col, Row, Form, FormGroup, Input, Label, Button} from 'reactstrap' 

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
                   <Col className = "login-container" sm ="12" lg={{ size: 8, offset: 2}}>
                        <Row className = "login-row">
                            <Col className = "login-panel-left">
                                <Row>
                                    <img alt = "Tunnel City Logo" className = "login-logo" src = {logo}/>
                                </Row>
                                <p className = "login-app-name">
                                    Tunnel City Scheduler App
                                </p>
                            </Col>
                            
                            
                            <Col className  = "login-panel-right">
                                <h1 className = "login-admin-label">Scheduler Login</h1>

                                <Form className = "login-form-container">
                                    <FormGroup >
                                        <Label className = "login-form-label"for="exampleEmail">Email</Label>
                                        <Input type="email" name="email" id="exampleEmail" placeholder="user@email.com" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label className = "login-form-label" for="examplePassword">Password</Label>
                                        <Input type="password" name="password" id="examplePassword" placeholder="☕️☕️☕️☕️☕️☕️" />
                                    </FormGroup>
                                    <Button className = "login-btn" size="md" block>Login</Button>
                                    <p className = "login-form-label forgot-password"> Forgot login information?</p>
                                </Form>
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