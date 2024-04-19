import React, {useState} from "react";
// Components
import {Container, HeaderInfo, Wrapper} from "./styles";
import Card from "../../../Card";
import PopUp from "../../../popUp";
import {data} from "../../../../data"

const Pricing = () => {
    const [popUp, setPopUp] = useState(false);
  return (
    <Wrapper id="pricing">
        {popUp ? <PopUp popUp={popUp} setPopUp={setPopUp} /> : ""}

        <HeaderInfo>
            <h1 className="font40 extraBold">Ознакомьтесь с нашими ценами</h1>
            <p className={"subtitle"}>
            В Adigmo, мы предлагаем конкурентоспособные цены и гибкие тарифные планы для всех наших услуг веб-разработки. Наша цель — предложить вам оптимальные решения, которые обеспечат вам высокий возврат инвестиций
            </p>
        </HeaderInfo>
        <Container>
            {
                data.price.map(({id,title,subtitle,price,ruleTextOne,ruleTextThree,ruleTextTwo})=>{
                    return(
                        <Card
                            key={id}
                            title={title}
                            price={price}
                            subtitle={subtitle}
                            ruleTextOne={ruleTextOne}
                            ruleTextThree={ruleTextThree}
                            ruleTexTwo={ruleTextTwo}
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






