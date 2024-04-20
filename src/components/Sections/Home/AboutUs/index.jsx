import React from "react";
import { Container, Content, InternalWrapper, Title, Wrapper } from "./style";
import aboutUsimg from "../../../../assets/img/AboutUs.jpg";
import Text from "../../../../language/langManager";

const AboutUs = () => {
  return (
    <Wrapper id={"AboutUs"}>
      <Container>
        <Title>
          <h1 className="font40 extraBold flexCenter">
            <Text id={"aboutUsTitle"} />
          </h1>
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
            <div className="title">
              <Text id={"aboutUSTextBoxTitle"} />
            </div>
            <p className="subtitle">
              <Text id={"aboutUSTextBoxText1"} />
            </p>
            <div className="text">
              <Text id={"aboutUSTextBoxText2"} />
            </div>
            <p className="text">
              <Text id={"aboutUSTextBoxText3"} />
            </p>
            <div className="statistic-wrapper">
              <div className="box">
                <div className="box-title">1000+</div>
                <div className="box-number">
                  <Text id={"aboutUsStatisticText1"} />
                </div>
              </div>
              <div className="box">
                <div className="box-title">15+</div>
                <div className="box-number">
                  <Text id={"aboutUsStatisticText2"} />
                </div>
              </div>
              <div className="box">
                <div className="box-title">25+</div>
                <div className="box-number">
                  <Text id={"aboutUsStatisticText3"} />
                </div>
              </div>
            </div>
          </div>
        </Content>
      </InternalWrapper>
    </Wrapper>
  );
};
export default AboutUs;
