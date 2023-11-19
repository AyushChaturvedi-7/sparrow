"use client";
import Image from "next/image";
import React from "react";
import Img from "/public/img/arrow.svg";
function LeftPanel() {
  const onHandleClick = () => {
    const leftPanel = document.querySelector("#html");
    if (leftPanel) {
      leftPanel.classList.toggle("panel-opened");
    }
  };
  return (
    <div>
      <div className="techwave_fn_leftpanel">
        <div className="mobile_extra_closer"></div>

        <div className="leftpanel_logo">
          <a href="index.html" className="fn_logo">
            <span className="full_logo">
              <img
                src="img/logo-desktop-full.png"
                alt=""
                className="desktop_logo"
              />
              <img
                src="img/logo-retina-full.png"
                alt=""
                className="retina_logo"
              />
            </span>
            <span className="short_logo">
              <img
                src="img/logo-desktop-mini.png"
                alt=""
                className="desktop_logo"
              />
              <img
                src="img/logo-retina-mini.png"
                alt=""
                className="retina_logo"
              />
            </span>
          </a>
          <a
            href="#"
            className="fn__closer fn__icon_button desktop_closer"
            onClick={onHandleClick}
          >
            <Image
              src={Img}
              className="fn__svg"
              alt=""
              width={100}
              height={100}
            />
          </a>
          <a
            href="#"
            className="fn__closer fn__icon_button mobile_closer"
            onClick={onHandleClick}
          >
            <Image
              src={Img}
              className="fn__svg"
              alt=""
              width={100}
              height={100}
            />
          </a>
        </div>

        <div className="leftpanel_content">
          <div className="nav_group">
            <h2 className="group__title">Start Here</h2>
            <ul className="group__list">
              <li>
                <a
                  href="index.html"
                  className="fn__tooltip active menu__item"
                  data-position="right"
                  title="Home"
                >
                  <span className="icon">
                    <img src="svg/home.svg" alt="" className="fn__svg" />
                  </span>
                  <span className="text">Home</span>
                </a>
              </li>
              <li>
                <a
                  href="community-feed.html"
                  className="fn__tooltip menu__item"
                  data-position="right"
                  title="Community Feed"
                >
                  <span className="icon">
                    <img src="svg/community.svg" alt="" className="fn__svg" />
                  </span>
                  <span className="text">Community Feed</span>
                </a>
              </li>
              <li>
                <a
                  href="personal-feed.html"
                  className="fn__tooltip menu__item"
                  data-position="right"
                  title="Personal Feed"
                >
                  <span className="icon">
                    <img src="svg/person.svg" alt="" className="fn__svg" />
                  </span>
                  <span className="text">
                    Personal Feed<span className="count">48</span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="models.html"
                  className="fn__tooltip menu__item"
                  data-position="right"
                  title="Finetuned Models"
                >
                  <span className="icon">
                    <img src="svg/cube.svg" alt="" className="fn__svg" />
                  </span>
                  <span className="text">Finetuned Models</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="nav_group">
            <h2 className="group__title">User Tools</h2>
            <ul className="group__list">
              <li>
                <a
                  href="image-generation.html"
                  className="fn__tooltip menu__item"
                  data-position="right"
                  title="Image Generation"
                >
                  <span className="icon">
                    <img src="svg/image.svg" alt="" className="fn__svg" />
                  </span>
                  <span className="text">Image Generation</span>
                </a>
              </li>
              <li>
                <a
                  href="ai-chat-bot.html"
                  className="fn__tooltip menu__item"
                  data-position="right"
                  title="AI Chat Bot"
                >
                  <span className="icon">
                    <img src="svg/chat.svg" alt="" className="fn__svg" />
                  </span>
                  <span className="text">AI Chat Bot</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="nav_group">
            <h2 className="group__title">Support</h2>
            <ul className="group__list">
              <li>
                <a
                  href="pricing.html"
                  className="fn__tooltip menu__item"
                  data-position="right"
                  title="Pricing"
                >
                  <span className="icon">
                    <img src="svg/dollar.svg" alt="" className="fn__svg" />
                  </span>
                  <span className="text">Pricing</span>
                </a>
              </li>
              <li className="menu-item-has-children">
                <a
                  href="video-generation.html"
                  className="fn__tooltip menu__item"
                  title="FAQ &amp; Help"
                  data-position="right"
                >
                  <span className="icon">
                    <img src="svg/question.svg" alt="" className="fn__svg" />
                  </span>
                  <span className="text">FAQ &amp; Help</span>
                  <span className="trigger">
                    <img src="svg/arrow.svg" alt="" className="fn__svg" />
                  </span>
                </a>
                <ul className="sub-menu">
                  <li>
                    <a href="documentation.html">
                      <span className="text">Documentation</span>
                    </a>
                  </li>
                  <li>
                    <a href="faq.html">
                      <span className="text">FAQ</span>
                    </a>
                  </li>
                  <li>
                    <a href="changelog.html">
                      <span className="text">
                        Changelog<span className="fn__sup">(4.1.2)</span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="contact.html">
                      <span className="text">Contact Us</span>
                    </a>
                  </li>
                  <li>
                    <a href="index-2.html">
                      <span className="text">Home #2</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  href="sign-in.html"
                  className="fn__tooltip menu__item"
                  data-position="right"
                  title="Log Out"
                >
                  <span className="icon">
                    <img src="svg/logout.svg" alt="" className="fn__svg" />
                  </span>
                  <span className="text">Log Out</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftPanel;
