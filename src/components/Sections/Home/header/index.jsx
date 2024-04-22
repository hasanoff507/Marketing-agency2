import React, { useEffect, useState } from "react";
import "toastify-js/src/toastify.css";
import { PatternFormat } from "react-number-format";
import { TypeAnimation } from "react-type-animation";
import PopUp from "../../../popUp";
import { HttpRequest } from "../../../../hooks/httpRequest";
import { serviceData } from "../../../../Constants/serviceType";
import { useNavigate } from "react-router-dom";

import videoFile from "../../../../assets/hero.mp4";
import {
  Button,
  Container,
  Form,
  FormContainer,
  SelectInput,
  Option,
  FormTitle,
  Input,
  LeftSide,
  RightSide,
  Title,
  Wrapper,
  MobileBtn,
  HeaderVideo,
  Subtitle,
} from "./styles";

import Text from "../../../../language/langManager";

const Header = () => {
  // don't  edit this code
  const [popUp, setPopUp] = useState(false);

  const [state, setState] = useState({
    name: "",
    number: "",
    email: "",
    service: "Google Ads",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(state, e));
    setIsSubmit(true);
  };

  useEffect(() => {}, [formErrors]);

  const validate = (values, e) => {
    const currentNumber = values.number.replace(/\D/g, "");

    console.log(values);
    const errors = {};
    if (!values.name) {
      errors.name = <Text id={"homeFormAlertTitle1"} />;
    } else if (values.name.length < 4) {
      errors.name = <Text id={"homeFormAlertTitle3"} />;
    } else if (values.number.length == "") {
      errors.number = <Text id={"homeFormAlertTitle2"} />;
    } else if (currentNumber.length < 12) {
      errors.number = <Text id={"homeFormAlertTitle4"} />;
    } else {
      HttpRequest({
        e,
        state,
        setState,
      })
        .then(() => {
          navigate("/success");
          console.log("Request sent successfully");
        })
        .catch((err) => {
          console.log(err);
        });
    }

    return errors;
  };

  return (
    <Wrapper id={"home"}>
      {popUp ? <PopUp popUp={popUp} setPopUp={setPopUp} /> : ""}
      <HeaderVideo src={`${videoFile}`} autoPlay muted loop={true} />
      <Container>
        <LeftSide>
          <Title>
            <Text id={"homeHeaderTitle1"} /> <br/>
            <Text id={"homeHeaderSubtitle2"} />
            <div>
              <TypeAnimation
                sequence={[
                  "Google Ads", // Types 'One'
                  2000, // Waits 1s
                  "Facebook Ads", // Deletes 'One' and types 'Two'
                  4000, // Waits 2s
                  "LinkedIn Ads",
                  4000,
                  "Yandex Direct",
                  4000,
                  "SEO"

                  // Types 'Three' without deleting 'Two'
                ]}
                wrapper="span"
                speed={7}
                cursor={true}
                repeat={Infinity}
                style={{ fontSize: "", display: "inline-block" }}
              />
            </div>
            
          </Title>
          {/* <Subtitle>
           
            <br />
            <Text id={"homeHeaderSubtitle2"} />
          </Subtitle> */}
          <MobileBtn onClick={() => setPopUp(true)}>
          <Text id={"homeButton"} />
          </MobileBtn>
        </LeftSide>

        <RightSide>
          <Form onSubmit={handleSubmit}>
            <FormContainer>
              <FormTitle>
                <Text id={"homeHeaderFormTitle"} />
              </FormTitle>
              <p style={formErrors.name ? { color: "red" } : { color: "#fff" }}>
                {formErrors.name ? (
                  formErrors.name
                ) : (
                  <Text id={"homeHeaderInputTitle"} />
                )}
              </p>
              <Input
                className={"input-numb"}
                value={state.name}
                type={"Name"}
                placeholder={Text({ id: "homeHeaderInputTitle" })}
                maxLength={30}
                onChange={(e) =>
                  setState({ ...state, name: e.target.value.trim() })
                }
              />
              <p
                style={formErrors.number ? { color: "red" } : { color: "#fff" }}
              >
                {formErrors.number ? (
                  formErrors.number
                ) : (
                  <Text id={"homeHeaderInputTitle1"} />
                )}
              </p>

              <PatternFormat
                className={"input-numb"}
                value={state.number}
                type={"tel"}
                placeholder={"Phone Number"}
                format="+998(##)###-##-##"
                allowEmptyFormatting
                mask="_"
                data-cy="phone"
                onChange={(e) => setState({ ...state, number: e.target.value })}
              />

              <p>
                <Text id={"homeHeaderInputTitle2"} />
              </p>
              <Input
                className={"numb"}
                type="email"
                placeholder={Text({ id: "homeHeaderInputTitle2" })}
                value={state.email}
                onChange={(e) => setState({ ...state, email: e.target.value })}
              />

              <p>
                <Text id={"homeHeaderInputTitle3"} />
              </p>

              <SelectInput
                onChange={(e) =>
                  setState({ ...state, service: e.target.value })
                }
              >
                {serviceData.map(({ id, name }) => (
                  <Option key={id} value={`${name}`}>
                    {name}
                  </Option>
                ))}
              </SelectInput>
            </FormContainer>
            <Button>
              <Text id={"homeButton"} />
            </Button>
          </Form>
        </RightSide>
      </Container>
    </Wrapper>
  );
};
export default Header;
