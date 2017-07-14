import React, {Component} from 'react';
import { Form, FormGroup, ControlLabel, FormControl, Button, Col ,MenuItem} from 'react-bootstrap'
// Our action needs bindActionCreators from redux
import  {bindActionCreators} from 'redux';
// Get the registerAction function which runs on submission
import RegisterAction from '../actions/RegisterAction';
// Because this is a container, we need connect from react-redux!
import {connect} from 'react-redux';


class Login extends Component{
	constructor(props) {
		super(props);
		this.state = {
			registerMessage: "",
			passwordError: null,
			emailError: null,
			formError: false
		}
		this.handleLogin = this.handleLogin.bind(this);
	}

	handleLogin(event){
		event.preventDefault();
		// console.log("User SUbmitted the form!!")
		var email = event.target[0].value
		var password = event.target[1].value
		var error = false;

		//Password
		if(password.length == 0){
			var passwordError = "error"; 
			error=true;
		}
		else{ 
			var passwordError = "null"
		}

		//Email
		if(email.length < 3){var emailError = "error"; error=true}
		else{var emailError = "success"}


		// console.log(name);
		if(error){
			this.setState({
				formError: true,
				emailError: emailError,
				passwordError: passwordError
			}) 
		}else{
			this.props.registerAction({
				email: email,
				password: password,
		
			});
		}
	}

	componentWillReceiveProps(nextProps) {
		console.log("=======================")
		console.log(nextProps.registerResponse)
		console.log("=======================")

		if(nextProps.registerResponse.msg == 'userInserted'){
			this.props.history.push('/');
		}else if(nextProps.registerResponse.msg == 'userAlreadyExists'){
			console.log("User name taken!")
			this.setState({
				registerMessage: "This email is already linked to an account."
			})
		}		
	}

	render(){

		return(
			<div className="register-wrapper">
				<h1>{this.state.registerMessage}</h1>
				<Form horizontal onSubmit={this.handleLogin}>
					<FormGroup controlId="formHorizontalName" validationState={this.state.emailError}>
						<Col componentClass={ControlLabel} sm={2}>
							Email
						</Col>
						<Col sm={6}>
							<FormControl type="email" name="email" placeholder="Email" />
						</Col>
					</FormGroup>
					<FormGroup controlId="formHorizontalName">
						<Col componentClass={ControlLabel} sm={2}>
							Password
						</Col>
						<Col sm={6}>
							<FormControl type="password" name="password" placeholder="Password" />
						</Col>
					</FormGroup>
					<FormGroup>
						<Col smOffset={2} sm={6}>
							<Button bsStyle="primary" bsSize="small" type="submit">
								Login
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
	}, dispatch)
}

// export default Register;
export default connect(mapStateToProps,mapDispatchToProps)(Login);



// import React, {Component} from 'react';
// import { Form, FormGroup, ControlLabel, FormControl, Button, Col } from 'react-bootstrap';


// class Login extends Component{
// 	render(){
// 		return(
// 			<div className='container main login-wrapper'>
// 				<Form horizontal>
// 					<FormGroup  controlId='formHorizontalName'>
// 						<Col componentClass={ControlLabel} sm={2}>
// 							Email
// 						</Col>
// 						<Col sm={8}>
// 							<FormControl type='email' placeholder='Email' />
// 						</Col>
// 					</FormGroup>
// 					<FormGroup controlId='formHorizontalName'>
// 						<Col componentClass={ControlLabel} sm={2}>
// 							Password
// 						</Col>
// 						<Col sm={8}>
// 							<FormControl type='text' name='email' placeholder='Password' />
// 						</Col>
// 					</FormGroup>
// 				</Form>
// 			</div>
// 		)
// 	}
// }



// export default Login;




