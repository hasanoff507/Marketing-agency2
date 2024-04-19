import React from "react";
import {Wrapper} from "./style";
import {ReactComponent as InstagramSvg} from "../../assets/main/social-icons/instagram-svgrepo-com.svg";
import {ReactComponent as FaceBookSvg} from "../../assets/main/social-icons/facebook-svgrepo-com.svg";
import {ReactComponent as LinkedinSvg} from "../../assets/main/social-icons/linkedin-svgrepo-com.svg";
import {ReactComponent as TelegramSvg} from "../../assets/main/social-icons/telegram-svgrepo-com.svg";
import { Link } from "react-scroll";


const Footer = () => {
    return(
        <Wrapper>
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="footer-col">
                            <h4>Компания</h4>
                            <ul>
                                <li> <Link to="home" spy={true} smooth={true} >Главная</Link></li>
                                <li> <Link to="our-service" spy={true} smooth={true} >наши услуги</Link></li>
                                <li> <Link to="pricing" spy={true} smooth={true} >наши Цены</Link></li>
                                <li> <Link to="projects" spy={true} smooth={true} >Все проекты</Link></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Разработка</h4>
                            <ul>
                                <li> <Link to="" spy={true} smooth={true} >FAQ</Link></li>
                                <li> <Link to="" spy={true} smooth={true} >Выполнить разработку</Link></li>
                                <li> <Link to="" spy={true} smooth={true} >Платежная система</Link></li>
                                <li> <Link to="" spy={true} smooth={true} >статус заказа</Link></li>
                                <li> <Link to="" spy={true} smooth={true} >варианты оплаты</Link></li>
                            </ul>
                        </div>
                        {/* <div className="footer-col">
                            <h4>Интернет-магазин</h4>
                            <ul>
                                <li> <Link to="" spy={true} smooth={true} >смотреть</Link></li>
                                <li> <Link to="" spy={true} smooth={true} >Лендинг</Link></li>
                                <li> <Link to="" spy={true} smooth={true} >Бизнес сайт</Link></li>
                                <li> <Link to="" spy={true} smooth={true} >Интернет магазин</Link></li>
                            </ul>
                        </div> */}
                        <div className="footer-col">
                            <h4>Местоположение</h4>
                            <ul>
                                <li> <Link to="" spy={true} smooth={true} >Узбекистан, Тошкент </Link></li>
                                <li> <Link to="" spy={true} smooth={true} >Чиланзорский район, Зухур Палвон, 3-й дом </Link></li>
                                <li> <a href="tel: +998 (97) 753 14 01">телефон: +998 (97) 753 14 01</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>подписаться </h4>
                            <div className="social-links">
                                <a href="https://www.instagram.com/adigmo_agency/?igshid=MWI4MTIyMDE%3D">
                                    <InstagramSvg/>

                                </a>
                                <a href="https://t.me/adigmouz">
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