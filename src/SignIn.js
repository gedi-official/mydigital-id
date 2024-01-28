import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Form }from 'react-bootstrap';
import Interset from './asset/Interset.png';
import Ass from './asset/Ass.png';
import Asse from './asset/Asse.png';
import './SigninStyle.css';

class SignIn extends Component{
	render() {
		return (
			<Container fluid>
      			<Row>
      				<Col>
      					<Row className='justify-content-center'>
      						<Col>
      							<Image src={Asse} width={'100px'} style={{margin: '20px 0px 0px 0px'}} className="d-block d-lg-none d-xl-none d-xxl-none"/><br />
	      						<Form>
							      <Form.Group className="mb-3" controlId="formBasicEmail">
							        <Form.Label>Email address</Form.Label>
							        <Form.Control type="email" placeholder="Enter email" />
							        <Form.Text className="text-muted">
							          We'll never share your email with anyone else.
							        </Form.Text>
							      </Form.Group>

							      <Form.Group className="mb-3" controlId="formBasicPassword">
							        <Form.Label>Password</Form.Label>
							        <Form.Control type="password" placeholder="Password" />
							      </Form.Group>
							      
							      <Button variant="primary" type="submit">
							        Sign In
							      </Button>
    							</Form>
	      					</Col>
      					</Row>
	      				<Row>
	      					<Col className="d-none d-lg-block">
	      						<Image src={Asse} width={'150px'} style={{margin: '250px 0px 0px 20px'}}/>
	      					</Col>	
	      				</Row>
        			</Col>
        			<Col className="col-auto">
        				<div className='color'>
        					<Image src={Ass} width={'40px'} style={{margin: '10px 0px 0px 10px'}}/>
        				</div>
        				<div className='bgColor'>
							<Image src={Interset} className='resizable-image'/>
        				</div>
        			</Col>
        		</Row>
        	</Container>
		);
	}
} 

export default SignIn;