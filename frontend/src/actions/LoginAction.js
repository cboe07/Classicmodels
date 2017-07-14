import $ from 'jquery';



export default function(loginData){
	var thePromise = $.ajax({
		method: "POST",
		url: window.hostAddress + '/login',
		data: loginData
	});
	// Reducers get payload
	return{
		type: "LOGIN",
		payload: thePromise
	}
}

