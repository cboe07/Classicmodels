import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import $ from 'jquery';
import {connect} from 'react-redux';

class NavBar extends Component{
	constructor(props) {
		super(props);
		this.state = {
			productlines: []
		}
	}

	componentDidMount() {
		// go get all productlines from the double
		$.getJSON(window.hostAddress+'/productlines/get', (productlinesData)=>{
			console.log(productlinesData);
			this.setState({
				productlines: productlinesData
			})
		})
	}

  render(){
  	const shopMenu = [];
  	// Map through this.state.productlines. First render, will not loop because array is empty
  	this.state.productlines.map((pl,index)=>{
  		console.log(pl)
  		shopMenu.push(
  			<Link key={index} to={`/shop/${pl.link}`}>{pl.productLine}</Link>
  		)
  	})

	if(this.props.registerInfo.name == undefined){
		var rightBar = [
			<li key="1" className="text-right"><Link to="/login">Login</Link></li>,
			<li key="2" className="text-right"><Link to="/register">Register</Link></li>,
			<li key="3" className="text-right"><Link to="/cart">(0) items in your cart | ($0.00)</Link></li>		
		]
	}else{
		var rightBar = [
			<li key="1" className="text-right">Welcome, {this.props.registerInfo.name}</li>,
			<li key="2" className="text-right"><Link to="/cart">(0) items in your cart | ($0.00)</Link></li>,
			<li key="3" className="text-right"><Link to="/logout">Logout</Link></li>		
		]		
	}


    return(
    	<div>
			<nav className="navbar navbar-default navbar-fixed-top">
			  <div className="container-fluid navbar-white">
			    <ul className="nav navbar-nav">
			    	<li><Link to="/" className="navbar-brand link">ClassicModels</Link></li>
			    	<li><Link className="link" to="/">Home</Link></li>
			      	<li className="dropdown">
			      		<Link className="link" to="/shop">Shop <i className="arrow down" /></Link>
			      		<ul>
				      		<li className="dropdown-links">
				      			{shopMenu}
				      		</li>
			      		</ul>
			      	</li>
			      	<li><Link className="link" to="/about">About Us</Link></li>
			      	<li><Link className="link" to="/contact">Contact Us</Link></li>
			    </ul>
			    <ul className="nav navbar-nav float-right">
			      {rightBar}
			   </ul>
			  </div>
			</nav>
	        
        </div>
	)
  }
}

function mapStateToProps(state){
	return{
		registerInfo: state.registerReducer
	}
}

// export default NavBar
export default connect(mapStateToProps)(NavBar)
