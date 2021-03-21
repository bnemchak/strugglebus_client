import React from 'react';

import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import './App.scss';

import Home from '../components/pages/Home/Home';
import LandingPage from '../components/pages/LandingPage/LandingPage';
import SignUp from '../components/pages/SignUp/SignUp';
import Monday from '../components/pages/Week/Monday';
import Notes from '../components/pages/Notes/Notes';

const PublicRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = (props) => (authed === false
    ? (<Component {...props} {...rest} />)
    : (<Redirect to={{ pathname: '/home', state: { from: props.location } }} />));
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

const PrivateRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = (props) => (authed === true
    ? (<Component {...props} {...rest} />)
    : (<Redirect to={{ pathname: '/landingpage', state: { from: props.location } }} />));
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

const RoutesContainer = ({ authed, authToggle }) => (
  <div>
    <Switch>
      <PrivateRoute path="/landingpage" component={LandingPage} authed={authed} />
      <PrivateRoute path="/monday" component={Monday} authed={authed} />
      <PrivateRoute path="/notes" component={Notes} authed={authed} />

      <PublicRoute path="/home" component={Home} authed={authed} authToggle={authToggle} />
      <PublicRoute path='/signup' component={SignUp} authed={authed} authToggle={authToggle} />

      <Redirect from='*' to='/home' />
    </Switch>
  </div>
);

class App extends React.Component {
  state = {
    authed: true,
    userData: null,
  };

  componentDidMount() {
    if (localStorage.getItem('authed') === 'true') {
      this.setState({ authed: true });
    }
  }

  authToggle = () => {
    const { authed } = this.state;
    this.setState({ authed: !authed });
  }

  render() {
    const { authed } = this.state;

    return (
      <div>
        <BrowserRouter>
          <RoutesContainer authed={authed} authToggle={this.authToggle}/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
