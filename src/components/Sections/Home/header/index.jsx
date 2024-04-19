import React, { useEffect, useState } from "react";
import "toastify-js/src/toastify.css";
import { PatternFormat } from "react-number-format";
import { TypeAnimation } from "react-type-animation";
import PopUp from "../../../popUp";
import { HttpRequest } from "../../../../hooks/httpRequest";
import { serviceData } from "../../../../Constants/serviceType";
import { useNavigate } from "react-router-dom";

import videoFile from "../../../../assets/hero.mp4"
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
} from "./styles";

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
    const currentNumber = values.number.replace(/\D/g, '');
    
    console.log(values)
    const errors = {};
    if (!values.name) {
      errors.name = "Name required!";
    } else if (values.name.length < 4) {
      errors.name = "The name must contain at least 4 characters!";
    } else if (values.number.length == "" ) {
      errors.number = "Phone Number required";
    } else if (currentNumber.length < 12) {
    
      errors.number =
        "The phone number must consist of at least 12 characters!";
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
          Unlock Your Growth at
            <div>
              <TypeAnimation
                sequence={[
                  "Google Ads", // Types 'One'
                  2000, // Waits 1s
                  "Facebook Ads", // Deletes 'One' and types 'Two'
                  4000, // Waits 2s
                  "SEO",
                  4000,
                  // Types 'Three' without deleting 'Two'
                ]}
                wrapper="span"
                speed={7}
                cursor={true}
                repeat={Infinity}
                style={{ fontSize: "", display: "inline-block" }}
              />
            </div>
            <div className="under-title">with Adigmo</div>
          </Title>
          <MobileBtn onClick={() => setPopUp(true)}>Get Started</MobileBtn>
        </LeftSide>

        <RightSide>
          <Form onSubmit={handleSubmit}>
            <FormContainer>
              <FormTitle> Connect with Us</FormTitle>
              <p
                style={formErrors.name ? { color: "red" } : { color: "#fff" }}
              >
                {formErrors.name ? formErrors.name : "Name"}
              </p>
              <Input
                className={"input-numb"}
                value={state.name}
                type={"Name"}
                placeholder={"Name"}
                maxLength={30}
                onChange={(e) =>
                  setState({ ...state, name: e.target.value.trim() })
                }
              />
              <p
                style={
                  formErrors.number ? { color: "red" } : { color: "#fff" }
                }
              >
                {formErrors.number ? formErrors.number : "Phone Number"}
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

              <p>Email Address</p>
              <Input
                className={"numb"}
                type="email"
                placeholder={"Email Address "}
                value={state.email}
                onChange={(e) => setState({ ...state, email: e.target.value })}
              />

              <p>Service</p>

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
            <Button> Get Started </Button>
          </Form>
        </RightSide>
      </Container>
    </Wrapper>
  );
};
export default Header;
