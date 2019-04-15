import React from 'react';
import {
  Collapse,
  Navbar as NavbarRS,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink as NavLinkRS } from 'reactstrap';
import { NavLink } from 'react-router-dom';

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <NavbarRS color="light" light expand="md">
          <NavbarBrand href="/">Picasso Painted It</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLinkRS to="/private" tag={NavLink}>Private</NavLinkRS>
              </NavItem>
              <NavItem>
                <NavLinkRS to="/login" tag={NavLink}>Login</NavLinkRS>
              </NavItem>
            </Nav>
          </Collapse>
        </NavbarRS>
      </div>
    );
  }
}