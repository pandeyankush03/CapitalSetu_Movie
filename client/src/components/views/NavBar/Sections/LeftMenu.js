import React from "react";
import { Menu } from "antd";

function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
      <Menu.Item key="favorite">
        <a href="/discover/favorite">Favorite</a>
      </Menu.Item>
    </Menu>
  );
}

export default LeftMenu;
