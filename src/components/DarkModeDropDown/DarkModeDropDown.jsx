import React, { useEffect, useState } from "react";
import { Menu, Dropdown } from "antd";
import { useTranslation } from "react-i18next";
import { DownOutlined } from "@ant-design/icons";

import "./DarkModeDropDown.less";

export const DarkModeDropDown = () => {
  const [mode, setMode] = useState(1);
  const { t } = useTranslation();

  useEffect(() => {
    const elementspielbetriebcontainer = document.getElementById('spielbetriebcontainer');
    const elementspielbetriebbackground = document.getElementById('spielbetriebbackground');
    const elementdarkmodedropdown = document.getElementById('darkmodedropdown');
    const elementlanguagedropdown = document.getElementById('languagedropdown');
    elementspielbetriebcontainer.style.filter = `invert(${mode})`;
    elementspielbetriebbackground.style.filter = `invert(${mode})`;
    elementdarkmodedropdown.style.filter = `invert(${mode})`;
    elementlanguagedropdown.style.filter = `invert(${mode})`;
  }, [mode]);

  const menu = (
    <Menu>
      <Menu.Item
        onClick={() => {
          setMode(0);
        }}
      >
        <div className="darkmodeDropdown__item">{t('general.dark')}</div>
      </Menu.Item>
      <Menu.Item
        onClick={() => {
          setMode(1);
        }}
      >
        <div className="darkmodeDropdown__item">{t('general.light')}</div>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="darkmodeDropdown" id='darkmodedropdown'>
      <Dropdown overlay={menu} trigger={"click"}>
        <a
          className="ant-dropdown-link"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          {mode ? t('general.light') : t('general.dark')}
          <DownOutlined />
        </a>
      </Dropdown>
    </div>
  );
};
