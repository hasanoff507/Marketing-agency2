import styled from "styled-components";

export const Wrapper = styled.div`
  height: 85vh;
  width: 100%;
  position: relative;
  @media screen and (max-width: 1400px) {
    height: 110vh;
    padding-bottom: 50px;
  }

  @media screen and (max-width: 1100px) {
    height: fit-content;
    padding-bottom: 50px;
  }

  @media screen and (max-width: 600px) {
    height: 100vh;
    padding-bottom: 50px;
    background-size: contain;
  }
`;
export const HeaderVideo = styled.video`
  object-fit: cover;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1));
  top: 0;
  left: 0;
  position: absolute;
  z-index: -1;
  filter: blur(0.5px);
`;
export const Container = styled.div`
  height: 100%;
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  padding-top: 80px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  @media screen and (min-width: 1600px) {
    width: 70%;
  }
  @media screen and (max-width: 1100px) {
    flex-direction: column;
  }

  @media screen and (max-width: 800px) {
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 100px;
  }
  @media screen and (max-width: 600px) {
    height: fit-content;
    font-size: 20px;
    padding-top: 0px;
    width: 100%;
    height: 100%;
    margin: auto;
  }
`;

export const LeftSide = styled.div`
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;
export const RightSide = styled.div`
  height: 100%;
  padding-top: 140px;
  @media screen and (max-width: 800px) {
    width: 100%;
  }
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const Title = styled.div`
  font-optical-sizing: auto;
  font-style: normal;
  font-size: 38px;
  color: #fff;
  font-weight: 700;
  width: 100%;
  margin: auto;
  margin-top: 150px;
  line-height: 140%;
  text-transform: uppercase;
  @media screen and (max-width: 1500px) {
    font-size: 40px;
  }
  @media screen and (max-width: 800px) {
    font-size: 45px;
    width: 100%;
  }
  @media screen and (max-height: 900px) {
    font-size: 32px;
  }
  @media screen and (max-width: 700px) {
    font-size: 17px;
    font-weight: 700;
    line-height: 141%;
    width: 85%;
    margin-top: 0;
  }
  span {
    color: #fff !important;
    font-family: "Roboto" !important;
  }
  .under-title {
    font-family: "Roboto" !important;
  }
`;
export const Subtitle = styled.p`
  font-family: GothemMedium, sans-serif !important;
  font-optical-sizing: auto;
  font-style: normal;
  font-size: 28px;
  color: #fff;
  font-weight: 500;
  width: 100%;
  margin: auto;
  line-height: 45px;
  margin-top: 30px;

  @media screen and (max-width: 800px) {
    font-size: 26px;
    width: 100%;
  }
  @media screen and (max-width: 500px) {
    font-size: 18.5px;
    font-weight: 400;
    line-height: 25px;
    width: 85%;
    margin-top: 15px;
  }
  span {
    font-family: "Roboto" !important;
  }
  .under-title {
    font-family: "Roboto" !important;
  }
`;

export const Form = styled.form`
  width: 360px;
  padding: 5px 0;
  border-radius: 11px;
  margin: auto;
  font-size: 16px;
  font-family: Mozerati, sans-serif !important;
  background-color: rgba(2, 54, 147, 0.89);

  @media screen and (max-width: 1400px) {
    width: 340px;
  }
  @media screen and (max-width: 800px) {
    width: 100%;
  }
  p {
    color: #fff;
    font-size: 14px;
    font-weight: 500;
    padding-left: 5px;
  }
`;
export const FormContainer = styled.div`
  width: 90%;
  height: 100%;
  margin: auto;
  margin-bottom: 15px;
  padding:5px;
  border-radius: 5px;
  
  .input-wrapper {
    width: 90%;
    margin: 0 auto;
    position: relative !important;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .input-number {
      color: #fff;
      width: 90%;
      margin: 7px auto;
      border: none;
      border-radius: 0;
      padding: 11px 12px;
      background-color: transparent;
      border-bottom: 1px solid gray;
      &::placeholder {
        color: #fff;
        font-size: 15px;
      }

      &:focus {
        outline: none;
        /* outline: 1px solid #0080ff; */
      }
    }
  }
`;
export const FormTitle = styled.div`
  font-size: 25px;
  color: #fff;
  font-weight: 700;
  font-family: Mozerati, sans-serif;
  text-align: center;
  margin: 20px 0;
`;

export const Input = styled.input`
  color: #fff;
  width: 90%;
  margin: 7px auto;
  border: 0;
  border-radius: 0;
  padding: 11px 12px;
  /* background-color: rgb(42, 83, 162); */
  /* -webkit-text-fill-color: #fff; */
  border: none;
  background-color: transparent;
  border-bottom: 1px solid gray;
  
 
  &::placeholder {
    color: #fff;
    font-size: 15px;
  }

  &:focus {
    outline: 1px solid #0080ff;
  }
`;
export const SelectInput = styled.select`
  color: #fff;
  background-color: rgb(42, 83, 162);
  border: 0px;
  height: fit-content;
  width: 100%;
  padding: 11px 10px;
  border-radius: 0;
  cursor: pointer;
  line-height: 70px;
  margin: 10px auto;
  font-size: 15px;
  font-weight: 500;
  -webkit-text-fill-color: #fff;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid gray;

  @media screen and (max-width: 1500px) {
    width: 98%;
  }
  @media screen and (max-width: 800px) {
    width: 98%;
    margin: 7px auto;
  }
  &::placeholder {
    color: #afafaf;
    font-size: 15px;
  }
  &:focus {
    outline: 1px solid #0080ff;
  }
`;
export const Option = styled.option`
  cursor: pointer;
  font-size: 16px;
  -webkit-text-fill-color: #fff;
  background-color: rgba(2, 54, 147, 0.89);
  &:nth-child(1){
    display: none;
  }
`;

export const Button = styled.button`
  //background-color: ;
  padding: 11px 30px;
  border: unset;
  border-radius: 20px;
  color: #fff;
  z-index: 1;
  background: #0080ff;
  position: relative;
  font-weight: 600;
  font-size: 17px;
  -webkit-box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
  box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
  overflow: hidden;
  display: block;
  margin: 10px auto;
  transition: all 450ms;
  letter-spacing: 0.5px;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background: rgb(0, 89, 255);
    //background-color: #222222;
    background-color: #0dc569;

    width: 0;
    border-radius: 15px;
    z-index: -1;
    -webkit-box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
    box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
    transition: all 450ms;
  }

  &:hover {
    cursor: pointer;
  }

  &:hover::before {
    width: 100%;
  }
`;
export const MobileBtn = styled.div`
  display: none;
  @media only screen and (max-width: 600px) {
    display: block;
    color: #000;
    font-weight: 500;
    width: fit-content;
    background-color: #fff;
    border-radius: 3px;
    font-size: 16px;
    padding: 11px 40px;
    margin-top: 27px;
    margin-left: 30px;
  }
`;
