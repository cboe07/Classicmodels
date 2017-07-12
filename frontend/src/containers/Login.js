import React, {Component} from 'react';


class Login extends Component{
	render(){
		return(
			<div className='container main'>
				<h1>Login Page</h1>
				<div>
				    <label><b>Username&nbsp;</b></label>
				    <input type="text" placeholder="Enter Username" name="uname" required />
				</div>
				    <label><b>Password&nbsp;</b></label>
				    <input type="password" placeholder="Enter Password" name="psw" required />
				<div>
				    <button className='btn btn-default' type="submit">Login</button>
				</div>
				<div>
				    <input type="checkbox" checked="checked" /> Remember me
				</div>
			</div>
		)
	}
}



export default Login;




