import React, {useState} from "react";
import {Button, Container, ServiceBox, ServiceWrapper, Title, Wrapper} from "./style";
import {ReactComponent as GoogleSvg} from "../../../../assets/serviceItems/serviceLogo/Google Ads.svg";
import {ReactComponent as FacebookSvg} from "../../../../assets/serviceItems/serviceLogo/facebook-ads.svg";
import {ReactComponent as BingSvg} from "../../../../assets/serviceItems/serviceLogo/bing-ads-logo.svg";
import {ReactComponent as SeoSvg} from "../../../../assets/serviceItems/serviceLogo/smart-seo-seeklogo.svg";

import PopUp from "../../../popUp";

const OurService = () => {
    const [popUp, setPopUp] = useState(false);

    return(
        <Wrapper id={"our-service"}>
      {popUp ? <PopUp popUp={popUp}  setPopUp={setPopUp} /> : ""}

            <Container>
                <h1 className="font40 extraBold">Marketing Solutions<span></span></h1>
                <p className={"subtitle"}>
                Unlock your brand's potential with our comprehensive marketing solutions. From precise Google Ads and targeted Facebook campaigns to effective SEO strategies, we help you connect, engage, and grow your audience.
                </p>
                <ServiceWrapper>
                    <ServiceBox>
                        <div  className={"svg-wrapper google-svg"}>
                            <GoogleSvg/>
                        </div>
                        <p className={"title"}>
                            Google Ads
                        </p>
                        <p className={"text"}>
                        Drive targeted traffic to your website and boost conversions with Google Ads. Our expert team creates and manages impactful campaigns, ensuring your ads reach the right audience at the right time.
                        </p>
                        <Button className="bg-dark" onClick={() => setPopUp(true)}>Заказать</Button>
                    </ServiceBox>
                    <ServiceBox className="bg-dark">
                        <div className={"svg-wrapper"}>
                            <FacebookSvg/>
                        </div>
                        <p className={"title"}>
                            FaceBook Ads
                        </p>
                        <p className={"text"}>
                        Engage your audience with tailored Facebook Ads. Our team designs eye-catching campaigns that connect with your target market, driving more traffic, leads, and conversions for your business.
                        </p>
                        <Button  onClick={() => setPopUp(true)}>Заказать</Button>
                    </ServiceBox>
                    
                </ServiceWrapper>
                <ServiceWrapper>
                <ServiceBox className="bg-dark">
                        <div className={"svg-wrapper"}>
                            <BingSvg/>
                        </div>
                        <p className={"title"}>
                            Bing Ads
                        </p>
                        <p className={"text"}>
                        Maximize your online presence with Bing Ads. Our team crafts targeted campaigns to connect with your audience and drive traffic, helping you reach a broader market and achieve your business goals.
                        </p>
                        <Button onClick={() => setPopUp(true)}>Заказать</Button>
                    </ServiceBox>
                    <ServiceBox>
                        <div className={"svg-wrapper"}>
                            <SeoSvg/>
                        </div>
                        <p className={"title"}>
                            SEO
                        </p>
                        <p className={"text"}>
                        Boost your online visibility and organic traffic with expert SEO strategies. We optimize your website to rank higher on search engines, helping you attract more qualified leads and grow your business.
                        </p>
                        <Button className="bg-dark" onClick={() => setPopUp(true)}>Заказать</Button>
                    </ServiceBox>
                </ServiceWrapper>
                
            </Container>
        </Wrapper>
    )
}
export default OurService