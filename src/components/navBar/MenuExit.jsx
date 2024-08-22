import React from "react";
import { Menu, Dropdown, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { resetUser } from "../../slice/loginUserSlice";
export default function MenuExit() {
  const userName = useSelector((state) => state.loginUser.data.name);
  const dispatch = useDispatch();
  function handleMenuClick(e) {
    dispatch(resetUser());
  }

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1">{"Вихід"}</Menu.Item>
    </Menu>
  );

  return (
    <div id="components-dropdown-demo-dropdown-button">
      <Dropdown overlay={menu}>
        <Button>
          {userName} <UserOutlined />
        </Button>
      </Dropdown>
    </div>
  );
}
