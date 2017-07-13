import React, {Component} from 'react';
import { Form, FormGroup, ControlLabel, FormControl, Button, Col } from 'react-bootstrap';


class Login extends Component{
	render(){
		return(
			<div className='container main login-wrapper'>
				<Form horizontal>
					<FormGroup  controlId='formHorizontalName'>
						<Col componentClass={ControlLabel} sm={2}>
							Username
						</Col>
						<Col sm={8}>
							<FormControl type='text' placeholder='Username' />
						</Col>
					</FormGroup>
					<FormGroup controlId='formHorizontalName'>
						<Col componentClass={ControlLabel} sm={2}>
							Password
						</Col>
						<Col sm={8}>
							<FormControl type='text' name='email' placeholder='Password' />
						</Col>
					</FormGroup>
				</Form>
			</div>
		)
	}
}



export default Login;




