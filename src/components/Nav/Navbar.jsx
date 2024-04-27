import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
// Components
import Sidebar from "../Sidebar/index";
import {ReactComponent as TelegramSvg} from "../../assets/main/social-icons/telegram-svgrepo-com.svg"
// Assets
import { ReactComponent as LogoSvg } from "../../assets/logo/adig.svg";
import BurgerIcon from "../../assets/svg/BurgerIcon";
import { Button, Drawer, NavInner, UlWrapper, Wrapper, NavTop } from "./styles";

import { data } from "../../data";
// language

const Navbar = () => {
  const [y, setY] = useState(window.scrollY);
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
            : { height: "140px",backgroundColor: "#0080ff"  }
        }
      >
        <NavTop>
          <div className="navtop-wrapper">
            <div className="navtop-left">Инвестируйте в свой бренд с нами!</div>

            <div className="navtop-right">
              <div className="nav-tel">
              <i class="fa-solid fa-phone"></i>
                <a href="tel:977531401">Телефон: (97)753-14-01</a>
              </div>
              <div className="nav-messanger">
                <div className="nav-telegram-icon">
                <a href="https://t.me/fazogir">
                  <TelegramSvg/> 
                </a>
                </div>
                <p className="nav-top-title"> @fazogir</p>
                
              </div>
            </div>

          </div>
        </NavTop>

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

          <Button className="humberger-btn" onClick={showDrawer}>
            <BurgerIcon className={"icon-one"} />
          </Button>
        </NavInner>
      </Wrapper>
    </>
  );
};
export default Navbar;
