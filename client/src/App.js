import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Upload from './components/upload/upload';
import PluginList from './components/displayPlugins/pluginList';
import PluginDetail from './components/detail/pluginDetail';
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  logger = () => {
    console.log(store.getState());
  }
  render() {


    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Route path="/" component={PluginList} exact />
            <Route path="/plugin/upload" component={Upload} exact />
            <Route path="/plugindetail/:id" component={PluginDetail} />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
