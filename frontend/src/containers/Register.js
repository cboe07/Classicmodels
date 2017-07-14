import React, {Component} from 'react';
import { Form, FormGroup, ControlLabel, FormControl, Button, Col } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
// Get the registerAction function whoch runs on submission
import RegisterAction from '../actions/RegisterAction';
// Import connect bc this is a. container
import {connect} from 'react-redux';

class Register extends Component{
	constructor(props) {
		super(props);
		this.state = {
			registerMessage: ""
		}
		this.handleRegistration = this.handleRegistration.bind(this);
	}

	handleRegistration(event){
		event.preventDefault();
		// console.log("User submitted the form")
		var name = event.target[0].value
		var email= event.target[1].value
		var accountType = 'customer'
		var username = event.target[3].value
		var password = event.target[4].value
		var city = event.target[5].value
		var state = event.target[6].value
		var salesRep = event.target[7].value
		// console.log(name);
		this.props.registerAction({
			name: name,
			email: email,
			accountType: accountType,
			username: username,
			password: password,
			city: city,
			state: state,
			salesRep: salesRep

		});
	
	}


	componentWillUpdate(nextProps, nextState) {
		if(this.props.registerResponse.msg == 'userInserted'){
			this.props.history.push('/');
		}else if(this.props.registerResponse.msg == 'userAlreadyExists')
			this.setState.registerMessage = 'User already Exists'
	}

	render(){
		console.log("=============================")
		console.log(this.props.registerResponse)
		console.log("=============================")

		

		return(
			
			<div className='container main register-wrapper'>
				<h1>{this.state.registerMessage}</h1>
				<Form horizontal onSubmit={this.handleRegistration}>
					<FormGroup controlId='formHorizontalName'>
						<Col componentClass={ControlLabel} sm={2}>
							Name
						</Col>
						<Col sm={6}>
							<FormControl type='text' placeholder='Full Name' />
						</Col>
					</FormGroup>
					<FormGroup controlId='formHorizontalName'>
						<Col componentClass={ControlLabel} sm={2}>
							Email
						</Col>
						<Col sm={6}>
							<FormControl type='text' name='email' placeholder='Email' />
						</Col>
					</FormGroup>
					<FormGroup controlId='formHorizontalName'>
						<Col componentClass={ControlLabel} sm={2}>
							Account Type
						</Col>
						<Col sm={6}>
							<FormControl type='text' name='type' value='Customer' disabled/>
						</Col>
					</FormGroup>
					<FormGroup controlId='formHorizontalName'>
						<Col componentClass={ControlLabel} sm={2}>
							Username
						</Col>
						<Col sm={6}>
							<FormControl type='text' name='username' placeholder='Username' />
						</Col>
					</FormGroup>
					<FormGroup controlId='formHorizontalName'>
						<Col componentClass={ControlLabel} sm={2}>
							Password
						</Col>
						<Col sm={6}>
							<FormControl type='password' name='password' placeholder='Password' />
						</Col>
					</FormGroup>
					<FormGroup controlId='formHorizontalName'>
						<Col componentClass={ControlLabel} sm={2}>
							City
						</Col>
						<Col sm={6}>
							<FormControl type='text' name='city' placeholder='City' />
						</Col>
					</FormGroup>
					<FormGroup controlId='formHorizontalName'>
						<Col componentClass={ControlLabel} sm={2}>
							State
						</Col>
						<Col sm={6}>
							<FormControl type='text' name='state' placeholder='State' />
						</Col>
					</FormGroup>
					<FormGroup controlId='formHorizontalName'>
						<Col componentClass={ControlLabel} sm={2}>
							Sales Representative
						</Col>
						<Col sm={6}>
							<FormControl type='text' name='employee' placeholder='Employee worked with' />
						</Col>
					</FormGroup>
					<FormGroup>
						<Col smOffset={2} sm={6}>
							<Button bsStyle='primary' bsSize='small' type='submit'>
								Register
							</Button>
						</Col>
					</FormGroup>
				</Form>

				
			</div>
		)
	}
}

function mapStateToProps(state){
	return{
		registerResponse: state.registerReducer
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({
		registerAction: RegisterAction 
	},dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);


