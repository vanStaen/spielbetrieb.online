import React, { useLayoutEffect, useEffect } from "react";
import { observer } from "mobx-react";
import { BrowserRouter } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { LanguageDropDown } from "./components/LanguageDropDown/LanguageDropDown";
import { consoleGreetings } from "./helpers/consoleGreetings";
import { Main } from './pages/Main';

import "./lib/i18n";
import "./App.less";

const defineVariableHeight = () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
};

window.addEventListener("resize", defineVariableHeight);

const App = observer(() => {
  const { i18n } = useTranslation();

  useLayoutEffect(() => {
    // Define variable height
    defineVariableHeight();
  }, []);

  useEffect(() => {
    const language = navigator.language || navigator.userLanguage;
    if (language === "de-DE") {
      i18n.changeLanguage("de-DE");
    } else {
      i18n.changeLanguage("en-US");
    }
  }, [i18n]);

  useEffect(() => {
    consoleGreetings();
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <div className="main">
          <LanguageDropDown />
          <Main />
        </div>
      </div>
    </BrowserRouter>
  );
});

export default App;
