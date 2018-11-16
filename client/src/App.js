import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Route} from 'react-router-dom';
import Upload from './components/upload/upload';
import Display from './components/displayPlugins/display';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div>
            <Route path="/" component={Display} exact/>
            <Route path="/upload" component={Upload}/>
          </div>
          
        </BrowserRouter>
        
    );
  }
}

export default App;
