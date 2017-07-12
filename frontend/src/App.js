import React, { Component } from 'react';
// import './App.css';
// import '../public/css/styles.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './containers/Home';
import Login from './containers/Login';
import Register from './containers/Register';


class App extends Component {
  render() {
    return (
    	<Router>
    		<div className="App">
    			<NavBar />
    			<div className='container main'>
    				<Route exact path='/' component={Home} />
                    <Route exact path='/login' component={Login} />
    				<Route exact path='/register' component={Register} />
    			</div>
    		</div>
    	</Router>
      
    );
  }
}

export default App;
