'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import { Header, Sidebar } from './components';
import { Home, FirstPage, SecondPage, ThirdPage, NotFound } from './views';

import './styles.css';

injectTapEventPlugin();

class App extends React.Component {
  constructor() {
    super();
    this.state = { drawerOpen: false };
  }

  toggleDrawer() {
    this.setState({ drawerOpen: !this.state.drawerOpen });
  }

  render() {
    return (
      <Router>
        <MuiThemeProvider muiTheme={ getMuiTheme(lightBaseTheme) }>
          <div>
            <Header toggleDrawer={ () => this.toggleDrawer() }/>
            <Sidebar
              drawerOpen={ this.state.drawerOpen }
              toggleDrawer={ () => this.toggleDrawer() }/>
            <div>
              <Switch>
                <Route path="/" exact component={ Home }/>
                <Route path="/first" component={ FirstPage } />
                <Route path="/second" component={ SecondPage } />
                <Route path="/third" component={ ThirdPage } />
                <Route component={ NotFound }/>
              </Switch>
            </div>
          </div>
        </MuiThemeProvider>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
