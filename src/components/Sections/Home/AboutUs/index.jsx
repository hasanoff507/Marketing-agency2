import React from "react";
import {
  Box,
  Container,
  Content,
  InternalWrapper,
  Row,
  SvgContainer,
  Title,
  Wrapper,
} from "./style";
import { ReactComponent as TechSvg } from "../../../../assets/serviceItems/technology.svg";
import { ReactComponent as AdoptionSvg } from "../../../../assets/serviceItems/responsive.svg";
import { ReactComponent as DesignSvg } from "../../../../assets/serviceItems/creative.svg";
import { ReactComponent as SettingSvg } from "../../../../assets/serviceItems/web sey.svg";
import { ReactComponent as LoopSvg } from "../../../../assets/serviceItems/loop.svg";
import { ReactComponent as BoxSvg } from "../../../../assets/serviceItems/box.svg";
import aboutUsimg from "../../../../assets/img/AboutUs.jpg";

const AboutUs = () => {
  return (
    <Wrapper id={"AboutUs"}>
      <Container>
        <Title>
          <h1 className="font40 extraBold flexCenter">About Us</h1>
        </Title>
      </Container>
      <InternalWrapper>
        <Content>
          <div className="img-wrapper">
            <img src={aboutUsimg} alt="img" />
          </div>
        </Content>
        <Content>
          <div className="text-box">
            <div className="title">About Our Agency</div>
            <p className="subtitle">
              Welcome to our About Us section! We are a dedicated digital
              marketing agency committed to helping your business thrive in the
              online landscape. With over 17 years of experience, our team of
              expert marketers has successfully executed more than 1,000
              projects across a variety of niches and countries.
            </p>
            <div className="text">
              Our mission is to empower your brand, elevate your online
              presence, and drive tangible results. We take pride in our
              tailored strategies and innovative approaches to ensure your
              success. As your trusted partners, we work closely with you to
              understand your goals and deliver exceptional outcomes.
            </div>
            <p className="text">
              Join us on this journey and discover the difference our expertise
              can make in your business growth. Let’s achieve success together!
            </p>
            <div className="statistic-wrapper">
              <div className="box">
                <div className="box-title">1000+</div>
                <div className="box-number">Довольных Клиентов</div>
              </div>
              <div className="box">
                <div className="box-title">15+</div>
                <div className="box-number">Лет Опыта</div>
              </div>
              <div className="box">
                <div className="box-title">25+</div>
                <div className="box-number">Зарубежных Проектов</div>
              </div>
            </div>
          </div>
        </Content>
      </InternalWrapper>
    </Wrapper>
  );
};
export default AboutUs;
