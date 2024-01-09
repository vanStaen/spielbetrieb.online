import React, { useState } from "react";
import { CloseOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";

import "./Newsletter.less";

export const Newsletter = (props) => {
  const { t } = useTranslation();
  const { setShowNewsletterForm } = props;
  const [email, setEmail] = useState(null);

  return (
    <div className="newsletter__container">
      <CloseOutlined
        className="newsletter__closebutton"
        onClick={() => setShowNewsletterForm(false)}
      />
      <div className="newsletter__title">📣 &nbsp;{t("newsletter.subscribe")}</div>
      <div className="newsletter__subtitle">
        Sign up to be the first to know about Spielbetrieb latest news.
      </div>
      {email}
    </div>
  );
};
