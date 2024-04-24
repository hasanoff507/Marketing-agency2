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
    company: "",
    email: "",
    service: "Google Ads",
    budget: "Стандартный - 6 000 000 сум",
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
      errors.name = <Text id={"homeFormAlertTitle1"} />;
    } else if (values.name.length == 0 && values.name.length < 2) {
      errors.name = <Text id={"homeFormAlertTitle3"} />;
    }

    // company check out
    else if (values.company.length == 0) {
      errors.company = <Text id={"homeFormAlertTitle12"} />;
    } else if (values.company.length < 4) {
      errors.company = <Text id={"homeFormAlertTitle13"} />;
    }

    // number checking
    else if (values.number.length == "") {
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

          <p style={formErrors.name ? { color: "red" } : { color: "#222" }}>
            {formErrors.name ? (
              formErrors.name
            ) : (
              <Text id={"homeHeaderInputTitle"} />
            )}
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

          <p style={formErrors.company ? { color: "red" } : { color: "#222" }}>
            {formErrors.company ? (
              formErrors.company
            ) : (
              <Text id={"homeHeaderInputTitle4"} />
            )}
          </p>
          <Input
            className={"numb"}
            value={state.company}
            type={"Name"}
            placeholder={Text({ id: "homeHeaderInputTitle4" })}
            maxLength={30}
            onChange={(e) =>
              setState({ ...state, company: e.target.value.trim() })
            }
          />
          <p style={formErrors.number ? { color: "red" } : { color: "black" }}>
            {formErrors.number ? (
              formErrors.number
            ) : (
              <Text id="homeHeaderInputTitle1" />
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
            <Text id={"homeHeaderInputTitle5"} />
          </p>
          <SelectInput
            onChange={(e) => setState({ ...state, budget: e.target.value })}
          >
            {serviceData.budget.map(({ id, title }) => (
              <Option key={id} defaultValue={`${title}`}>
                {title}
              </Option>
            ))}
          </SelectInput>

          <p>
            <Text id={"homeHeaderInputTitle3"} />
          </p>

          <SelectInput
            onChange={(e) => setState({ ...state, service: e.target.value })}
          >
            {serviceData.service.map(({ id, name }) => (
              <Option key={id} defaultValue={`${name}`}>
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
