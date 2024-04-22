import React from "react";

import { Wrapper, SidebarHeader, UlStyle, CloseBtn } from "./styles";
import { Link } from "react-scroll";
// Assets
import CloseIcon from "../../assets/svg/CloseIcon";
import { ReactComponent as LogoSvg } from "../../assets/logo/adig.svg";
//
import { data } from "../../data";

const Sidebar = ({ onClose }) => {
  return (
    <Wrapper className={"animate"}>
      <SidebarHeader>
        <LogoSvg className="sidebar-logo" />
        <CloseBtn onClick={onClose} className="animate pointer">
          <CloseIcon />
        </CloseBtn>
      </SidebarHeader>
      <UlStyle className=" flexColumn">
        {data.navData.map(({ id, link, title }) => {
          return (
            <li key={id} className="pointer">
              <Link
                onClick={onClose}
                activeClass="active"
                style={{ padding: "10px  0 15px" }}
                to={link}
                spy={true}
                smooth={true}
                offset={-60}
              >
                {title}
              </Link>
            </li>
          );
        })}
      </UlStyle>
    </Wrapper>
  );
};
export default Sidebar;
