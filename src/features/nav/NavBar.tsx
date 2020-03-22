import React from "react";
import { Menu, Container, Button } from "semantic-ui-react";
import { observer } from "mobx-react-lite";
import { NavLink } from "react-router-dom";

const NavBar: React.FC = () => {
  return (
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item header as={NavLink} exact to="/">
          <img src="/assets/logo.png" alt="logo" style={{ marginRight: 10 }} />
          Culture Hub NS
        </Menu.Item>
        <Menu.Item name="Events" as={NavLink} to="/events" />
        <Menu.Item>
          <Button
            as={NavLink}
            to="/createEvent"
            positive
            content="Create event"
          />
        </Menu.Item>
      </Container>
    </Menu>
  );
};

export default observer(NavBar);
