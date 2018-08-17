import React, {Component} from 'react';
import {Jumbotron, Button, Form, FormGroup, FormControl, Col, ControlLabel, Checkbox} from 'react-bootstrap';
import  {bootstrapUtils} from 'react-bootstrap/lib/utils'
class Login extends Component {

    render() {
        bootstrapUtils.addStyle(Jumbotron, 'custom');
        return (
            <Jumbotron bsStyle='custom' mx-auto>
                <Form horizontal>
                    <FormGroup controlId="email-field">
                        <Col componentClass={ControlLabel} sm={2}>Email</Col>
                        <Col sm={8}>
                            <FormControl type="email" placeholder="Email" />
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="password-field">
                        <Col componentClass={ControlLabel} sm={2}>Password</Col>
                        <Col sm={8}>
                            <FormControl type="password" placeholder="Password" />
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col smOffset={2} sm={8}>
                            <Button type="submit" bsStyle='primary'>Sign in</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </Jumbotron>
        );
    }
}

export default Login;