import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Upload from './components/upload/upload';
import PluginList from './components/displayPlugins/pluginList';
import PluginDetail from './components/detail/plugin';
import PluginStore from './components/pluginStore/pluginStore';
import Login from './components/auth/login';
import { Provider } from 'react-redux';
import store from './store';
import SignUp from './components/auth/signUp';
import Error from './components/error';
import Navigation from './components/navigator/navigation';
import setAuthorizationToken from './utils/setAuthorizationToken';
import { setCurrentUser } from './actions/loginAction';
import jwtDecode from 'jwt-decode';

class App extends Component {
  // logger = () => {
  //   console.log(store.getState());
  // }
  
  render() {
    if(localStorage.jwtToken){
      setAuthorizationToken(localStorage.jwtToken);
      store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken).user));
    }
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Navigation />
            <Switch>
              <Route path="/" component={PluginList} exact />
              <Route path="/plugins/upload" component={Upload} exact/>
              <Route path="/plugin/:id" component={PluginDetail} exact />
              <Route path="/plugin-store" component={PluginStore} exact />
              <Route path="/plugin-store/:tag" component={PluginStore} />
              <Route path="/login" component={Login} />"
              <Route path="/sign-up" component={SignUp} />
              <Route component={Error} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}
export default App;
