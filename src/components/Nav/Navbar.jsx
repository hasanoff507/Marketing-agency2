import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-scroll";
// Components
import Sidebar from "../Sidebar/index";
// Assets
import { ReactComponent as LogoSvg } from "../../assets/logo/adig.svg";
import BurgerIcon from "../../assets/svg/BurgerIcon";
import {
  Button,
  Drawer,
  LangWrapper,
  NavbarButton,
  NavInner,
  UlWrapper,
  Wrapper,
  LangSecondBnt,
  LangButton,
} from "./styles";

import { data } from "../../data";
// language
import langs from "../../Constants/lang";
import Text from "../../language/langManager";
import {
  switchLang,
  switchToRussian,
  switchToUzbek,
  switchToEnglish,
} from "../../redux/modules/lang/langAction";

const Navbar = () => {
  const [y, setY] = useState(window.scrollY);
  const dispatch = useDispatch();
  const [isRed, setIsRed] = useState(true);
  const [blue, setBlue] = useState(false);
  const [open, setOpen] = useState(false);

  // navbar toggle function
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => setY(window.scrollY));
    return () => {
      window.removeEventListener("scroll", () => setY(window.scrollY));
    };
  }, [y]);

  const state = useSelector((state) => state);
  const lang = state.lang;
  const { UZBEK, RUSSIAN, ENGLISH } = langs;

  const langChanger = (item) => {
    // const handleTwo = () => {
    //   setIsRed(true);
    //   setBlue(lang === UZBEK ? false : "");
    // };
    // handleTwo();
    if ("UZ" === item) {
      dispatch(switchToUzbek());
    } else if ("RU" === item) {
      dispatch(switchToRussian());
    } else {
      dispatch(switchToEnglish());
    }
  };

  return (
    <>
      <Drawer open={open}>
        <Sidebar onClose={onClose} />
      </Drawer>

      <Wrapper
        className="flexCenter animate "
        style={
          y > 100
            ? {
                boxShadow: "0 2px 4px 0 rgba(0,0,0,.2)",
                backgroundColor: "#0080ff",
              }
            : { height: "80px" }
        }
      >
        <NavInner>
          <Link className="pointer flexNullCenter" to="home" smooth={true}>
            <div className="nav-logo">
              <LogoSvg />
            </div>
          </Link>

          <UlWrapper className="flexNullCenter">
            {data.navData?.map(({ id, link, title }) => {
              return (
                <div key={id}>
                  <li className="semiBold font15 pointer">
                    <Link
                      activeClass="active"
                      style={{ padding: "10px 15px" }}
                      to={link}
                      spy={true}
                      smooth={true}
                      offset={-80}
                    >
                      {title}
                    </Link>
                  </li>
                </div>
              );
            })}
          </UlWrapper>
          
          <div className="rightContent">
            <LangWrapper>
              <select
                defaultValue={"RU"}
                onChange={(e) => langChanger(e.target.value)}
              >
                {data.languages?.map(({ id, title, }) => {
                  return (
                    <option
                      key={id}
                      value={title}
                      style={
                        y > 100
                          ? {
                              backgroundColor: "#0080ff",
                            }
                          : {}
                      }
                    >
                       {title}
                    </option>
                  );
                })}
              </select>
            </LangWrapper>
            <Button className="humberger-btn" onClick={showDrawer}>
              <BurgerIcon className={"icon-one"} />
            </Button>
          </div>
        </NavInner>
      </Wrapper>
    </>
  );
};
export default Navbar;
