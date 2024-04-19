import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
// Components
import Sidebar from "../Sidebar/index";
// Assets
import {ReactComponent as LogoSvg }from "../../assets/logo/adig.svg";
import BurgerIcon from "../../assets/svg/BurgerIcon";
import {Button, Drawer, NavbarButton, NavInner, UlWrapper,Wrapper} from "./styles";

const  Navbar = () => {
  const [y, setY] = useState(window.scrollY);

  const [open, setOpen] = useState(false);
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
      <Drawer  open={open}>
        <Sidebar onClose={onClose} />
      </Drawer>

      <Wrapper
          className="flexCenter animate "
          style={y > 100 ? { boxShadow: "0 2px 4px 0 rgba(0,0,0,.2)",backgroundColor:"#0080ff"} : { height: "80px" }}>

        <NavInner>

          <Link className="pointer flexNullCenter" to="home" smooth={true}>
            <div className="nav-logo">
              <LogoSvg/>
            </div>
          </Link>
          <Button  className="humberger-btn"  onClick={showDrawer}>
            <BurgerIcon className={"icon-one"} />
          </Button>

          <UlWrapper className="flexNullCenter">
            <li className="semiBold font15 pointer">
              <Link activeClass="active" style={{ padding: "10px 15px" }} to="home" spy={true} smooth={true} offset={-80}>
                Главная
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link activeClass="active" style={{ padding: "10px 15px" }} to="our-service" spy={true} smooth={true} offset={-80}>
                Услуги
              </Link>
            </li>

            <li className="semiBold font15 pointer">
              <Link activeClass="active" style={{ padding: "10px 15px" }} to="pricing" spy={true} smooth={true} offset={-80}>
                Цены
              </Link>
            </li>

            <li className="semiBold font15 pointer">
              <Link activeClass="active" style={{ padding: "10px 15px" }} to="projects" spy={true} smooth={true} offset={-80}>
                Проекты
              </Link>
            </li>

            <li className="semiBold font15 pointer">
              <Link activeClass="active" style={{ padding: "10px 15px" }} to="AboutUs" spy={true} smooth={true} offset={-80}>
                О нас
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link activeClass="active" style={{ padding: "10px 15px" }} to="contact" spy={true} smooth={true} offset={-80}>
                Контакты
              </Link>
            </li>
          </UlWrapper>
        </NavInner>
      </Wrapper>
    </>
  );
}
export  default Navbar

