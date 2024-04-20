import React, {useState} from "react";
// Components
import {Container, HeaderInfo, Wrapper} from "./styles";
import Card from "../../../Card";
import PopUp from "../../../popUp";
import {data} from "../../../../data"
import Text from "../../../../language/langManager";

const Pricing = () => {
    const [popUp, setPopUp] = useState(false);
  return (
    <Wrapper id="pricing">
        {popUp ? <PopUp popUp={popUp} setPopUp={setPopUp} /> : ""}

        <HeaderInfo>
            <h1 className="font40 extraBold">
                <Text id={"priceTitle"}/>
            </h1>
            <p className={"subtitle"}>
                <Text id={"priceSubtitle"}/>
            </p>
        </HeaderInfo>
        <Container>
            {
                data.price.map(({id,title,subtitle,price,texts})=>{
                    return(
                        <Card
                            key={id}
                            title={title}
                            price={price}
                            subtitle={subtitle}
                            texts={texts}
                            click={()=> setPopUp(true)}
                        />
                    )
                })
            }
        </Container>

    </Wrapper>
  );
}
export default Pricing






