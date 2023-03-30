import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

const Navbar = () => {
  return (
    <Menu inverted fixed="top">
      <Menu.Item>
        <Link to="/">Logo</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/about">About</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/contact">Contact</Link>
      </Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item>
          <Link to="/login">Login</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/signup">Signup</Link>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

export default Navbar;
