import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Route} from 'react-router-dom';
import Upload from './components/upload/upload';
import PluginList from './components/displayPlugins/pluginList';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div>
            <Route path="/" component={PluginList} exact/>
            <Route path="/upload" component={Upload}/>
          </div> 
        </BrowserRouter>
        
    );
  }
}

export default App;
