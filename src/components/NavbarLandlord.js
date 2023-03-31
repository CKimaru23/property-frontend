import React from 'react';
import { Menu, Image } from 'semantic-ui-react';

const NavbarLandlord = () => {
  return (
    <Menu fixed='top' inverted>
      <Menu.Item header>
        <Image size='mini' src='logo.png' style={{ marginRight: '1.5em' }} />
        Property Manager
      </Menu.Item>
      <Menu.Item as='a' href='/'>
        Home
      </Menu.Item>
      <Menu.Item as='a' href='/properties'>
        Properties
      </Menu.Item>
      <Menu.Item as='a' href='/tenants'>
        Tenants
      </Menu.Item>
      <Menu.Item as='a' href='/financial-report'>
        Financial Report
      </Menu.Item>
      <Menu.Menu position='right'>
        <Menu.Item>
          <Image avatar src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
          Account
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

export default NavbarLandlord;
