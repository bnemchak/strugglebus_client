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
import Tuesday from '../components/pages/Week/Tuesday';
import Wednesday from '../components/pages/Week/Wednesday';
import Thursday from '../components/pages/Week/Thursday';
import Friday from '../components/pages/Week/Friday';
import Saturday from '../components/pages/Week/Saturday';
import Sunday from '../components/pages/Week/Sunday';
// import Notes from '../components/pages/Notes/Notes';

const PublicRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = (props) => (authed === false
    ? (<Component {...props} {...rest} />)
    : (<Redirect to={{ pathname: '/landingpage', state: { from: props.location } }} />));
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

const PrivateRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = (props) => (authed === true
    ? (<Component {...props} {...rest} />)
    : (<Redirect to={{ pathname: '/home', state: { from: props.location } }} />));
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

const RoutesContainer = ({ authed, authToggle }) => (
  <div>
    <Switch>
      <PrivateRoute path="/landingpage" component={LandingPage} authed={authed} />
      <PrivateRoute path="/monday" component={Monday} authed={authed} />
      <PrivateRoute path="/tuesday" component={Tuesday} authed={authed} />
      <PrivateRoute path="/wednesday" component={Wednesday} authed={authed} />
      <PrivateRoute path="/thursday" component={Thursday} authed={authed} />
      <PrivateRoute path="/friday" component={Friday} authed={authed} />
      <PrivateRoute path="/saturday" component={Saturday} authed={authed} />
      <PrivateRoute path="/Sunday" component={Sunday} authed={authed} />
      {/* <PrivateRoute path="/notes" component={Notes} authed={authed} /> */}

      <PublicRoute path="/home" component={Home} authed={authed} authToggle={authToggle} />
      <PublicRoute path='/signup' component={SignUp} authed={authed} authToggle={authToggle} />

      <Redirect from='*' to='/home' />
    </Switch>
  </div>
);

class App extends React.Component {
  state = {
    authed: false,
    userData: null,
  };

  componentDidMount() {
    if (localStorage.getItem('authed') === 'true') {
      this.setState({ authed: true });
    } else {
      this.setState({ authed: false });
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
