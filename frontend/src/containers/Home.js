import React, {Component} from 'react';

class Home extends Component{
	render(){
		return(
			<div>
				<h1>Classic Models</h1>
				<div className='container'>
					<a className='shop-images' href="http://placeholder.com"><img src="http://via.placeholder.com/250x225" /></a>
					<a className='shop-images' href="http://placeholder.com"><img src="http://via.placeholder.com/250x225" /></a>
					<a className='shop-images' href="http://placeholder.com"><img src="http://via.placeholder.com/250x225" /></a>
					<a className='shop-images' href="http://placeholder.com"><img src="http://via.placeholder.com/250x225" /></a>
					<a className='shop-images' href="http://placeholder.com"><img src="http://via.placeholder.com/250x225" /></a>
				</div><br/>
				<div>
					<a className='shop-images' href="http://placeholder.com"><img src="http://via.placeholder.com/250x225" /></a>
					<a className='shop-images' href="http://placeholder.com"><img src="http://via.placeholder.com/250x225" /></a>
				</div>
				<div classNmae='featured-models'>
					<h3>Featured Products</h3>
					<a className='shop-images' href="http://placeholder.com"><img src="http://via.placeholder.com/250x225" /></a>
					<a className='shop-images' href="http://placeholder.com"><img src="http://via.placeholder.com/250x225" /></a>
					<a className='shop-images' href="http://placeholder.com"><img src="http://via.placeholder.com/250x225" /></a>
					<a className='shop-images' href="http://placeholder.com"><img src="http://via.placeholder.com/250x225" /></a>

				</div>
			</div>
		)
	}
}

export default Home;