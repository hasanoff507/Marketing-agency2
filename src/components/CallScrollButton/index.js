import React from "react";
import { Wrapper } from "./styles";
import { ReactComponent as CallSvg } from "../../assets/main/social-icons/phone-call-svgrepo-com.svg";

const CallSrollButton = () =>{
    return(
        <Wrapper>
           <div className="call-wrapper">
                <div className="call-svg">
                <a href="tel:977531401">
                <CallSvg />
                </a>
                </div>
                <a className="numb" href="tel:977531401">(97)753-14-01</a>
              </div>
        </Wrapper>
    )
}
export default CallSrollButton;