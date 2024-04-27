import React from "react";
import {Wrapper} from "./style";
import {ReactComponent as InstagramSvg} from "../../assets/main/social-icons/instagram-svgrepo-com.svg";
import {ReactComponent as FaceBookSvg} from "../../assets/main/social-icons/facebook-svgrepo-com.svg";
import {ReactComponent as LinkedinSvg} from "../../assets/main/social-icons/linkedin-svgrepo-com.svg";
import {ReactComponent as TelegramSvg} from "../../assets/main/social-icons/telegram-svgrepo-com.svg";
import { Link } from "react-scroll";
import Text from "../../language/langManager"

const Footer = () => {
    return(
        <Wrapper>
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="footer-col">
                            <h4>
                                <Text id="footerTitle1"/>
                            </h4>
                            <ul>
                                <li> <Link to="home" spy={true} smooth={true} >
                                <Text id="footerColText1"/>
                                </Link></li>
                                <li> <Link to="our-service" spy={true} smooth={true} >
                                <Text id="footerColText2"/>
                                    </Link></li>
                                <li> <Link to="pricing" spy={true} smooth={true} >
                                <Text id="footerColText3"/>
                                    </Link></li>
                                <li> <Link to="projects" spy={true} smooth={true} >
                                <Text id="footerColText4"/>
                                    </Link></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>
                            <Text id="footerTitle2"/>
                            </h4>
                            <ul>
                                <li> <Link to="" spy={true} smooth={true} >
                                <Text id="footerCol2Text1"/>
                                    </Link></li>
                                <li> <Link to="" spy={true} smooth={true} >
                                <Text id="footerCol2Text2"/>
                                    </Link></li>
                                <li> <Link to="" spy={true} smooth={true} >
                                <Text id="footerCol2Text3"/>
                                    </Link></li>
                                <li> <Link to="" spy={true} smooth={true} >
                                <Text id="footerCol2Text4"/>
                                    </Link></li>
                                <li> <Link to="" spy={true} smooth={true} >
                                <Text id="footerCol2Text5"/>
                                    </Link></li>
                            </ul>
                        </div>
                        
                        <div className="footer-col">
                            <h4><Text id="footerTitle3"/></h4>
                            <ul>
                                <li> <Link to="" spy={true} smooth={true} >
                                <Text id="footerCol3Text1"/>
                                </Link></li>
                                <li> <Link to="" spy={true} smooth={true} > <Text id="footerCol3Text2"/>  <Text id="footerCol3Text3"/> </Link></li>
                                <li> <a href="tel: +998 (97) 753 14 01">
                                <Text id="footerCol3Text4"/> 
                                    </a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>подписаться </h4>
                            <div className="social-links">
                                <a href="https://www.instagram.com/adigmo_agency/?igshid=MWI4MTIyMDE%3D">
                                    <InstagramSvg/>

                                </a>
                                <a href="https://t.me/fazogir">
                                    <TelegramSvg/>
                                </a>
                                <a href="https://www.linkedin.com/company/adigmo-uz/">
                                    <LinkedinSvg/>
                                </a>
                                <a href="https://www.facebook.com/adigmo.uz/">
                                    <FaceBookSvg/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="footer-right">© 2023. All rights reserved by Adigmo.uz</div>
                </div>
            </footer>
        </Wrapper>
    )
}
export default Footer