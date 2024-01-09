import React, { useState } from "react";
import { CloseOutlined } from "@ant-design/icons";

import "./Newsletter.less";

export const Newsletter = (props) => {
  const { setShowNewsletterForm } = props;
  const [email, setEmail] = useState(null);

  return (
    <div className="newsletter__container invertColorTheme">
      <CloseOutlined
        className="newsletter__closebutton"
        onClick={() => setShowNewsletterForm(false)}
      />
      <div className="newsletter__title">Subscribe</div>
      <div className="newsletter__subtitle">
        Sign up to be the first to know about my next project
      </div>
      {email}
    </div>
  );
};
