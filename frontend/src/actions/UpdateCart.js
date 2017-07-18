import $ from 'jquery';



export default function(productCode,token){
	// console.log(cartData)
	var thePromise = $.ajax({
		method: "POST",
		url: window.hostAddress + '/updateCart',
		data: {
			productCode: productCode,
			token: token
		}
	});
	// Reducers get payload
	return{
		type: "UPDATE_CART",
		payload: thePromise
	}
}