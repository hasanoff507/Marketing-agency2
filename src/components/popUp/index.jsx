import React, { useState, useEffect } from "react";
import "toastify-js/src/toastify.css";
import { ReactComponent as ExitSvg } from "../../assets/main/red-icon.svg";
import {
  Button,
  Form,
  FormContainer,
  FormTitle,
  Option,
  SelectInput,
} from "./styles";
import { Cover, Input, PopUpWrapper } from "./styles";
import { HttpRequest } from "../../hooks/httpRequest";
import { serviceData } from "../../Constants/serviceType";
import { useNavigate } from "react-router-dom";
import { PatternFormat } from "react-number-format";
import Text from "../../language/langManager";
const PopUp = ({ setPopUp, popUp }) => {
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
    const errors = {};
    if (!values.name) {
      errors.name = <Text id="homeFormAlertTitle1" />;
    } else if (values.name.length < 4) {
      errors.name = <Text id="homeFormAlertTitle3" />;
    } else if (values.number.length == "") {
      errors.number = <Text id="homeFormAlertTitle2" />;
    } else if (currentNumber.length < 12) {
      errors.number = <Text id="homeFormAlertTitle4" />;
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
    <PopUpWrapper>
      <Cover onClick={() => setPopUp(false)} />
      <Form autoComplete="on" autoSave="on" onSubmit={handleSubmit}>
        <div className="exit-button" onClick={() => setPopUp(false)}>
          <ExitSvg />
        </div>
        <FormContainer>
          <FormTitle>
            <Text id="homeHeaderFormTitle" />
          </FormTitle>
          <p style={formErrors.name ? { color: "red" } : { color: "black" }}>
            {formErrors.name ? formErrors.name : "Name"}
          </p>
          <Input
            className={"numb"}
            value={state.name}
            type={"Name"}
            placeholder={Text({ id: "homeHeaderInputTitle" })}
            maxLength={30}
            onChange={(e) =>
              setState({ ...state, name: e.target.value.trim() })
            }
          />
          <p style={formErrors.number ? { color: "red" } : { color: "black" }}>
            {formErrors.number ? formErrors.number : <Text id="homeHeaderInputTitle1"/>}
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
            <Text id={"homeHeaderInputTitle1"}/>
          </p>
          <Input
            className={"numb"}
            type="email"
            placeholder={Text({id:"homeHeaderInputTitle1"})}
            value={state.email}
            onChange={(e) => setState({ ...state, email: e.target.value })}
          />

          <p>
            <Text id={"homeHeaderInputTitle3"}/>
          </p>

          <SelectInput
            onChange={(e) => setState({ ...state, service: e.target.value })}
          >
            {serviceData.map(({ id, name }) => (
              <Option key={id} value={`${name}`}>
                {name}
              </Option>
            ))}
          </SelectInput>
        </FormContainer>
        <Button> Send </Button>
      </Form>
    </PopUpWrapper>
  );
};
export default PopUp;
