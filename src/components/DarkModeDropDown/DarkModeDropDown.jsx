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
    const elementbackground = document.getElementById('background');
    const elementdarkmodedropdown = document.getElementById('darkmodedropdown');
    const elementlanguagedropdown = document.getElementById('languagedropdown');
    const elementmerriercontainer = document.getElementById('merriercontainer');
    const elementmerriercontainermobile = document.getElementById('merriercontainermobile');
    elementspielbetriebcontainer.style.filter = `invert(${mode})`;
    elementbackground.style.filter = `invert(${mode})`;
    elementdarkmodedropdown.style.filter = `invert(${mode})`;
    elementlanguagedropdown.style.filter = `invert(${mode})`;
    elementmerriercontainer.style.filter = `invert(${mode})`;
    elementmerriercontainermobile.style.filter = `invert(${mode})`;
  }, [mode]);

  useEffect(() => {
    setMode(cookies.get('darkMode'))
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
