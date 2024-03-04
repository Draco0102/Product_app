import React from "react";
import { Menu, Grid, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import logo from "../../../assests/images/logo.png";
import "./header.scss";
import userIcon from '../../../assests/images/user.png'

const Header = () => {
  return (
    <section className={"header_container"}>
      <Menu>
        <Grid container columns={1} textAlign="center">
          <Grid.Column className="header_nav">
            <Menu.Item>
              <Image src={logo} size="mini" />
            </Menu.Item>
            <Menu.Menu position="right">
            <Menu.Item as={Link} to="/">
              Home
            </Menu.Item>
            <Menu.Item as={Link} to="/products">
              Products
            </Menu.Item>
            <Menu.Item>
              <Image src={userIcon} size="mini" />
            </Menu.Item>
            </Menu.Menu>
          </Grid.Column>
        </Grid>
      </Menu>
    </section>
  );
};

export default Header;
