import React, { useEffect, useState } from "react";
import { Menu, Dropdown } from "antd";
import { useTranslation } from "react-i18next";
import { DownOutlined } from "@ant-design/icons";
import Cookies from 'universal-cookie';

import "./DarkModeDropDown.less";

export const DarkModeDropDown = () => {
  const cookies = new Cookies();
  const { t } = useTranslation();
  const [mode, setMode] = useState(cookies.get('darkMode'));

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

  useEffect(() => {
    setMode(cookies.get('darkMode'))
    console.log('cookies.get(darkMode)', cookies.get('darkMode'));
  }, [])

  const menu = (
    <Menu>
      <Menu.Item
        onClick={() => {
          setMode(0);
          cookies.set('darkMode', 0, { path: '/' });
        }}
      >
        <div className="darkmodeDropdown__item">{t('general.dark')}</div>
      </Menu.Item>
      <Menu.Item
        onClick={() => {
          setMode(1);
          cookies.set('darkMode', 1, { path: '/' });
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
          {mode == 0 ? t('general.dark') : t('general.light')}
          <DownOutlined />
        </a>
      </Dropdown>
    </div>
  );
};
