import React, { Component } from 'react';
import './styles/App.css';
import {
    Route,
    Link,
    Switch
} from 'react-router-dom';

import About from './components/About';

class App extends Component {
    render() {
        return (
            <header>
               <h1>Learn Routing</h1>
               <nav>
                   {/* Create our nav bar links using the Link element from react router */}
                   <ul>
                       <li><Link to="/about">About</Link></li>
                   </ul>
               </nav>

                {/* Create the routes. This will not appear on the page. */}
               <div className="main">
                   <Switch>
                       <Route path="/about" component={ About } />
                   </Switch>
               </div>
           </header>
        );
    }
}

export default App;
