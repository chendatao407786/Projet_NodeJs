import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Upload from './components/upload/upload';
import PluginList from './components/displayPlugins/pluginList';
import PluginDetail from './components/detail/plugin';
import PluginStore from './components/pluginStore/pluginStore';
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
            <Route path="/plugins/upload" component={Upload} exact />
            <Route path="/plugin/:id" component={PluginDetail} exact/>
            <Route path="/plugin-store" component={PluginStore} exact/>
            <Route path="/plugin-store/:tag" component={PluginStore}/>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
