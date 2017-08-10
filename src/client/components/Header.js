'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import FlatButton from 'material-ui/FlatButton';
import { AppBar } from 'material-ui';

class Header extends React.Component {
  constructor() {
    super();
  }

  handleTitleBarClick() {
    this.props.history.push('/');
  }

  render() {
    return (
      <AppBar
        title={<span style={{ cursor: 'pointer' }}>React App</span>}
        onTitleTouchTap={ () => this.handleTitleBarClick() }
        onLeftIconButtonTouchTap={ this.props.toggleDrawer }
      />
    );
  }
}

Header.propTypes = {
  toggleDrawer: PropTypes.func.isRequired
};

export default withRouter(Header);