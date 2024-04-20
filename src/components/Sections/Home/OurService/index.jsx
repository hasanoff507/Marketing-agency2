import React, {useState} from "react";
import {Button, Container, ServiceBox, ServiceWrapper, Title, Wrapper} from "./style";
import {ReactComponent as GoogleSvg} from "../../../../assets/serviceItems/serviceLogo/Google Ads.svg";
import {ReactComponent as FacebookSvg} from "../../../../assets/serviceItems/serviceLogo/facebook-ads.svg";
import {ReactComponent as BingSvg} from "../../../../assets/serviceItems/serviceLogo/bing-ads-logo.svg";
import {ReactComponent as SeoSvg} from "../../../../assets/serviceItems/serviceLogo/smart-seo-seeklogo.svg";
import Text from "../../../../language/langManager"
import PopUp from "../../../popUp";

const OurService = () => {
    const [popUp, setPopUp] = useState(false);

    return(
        <Wrapper id={"our-service"}>
      {popUp ? <PopUp popUp={popUp}  setPopUp={setPopUp} /> : ""}

            <Container>
                <h1 className="font40 extraBold">
                    <Text id={"ourServiceTitle"}/>
                    <span></span></h1>
                <p className={"subtitle"}>
                <Text id={"ourServiceSubtitle"}/>
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
                            <Text id={"ourServiceCardText1"}/>
                        </p>
                        <Button className="bg-dark" onClick={() => setPopUp(true)}>
                        <Text id={"homeButton"}/>

                        </Button>
                    </ServiceBox>
                    <ServiceBox className="bg-dark">
                        <div className={"svg-wrapper"}>
                            <FacebookSvg/>
                        </div>
                        <p className={"title"}>
                            FaceBook Ads
                        </p>
                        <p className={"text"}>
                        <Text id={"ourServiceCardText2"}/>
                        </p>
                        <Button className="bg-dark" onClick={() => setPopUp(true)}>
                        <Text id={"homeButton"}/>

                        </Button>
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
                        <Text id={"ourServiceCardText3"}/>

                        </p>
    
                        <Button className="bg-dark" onClick={() => setPopUp(true)}>
                        <Text id={"homeButton"}/>

                        </Button>
                    </ServiceBox>
                    <ServiceBox>
                        <div className={"svg-wrapper"}>
                            <SeoSvg/>
                        </div>
                        <p className={"title"}>
                            SEO
                        </p>
                        <p className={"text"}>
                        <Text id={"ourServiceCardText4"}/>

                        </p>
                        <Button className="bg-dark" onClick={() => setPopUp(true)}>
                        <Text id={"homeButton"}/>

                        </Button>
                    </ServiceBox>
                </ServiceWrapper>
                
            </Container>
        </Wrapper>
    )
}
export default OurService