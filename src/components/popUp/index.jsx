import React, { useState,useEffect } from "react";
import "toastify-js/src/toastify.css"
import {ReactComponent as ExitSvg}from '../../assets/main/red-icon.svg';
import {Button, Form, FormContainer, FormTitle, Option, SelectInput} from "./styles";
import {Cover, Input, PopUpWrapper} from "./styles";
import { HttpRequest } from "../../hooks/httpRequest";
import { serviceData } from "../../Constants/serviceType";
import  {useNavigate} from "react-router-dom";
import {PatternFormat} from 'react-number-format';
const PopUp = ({setPopUp,popUp}) => {

    const [state, setState] = useState({
        name: "",
        number:"",
        email:"",
        service:"Google Ads"
      });
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

     const navigate = useNavigate()

      const handleSubmit = (e) => {
          e.preventDefault();
          setFormErrors(validate(state,e));
          setIsSubmit(true);

          }

    useEffect(() => {
        
    }, [formErrors]);

    const validate = (values,e) => {
        const currentNumber = values.number.replace(/\D/g, '');
        const errors = {};
        if (!values.name) {
            errors.name = "Name required!";
        } else if (values.name.length < 4){
            errors.name = "The name must contain at least 4 characters!";
        }
        else if (values.number.length == "") {
            errors.number = "Phone Number required";
        }
        else if (currentNumber.length < 12) {
            errors.number = "The phone number must consist of at least 12 characters!";
        } else {
            HttpRequest(
                {
                    e,state,setState
                }
            )
                .then(()=> {
                    navigate('/success')
                    console.log(('Request sent successfully'))
                })
                .catch((err)=> {
                    console.log(err)
                })
        }


        return errors;
    };

    return(
        <PopUpWrapper>
            <Cover onClick={() => setPopUp(false)}/>
            <Form autoComplete="on" autoSave="on" onSubmit={handleSubmit}>
                <div className="exit-button" onClick={()=>setPopUp(false)}>
                    <ExitSvg/>
                </div>
                <FormContainer>
                    <FormTitle>
                        Contact with Us
                    </FormTitle>
                    <p style={formErrors.name ? { color: 'red' } :{ color: 'black' } }>{formErrors.name ? formErrors.name : "Name"}</p>
                    <Input className={"numb"}
                           value={state.name}
                           type={"Name"}
                           placeholder={"Name"}
                           maxLength={30}
                           onChange={(e) => setState({ ...state, name: e.target.value.trim() })}
                    />
                    <p style={formErrors.number ? { color: 'red' } :{ color: 'black' } }>{formErrors.number ? formErrors.number : "Phone Number"}</p>
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

                    <p>Сервис</p>

                    <SelectInput
                        onChange={(e) =>
                            setState({ ...state, service: e.target.value })
                        }
                    >
                        {serviceData.map(({id,name}) => (
                            <Option key={id} value={`${name}`}>
                                {name}
                            </Option>
                        ))}
                    </SelectInput>

                </FormContainer>
                <Button > Send </Button>
            </Form>
        </PopUpWrapper>
    )
}
export default PopUp