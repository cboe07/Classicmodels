import React, {Component} from 'react';

class Register extends Component{
	render(){
		return(
			<div className='container main'>
				<h1>Register Page</h1>
				<form className='register-form col-sm-offset-5'>
				  <div>
				    <label><b>Email</b></label>
				    <input type="text" placeholder="Enter Email" name="email" required />
				  </div>
				  <div>
				    <label><b>Password</b></label>
				    <input type="password" placeholder="Enter Password" name="psw" required />
				  </div>
				    <label><b>Repeat Password</b></label>
				    <input type="password" placeholder="Repeat Password" name="psw-repeat" required />
				   <div>
				    <input type="checkbox" checked="checked" /> Remember me
				   </div>
				   <div>
				    <div class="clearfix">
				      <button className='btn btn-success' type="button"  class="cancelbtn">Register</button>
				      <button className='btn btn-danger' type="submit" class="signupbtn">Cancel</button>
				    </div>
				  </div>
				</form>
			</div>
		)
	}
}

export default Register;