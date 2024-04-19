import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;

  @media screen and (max-width: 1100px) {
    height: 130vh;
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
  padding-top: 160px;
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
  font-size: 56px;
  color: #fff;
  font-weight: 700;
  width: 90%;
  margin: auto;
  margin-top: 140px;
  @media screen and (max-width: 1500px) {
    font-size: 40px;
  }
  @media screen and (max-width: 800px) {
    font-size: 45px;
    width: 100%;
  }
  @media screen and (max-width: 500px) {
    font-size: 27.5px;
    font-weight: 700;
    line-height: 30px;
    width: 85%;
    margin-top: 0;
  }
  span {
    color: #0080ff;
  }
`;

export const Form = styled.form`
  width: 400px;
  background-color: rgba(2, 54, 147, 0.89);
  padding: 15px 0;
  border-radius: 20px;
  margin: auto;
  font-size: 16px;
  font-family: Mozerati, sans-serif !important;
  font-weight: 500 !important;

  p {
    color: #fff;
    font-size: 14px;
    font-weight: 600;
    padding-left: 5px;
  }

  @media screen and (max-width: 1400px) {
    width: 350px;
  }
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;
export const FormContainer = styled.div`
  width: 80%;
  margin: auto;


  .input-numb {
    color: #fff !important;
    width: 295px;
    margin: 10px 0;
    border: 0;
    border-radius: 6px;
    padding: 11px 12px;
    background-color: rgb(42, 83, 162);
    @media screen and (max-width: 1500px) {
      width: 250px;
      padding-left: 10px;
    }
    @media screen and (max-width: 800px) {
      width: 90%;
      margin: 7px auto;
    }

    &::placeholder {
      color: #fff;
      font-size: 15px;
    }

    &:focus {
      outline: 1px solid #0080ff;
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
  color: #fff !important;
  width: 295px;
  margin: 7px 0;
  border: 0;
  border-radius: 5px;
  padding: 11px 12px;
  background-color: rgb(42, 83, 162);
  -webkit-text-fill-color:#fff;
  @media screen and (max-width: 1500px) {
    width: 250px;
  }
  @media screen and (max-width: 800px) {
    width: 100%;
    width: 90%;
    margin: 7px auto;
  }
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
  margin-bottom: 10px;
  border: 0px;
  height: fit-content;
  width: 100%;
  padding: 11px 12px;
  border-radius: 5px;
  margin-top: 10px;
  cursor: pointer;
  line-height: 70px;
  font-size: 15px;
  font-weight: 500;
  -webkit-text-fill-color:#fff;

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
  -webkit-text-fill-color:#fff;

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
    font-weight: 600;
    width: fit-content;
    background-color: #fff;
    border-radius: 30px;
    font-size: 20px;
    padding: 10px 55px;
    margin-top: 27px;
    margin-left: 30px;
  }
`;
