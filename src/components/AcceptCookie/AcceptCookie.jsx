import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { pageStore } from "../../store/pageStore";

import "./AcceptCookie.less";

export const AcceptCookie = () => {
  const windowInnerWidth = window.innerWidth;
  const { t } = useTranslation();

  useEffect(() => {
    const elementCookieContainer = document.getElementById("cookiecontainer");
    console.log("elementCookieContainer", elementCookieContainer);
    setTimeout(() => {
      elementCookieContainer.style.bottom = "0px";
    }, "500");
  }, []);

  const handleCloseClick = (value) => {
    if (value) {
      pageStore.setAllowCookie(true);
    }
    const elementCookieContainer = document.getElementById("cookiecontainer");
    if (windowInnerWidth > 675) {
      elementCookieContainer.style.right = "-500px";
    } else {
      elementCookieContainer.style.right = `-${windowInnerWidth + 10}px`;
    }
  };

  return (
    <>
      <div className="cookie__container" id="cookiecontainer">
        <div className="cookie__title">🍪 {t("legal.cookiesTitle")}</div>
        <div className="cookie__body">{t("legal.cookiesDesc")}</div>
        <Button
          className="cookie__button"
          onClick={() => handleCloseClick(true)}
        >
          {t("legal.accept")}
        </Button>
        <CloseOutlined
          className="cookie__closebutton"
          onClick={() => handleCloseClick(false)}
        />
      </div>
    </>
  );
};
