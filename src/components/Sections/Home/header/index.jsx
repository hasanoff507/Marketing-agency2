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
} from "./styles";

import Text from "../../../../language/langManager";

const Header = () => {
  const [popUp, setPopUp] = useState(false);
  const [state, setState] = useState({
    name: "",
    number: "",
    company: "",
    email: "",
    service: "Google Ads",
    budget: "Стандартный - 6 000 000 сум",
  });
  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();

  useEffect(() => {}, [formErrors]);

  const validate = (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = "Имя обязательно.";
    } else if (values.name.length < 3) {
      errors.name = "Имя должно содержать не менее 2 символов.";
    }

    if (!values.company) {
      errors.company = "Название компании обязательно.";
    } else if (values.company.length < 4) {
      errors.company = "Название компании должно состоять не менее чем из 4 символов.";
    }

    if (!values.number) {
      errors.number = "Номер телефона обязателен.";
    } else if (values.number.replace(/\D/g, "").length < 12) {
      errors.number = "Неверный номер телефона.";
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate(state);
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
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
  };

  return (
    <Wrapper id={"home"}>
      {popUp ? <PopUp popUp={popUp} setPopUp={setPopUp} /> : ""}
      <HeaderVideo src={`${videoFile}`} autoPlay muted loop={true} />
      <Container>
        <LeftSide>
          <Title>
            <Text id={"homeHeaderTitle1"} /> <br />
            <Text id={"homeHeaderSubtitle2"} /> 
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
                  "SEO",
                ]}
                wrapper="span"
                speed={7}
                cursor={true}
                repeat={Infinity}
                style={{ fontSize: "", display: "inline-block" }}
              />
          
          </Title>

          <MobileBtn onClick={() => setPopUp(true)}>
            <Text id={"homeButton"} />
          </MobileBtn>
        </LeftSide>

        <RightSide>
          <Form onSubmit={handleSubmit}>
            <FormTitle>
              <Text id={"homeHeaderFormTitle"} />
            </FormTitle>
            <FormContainer>
              <div className="input-wrapper">
                <Input
                  value={state.name}
                  type={"Name"}
                  placeholder="Name"
                  maxLength={30}
                  onChange={(e) =>
                    setState({ ...state, name: e.target.value.trim() })
                  }
                />
                {formErrors.name && (
                  <div style={{ color: "red" }}>{formErrors.name}</div>
                )}
              </div>
              <div className="input-wrapper">
                <Input
                  value={state.company}
                  type={"Name"}
                  placeholder="Company"
                  maxLength={30}
                  onChange={(e) =>
                    setState({ ...state, company: e.target.value.trim() })
                  }
                />
                {formErrors.company && (
                  <div style={{ color: "red" }}>{formErrors.company}</div>
                )}
              </div>
              <div className="input-wrapper">
                <PatternFormat
                  className={"input-number"}
                  value={state.number}
                  type={"tel"}
                  placeholder="Phone Number"
                  format="+998(##)###-##-##"
                  mask="_"
                  data-cy="phone"
                  onChange={(e) =>
                    setState({ ...state, number: e.target.value })
                  }
                />
                {formErrors.number && (
                  <div style={{ color: "red" }}>{formErrors.number}</div>
                )}
              </div>

              <div className="input-wrapper">
                <SelectInput
                  onChange={(e) =>
                    setState({ ...state, budget: e.target.value })
                  }
                >
                  <Option value={""}>
                    Select Budget
                  </Option>
                  {serviceData.budget.map(({ id, title }) => (
                    <Option key={id} value={title}>
                      {title}
                    </Option>
                  ))}
                </SelectInput>
              </div>

              <div className="input-wrapper">
                <SelectInput
                  onChange={(e) =>
                    setState({ ...state, service: e.target.value })
                  }
                >
                  <Option value="">
                    Select Service
                  </Option>
                  {serviceData.service.map(({ id, name }) => (
                    <Option key={id}>{name}</Option>
                  ))}
                </SelectInput>
              </div>
              <Button type="submit">
                Submit
              </Button>
            </FormContainer>
          </Form>
        </RightSide>
      </Container>
    </Wrapper>
  );
};

export default Header;
