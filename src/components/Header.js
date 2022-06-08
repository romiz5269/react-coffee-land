import React from "react";
import TopMenu from "./TopMenu";
import "./components.css";
import "./responsive.css";
import imageSrc from "../components/img/cover.png";
function Header() {
  return (
    <div className="header-section">
      <TopMenu />
      <div className="header-intro">
        <div className="header-disc">
          <h1>به کافی لند خوش آمدید</h1>
          <div className="header-text">
            <p>
              کافی لند با فضای متنوع و شاداب واقع در خیابان فلان با افتخار آماده
              خدمت رسانی آنلاین و حضوری به هموطنان خود می باشد کافی لند با فضای
              متنوع و شاداب واقع در خیابان فلان با افتخار آماده خدمت رسانی
              آنلاین و حضوری به هموطنان خود می باشد
            </p>
          </div>
        </div>
        <div className="header-image">
          <img src={imageSrc} />
        </div>
      </div>

    </div>
  );
}

export default Header;
