import React, {Component} from 'react';
import $ from 'jquery';
import {Link} from 'react-router-dom';

class Home extends Component{
	constructor(props) {
		super(props);
		this.state = {
			productlines: []
		}
		
	}

	componentDidMount() {
		// get all productline info..already set up in navbar
		$.getJSON(window.hostAddress+'/productlines/get', (productlinesData)=>{
			console.log(productlinesData);
			this.setState({
				productlines: productlinesData
			})
		})
	}

	render(){
		// loops though productlines from the DB
		const plImages = [];
			this.state.productlines.map((row,index)=>{
				plImages.push(
					<div key={index} className='col-sm-4 col-md-3 pl-images'>
						<Link to={`/shop/${row.link}`}><img src={row.image} /></Link>
						<div className='text'>{row.productLine}</div>
					</div>
				)
			})
		return(
			<div>
				<div>
					<h1>WELCOME TO CLASSIC MODELS</h1>
					<h3>FEATURED PRODUCTS</h3>
					{plImages}
					</div>
				
			</div>
		)
	}
}

export default Home;