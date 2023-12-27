import React, { useEffect, useState } from "react";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";

import "./DarkModeDropDown.less";

export const DarkModeDropDown = () => {
  const [mode, setMode] = useState(1);

  useEffect(() => {
    const elementspielbetriebcontainer = document.getElementById('spielbetriebcontainer');
    elementspielbetriebcontainer.style.filter = `invert(${mode})`;
  }, [mode]);

  const menu = (
    <Menu>
      <Menu.Item
        onClick={() => {
          setMode(0);
        }}
      >
        <div className="darkmodeDropdown__item">Dark</div>
      </Menu.Item>
      <Menu.Item
        onClick={() => {
          setMode(1);
        }}
      >
        <div className="darkmodeDropdown__item">Light</div>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="darkmodeDropdown">
      <Dropdown overlay={menu} trigger={"click"}>
        <a
          className="ant-dropdown-link"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          {mode ? 'Light' : 'Dark'}
          <DownOutlined />
        </a>
      </Dropdown>
    </div>
  );
};
