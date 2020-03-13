import React from "react";
import { Menu, Container, Button } from "semantic-ui-react";

const NavBar = () => {
  return (
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item header>
          <img src="/assets/logo.png" alt="logo" style={{ marginRight: 10 }} />
          Culture Hub NS
        </Menu.Item>
        <Menu.Item name="Events" />
        <Menu.Item>
          <Button positive content="Create event" />
        </Menu.Item>
      </Container>
    </Menu>
  );
};

export default NavBar;
