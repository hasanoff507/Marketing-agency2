import styled from "styled-components";
export const PopUpWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  backdrop-filter: blur(8px);
  background-color: rgba(0, 128, 255, 0.07);
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999999;
`;
export const Cover = styled.div`
  height: 100vh;
  width: 100%;
  backdrop-filter: blur(5px);
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
`;

export const Form = styled.form`
  width: 400px;
  background-color: #fff;
  padding: 15px 0;
  border-radius: 5px;
  margin: auto;
  font-size: 16px;
  font-family: Mozerati, sans-serif !important;
  font-weight: 500 !important;
  position: relative;
  p{
    font-size: 14px;
    font-weight: 600;
  }
  @media screen and (max-width: 800px) {
    width: 90%;
    .exit-button {
      height: 40px;
      width: fit-content;
      cursor: pointer;
      margin-left: 73vw;
      margin-right: 10px;
      svg {
        height: 100%;
        width: 100%;
      }
    }
  }
  .exit-button {
    height: 30px;
    width: 40px;
    cursor: pointer;
    margin-right: 10px;
    margin-left: auto;
    svg {
      height: 100%;
      width: 100%;
    }
  }
`;
export const FormContainer = styled.div`
  width: 80%;
  margin: auto;

  .input-numb {
    width: 295px;
    margin: 10px 0;
    border: 1px solid #b9b9b9;
    border-radius: 6px;
    padding: 11px 12px;
    -webkit-text-fill-color:#222;
    @media screen and (max-width: 800px) {
      width: 90%;
      margin: 7px auto;
    }

    &::placeholder {
      color: #afafaf;
      font-size: 15px;
    }

    &:focus {
      outline: 1px solid #0080ff;
    }
  }
`;
export const FormTitle = styled.div`
  font-size: 25px;
  font-weight: 700;
  font-family: Mozerati, sans-serif;
  text-align: center;
  margin: 20px 0;
  margin-top: 0;
  @media screen and (max-width: 600px) {
    font-size: 20px;
  }
`;

export const Input = styled.input`
  width: 295px;
  margin: 7px 0;
  border: 0;
  border-radius: 6px;
  border: 1px solid #b9b9b9;
  -webkit-text-fill-color:#222;
  padding: 11px 12px;
  @media screen and (max-width: 800px) {
    width: 100%;
    width: 90%;
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
export const SelectInput = styled.select`
  margin-bottom: 10px;
  border: 1px solid #b9b9b9;
  height: fit-content;
  width: 100%;
  padding: 11px 12px;
  border-radius: 6px;
  margin-top: 10px;
  cursor: pointer;
  line-height: 70px;
  font-size: 15px;
  font-weight: 500;
  -webkit-text-fill-color:#222;

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
    max-width: 98%;
  }
`;
export const Option = styled.option`
  cursor: pointer;
  @media screen and (max-width: 600px) {
    background-color: #0080ff;
    line-height: 30px;
  }
`;

export const Button = styled.button`
  background-color: #0080ff;
  padding: 10px 47px;
  border-radius: 15px;
  border: 0;
  width: fit-content;
  color: #fff;
  margin: 10px auto;
  margin-top: 15px;
  cursor: pointer;
  display: block;
  font-size: 16px;
  font-weight: 600;

  &:hover {
    background-color: #49cb86;
  }
`;
