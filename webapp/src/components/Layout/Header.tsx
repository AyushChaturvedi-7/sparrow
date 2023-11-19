import React from "react";

function Header() {
  return (
    <>
      <header className="techwave_fn_header">
        <div className="header__left">
          <div className="fn__token_info">
            <span className="token_summary">
              <span className="count">120</span>
              <span className="text">
                Tokens
                <br />
                Remain
              </span>
            </span>
            <a href="pricing.html" className="token_upgrade techwave_fn_button">
              <span>Upgrade</span>
            </a>
            <div className="token__popup">
              Resets in <span>19 hours.</span>
              <br />
              Daily limit is <span>200 tokens</span>
            </div>
          </div>
        </div>

        <div className="header__right">
          <div className="fn__nav_bar">
            <div className="bar__item bar__item_search">
              <a href="#" className="item_opener fn__tooltip" title="Search">
                <img src="svg/search.svg" alt="" className="fn__svg" />
              </a>
              <div className="item_popup" data-position="right">
                <input type="text" placeholder="Search" />
              </div>
            </div>

            <div className="bar__item bar__item_notification has_notification">
              <a
                href="#"
                className="item_opener fn__tooltip"
                title="Notifications"
              >
                <img src="svg/bell.svg" alt="" className="fn__svg" />
              </a>
              <div className="item_popup" data-position="right">
                <div className="ntfc_header">
                  <h2 className="ntfc_title">Notifications</h2>
                  <a href="notifications.html">View All</a>
                </div>
                <div className="ntfc_list">
                  <ul>
                    <li>
                      <p>
                        <a href="notification-single.html">
                          Version 4.1.2 has been launched
                        </a>
                      </p>
                      <span>34 Min Ago</span>
                    </li>
                    <li>
                      <p>
                        <a href="notification-single.html">
                          Video Generation has been released
                        </a>
                      </p>
                      <span>12 Apr</span>
                    </li>
                    <li>
                      <p>
                        <a href="notification-single.html">
                          Terms has been updated
                        </a>
                      </p>
                      <span>12 Apr</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bar__item bar__item_fullscreen">
              <a
                href="#"
                className="item_opener fn__tooltip"
                title="Full Screen"
              >
                <img
                  src="svg/fullscreen.svg"
                  alt=""
                  className="fn__svg f_screen"
                />
                <img
                  src="svg/smallscreen.svg"
                  alt=""
                  className="fn__svg s_screen"
                />
              </a>
            </div>

            <div className="bar__item bar__item_language">
              <a href="#" className="item_opener fn__tooltip" title="Language">
                <img src="svg/language.svg" alt="" className="fn__svg" />
              </a>
              <div className="item_popup" data-position="right">
                <ul>
                  <li>
                    <span className="active">English</span>
                  </li>
                  <li>
                    <a href="#">Spanish</a>
                  </li>
                  <li>
                    <a href="#">French</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bar__item bar__item_skin">
              <a
                href="#"
                className="item_opener fn__tooltip"
                title="Dark/Light"
              >
                <img src="svg/sun.svg" alt="" className="fn__svg light_mode" />
                <img src="svg/moon.svg" alt="" className="fn__svg dark_mode" />
              </a>
            </div>

            <div className="bar__item bar__item_user">
              <a
                href="#"
                className="user_opener fn__tooltip"
                title="User Profile"
              >
                <img src="img/user/user.jpg" alt="" />
              </a>
              <div className="item_popup" data-position="right">
                <div className="user_profile">
                  <div className="user_img">
                    <img src="img/user/user.jpg" alt="" />
                  </div>
                  <div className="user_info">
                    <h2 className="user_name">
                      Caden Smith<span>Free</span>
                    </h2>
                    <p>
                      <a href="mailto:cadmail@gmail.com" className="user_email">
                        cadmail@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
                <div className="user_nav">
                  <ul>
                    <li>
                      <a href="user-profile.html">
                        <span className="icon">
                          <img
                            src="svg/person.svg"
                            alt=""
                            className="fn__svg"
                          />
                        </span>
                        <span className="text">Profile</span>
                      </a>
                    </li>
                    <li>
                      <a href="user-settings.html">
                        <span className="icon">
                          <img
                            src="svg/setting.svg"
                            alt=""
                            className="fn__svg"
                          />
                        </span>
                        <span className="text">Settings</span>
                      </a>
                    </li>
                    <li>
                      <a href="user-billing.html">
                        <span className="icon">
                          <img
                            src="svg/billing.svg"
                            alt=""
                            className="fn__svg"
                          />
                        </span>
                        <span className="text">Billing</span>
                      </a>
                    </li>
                    <li>
                      <a href="sign-in.html">
                        <span className="icon">
                          <img
                            src="svg/logout.svg"
                            alt=""
                            className="fn__svg"
                          />
                        </span>
                        <span className="text">Log Out</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
