import React from 'react';
import PropTypes from 'prop-types';
import { NavLink as RRNavLInk } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
}
  from 'reactstrap';
import './MyNavbar.scss';

class MyNavbar extends React.Component {
  static propTypes = {
    isAuthed: PropTypes.bool,
    logoutClickEvent: PropTypes.func,
  }

  state = {
    isOpen: false,
  };

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    const { isAuthed, logoutClickEvent } = this.props;
    const buildNavBar = () => {
      if (isAuthed) {
        return (
          <Nav className='ml-auto' navbar>
            <NavItem>
              <NavLink tag={RRNavLInk} to='/Friends'>Friends</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLInk} to='/NewFriend'>New Friends</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLInk} to='/Holidays'>Holidays</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLInk} to='/NewHoliday'>New Holiday</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLInk} to='/Home'>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={logoutClickEvent}>Logout</NavLink>
            </NavItem>
          </Nav>
        );
      }
      return <Nav className='ml-auth' navbar />;
    };

    return (
      <div className="my-navbar">
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">Home for the Holidays</NavbarBrand>
          <NavbarToggler onClick={e => this.toggle(e)} />
          <Collapse isOpen={this.state.isOpen} navbar>
            {buildNavBar()}
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default MyNavbar;
