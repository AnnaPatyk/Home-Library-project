import React from "react";
import { Menu, Dropdown, Button, message } from "antd";

import Icon from "@ant-design/icons/lib/components/AntdIcon";

export default function MenuExit() {
  function handleMenuClick(e) {
    message.info("Click on menu item.");
    console.log("click", e);
  }

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1">
        <Icon type="user" />
        1st menu item
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown menu={menu}>
      <Button>
        Button <Icon type="down" />
      </Button>
    </Dropdown>
  );
}
