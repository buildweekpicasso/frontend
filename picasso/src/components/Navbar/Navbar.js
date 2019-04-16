import React from 'react';
import {
  Collapse,
  Navbar as NavbarRS,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink as NavLinkRS } from 'reactstrap';
import { Link, NavLink } from 'react-router-dom';

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  logOut = () => {
    localStorage.removeItem('token');
  }

  render() {
    const haveToken = localStorage.getItem('token');
    return (
      <div>
        <NavbarRS fixed="top" color="dark" dark expand="md">
          <NavbarBrand to="/" tag={Link}>Picasso Painted It</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
            {haveToken
                && (
                  <NavItem>
                    <NavLinkRS to="/private" tag={NavLink}>Private</NavLinkRS>
                  </NavItem>
                )
              }
              <NavItem>
                <NavLinkRS exact to="/" tag={NavLink}>Image Request</NavLinkRS>
              </NavItem>
              {!haveToken
                ? (
                  <>
                  <NavItem>
                    <NavLinkRS to="/login" tag={NavLink}>Log In</NavLinkRS>
                  </NavItem>
                  <NavItem>
                    <NavLinkRS to="/signup" tag={NavLink}>Sign Up</NavLinkRS>
                  </NavItem>
                  </>)
                : (<NavItem>
                    <NavLinkRS
                      to="/logout"
                      tag={Link}
                      onClick={this.logOut}
                    >
                      Log Out
                    </NavLinkRS>
                  </NavItem>)
              }
            </Nav>
          </Collapse>
        </NavbarRS>
      </div>
    );
  }
}