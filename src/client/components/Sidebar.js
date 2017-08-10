'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import { Drawer, List, ListItem } from 'material-ui';
import { Link } from 'react-router-dom';

export class Sidebar extends React.Component {
  render() {
    return (
      <Drawer
        docked={ false }
        open={ this.props.drawerOpen }
        containerStyle={ { top: 64 } }
        onRequestChange={ this.props.toggleDrawer } >
        <List>
          <ListItem
            primaryText='First Page'
            containerElement={ <Link to="/first" /> }
            onTouchTap={ this.props.toggleDrawer } />
          <ListItem
            primaryText='Second Page'
            containerElement={ <Link to="/second" /> }
            onTouchTap={ this.props.toggleDrawer } />
          <ListItem
            primaryText='Third Page'
            containerElement={ <Link to="/third" /> }
            onTouchTap={ this.props.toggleDrawer } />
        </List>
      </Drawer>
    );
  }
}

Sidebar.propTypes = {
  drawerOpen: PropTypes.bool.isRequired,
  toggleDrawer: PropTypes.func.isRequired
};