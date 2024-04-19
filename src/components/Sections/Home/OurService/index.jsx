import React, {useState} from "react";
import {Button, Container, ServiceBox, ServiceWrapper, Title, Wrapper} from "./style";
import {ReactComponent as ScreenSvg} from "../../../../assets/svg/idea.svg";
import {ReactComponent as TopSvg} from "../../../../assets/svg/to top.svg";
import {ReactComponent as ShopSvg} from "../../../../assets/svg/online shopping.svg";
import PopUp from "../../../popUp";

const OurService = () => {
    const [popUp, setPopUp] = useState(false);

    return(
        <Wrapper id={"our-service"}>
      {popUp ? <PopUp popUp={popUp}  setPopUp={setPopUp} /> : ""}

            <Container>
                <h1 className="font40 extraBold">Создание сайтов <span>от Adigmo!</span></h1>
                <p className={"subtitle"}>
                В эпоху цифровых технологий, онлайн-присутствие вашего бизнеса перестало быть просто желательным – это стало неотъемлемой необходимостью. В Adigmo, мы убеждены, что профессионально разработанный веб-сайт является визитной карточкой вашего бизнеса в интернете, мощным инструментом для привлечения новых и удержания текущих клиентов.
                </p>
                <ServiceWrapper>
                    <ServiceBox>
                        <div className={"svg-wrapper"}>
                            <ScreenSvg/>
                        </div>
                        <p className={"title"}>
                            Лендинг
                        </p>
                        <p className={"text"}>
                            Преобразуем идею в лендинг с высокой конверсией
                        </p>
                        <Button onClick={() => setPopUp(true)}>Заказать</Button>
                    </ServiceBox>
                    <ServiceBox>
                        <div className={"svg-wrapper"}>
                            <TopSvg/>
                        </div>
                        <p className={"title"}>
                            Бизнес сайт
                        </p>
                        <p className={"text"}>
                            Корпоративные сайты, усиливающие ваш бренд онлайн
                        </p>
                        <Button onClick={() => setPopUp(true)}>Заказать</Button>
                    </ServiceBox>
                    <ServiceBox>
                        <div className={"svg-wrapper"}>
                            <ShopSvg/>
                        </div>
                        <p className={"title"}>
                            Интернет магазин
                        </p>
                        <p className={"text"}>
                            Интернет-магазины, созданные для максимальных продаж
                        </p>
                        <Button onClick={() => setPopUp(true)}>Заказать</Button>
                    </ServiceBox>
                </ServiceWrapper>
            </Container>
        </Wrapper>
    )
}
export default OurService