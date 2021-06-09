import React from 'react';
import {  BrowserRouter as Router, Switch, Route  } from 'react-router-dom';
import Home from './Components/Home';
import Pipes from './Components/Pipes';
import Cart from './Components/Cart';
import { Link } from 'react-router-dom';

const Routes = () => {
    return (
        <Router>
          <nav className='home-nav'>
            <Link className='nav-item' to='/'>Home</Link>
            <Link className='nav-item' to='/pipes'>Pipes</Link>
            <Link className='nav-item' to='/cart'>Cart</Link>
          </nav>
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/pipes' component={Pipes} />
              <Route path='/cart' component={Cart}/>
          </Switch>
        </Router>
    )
}

export default Routes
