import styled from "styled-components";
export const Wrapper = styled.div`
  height: fit-content;
  width: 100%;
  background-color: #ffffff;;
  padding-top: 150px;

  @media screen and (max-width: 900px) {
    height: fit-content;
  }
  @media screen and (max-width: 600px) {
    padding-top: 80px;
  }
`;
export const Container = styled.div`
  height: 100%;
  width: 80%;
  margin: auto;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 800px){
    width: 90%;
  }
  h1{
    text-align: center;
    @media (max-width: 600px) {
      width: 90%;
      margin: auto;
    }
  }
  .subtitle{
    width: 80%;
    margin: auto;
    padding:15px 0;
    font-size: 16px;
    font-weight: 500;
    line-height: 22px;

    text-align: center;
    @media (max-width: 860px) {
      width: 90%;
    }
    @media (max-width: 600px) {
      width: 90%;
      font-size: 14px;
      font-weight: 500;
      display: none;
    }
  }
`;
export const ServiceWrapper =styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  @media screen and (max-width: 1600px) {
    flex-wrap: wrap;
    justify-content: center;
  }
  @media screen and (max-width: 600px) {
    padding-bottom: 80px;
  }
`;
export const Title =styled.div`
    font-size: 56px;
  font-weight: 800;
  text-align: center;
  padding-top: 120px;
  @media screen and (min-width: 1600px){
    font-size: 56px;
  }
  @media screen and (max-width: 1200px){
    font-size: 50px;
  }
  @media screen and (max-width: 900px){
    font-size: 36px;
  }
  @media screen and (max-width: 700px){
    font-size: 28px;
  }
  span{
color: #0080ff;    
  }
  &::selection {
    background: transparent;
    color: #0080ff;
  }
`;
export const ServiceBox =styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  padding: 40px 0;
  border-radius: 5px;
  width: 30%;
  @media screen and (max-width: 700px) {
    width: 80%;
    margin-top: 0px;
  }
  align-items: center;

  .svg-wrapper {
    height: 90px;
    width: fit-content;
    @media screen and (max-width:1200px){
      height: 80px;
    }
    svg{
      height: 100%;
      width: fit-content;
    }
  }

  .title {
    font-size: 22px;
    font-weight: 700;
    padding-top: 20px;
    @media screen and (max-width:1200px){
      font-size: 22px;
      text-align: center;
    }
    @media screen and (max-width:900px){
      font-size: 19px;
      font-weight: 600;
    }
  }
  .text {
    width: 80%;
    margin: auto;
    font-size: 16px;
    font-weight: 500;
    text-align: center;
    padding-top: 10px;
    @media screen and (max-width:600px){
      width: 100%;
      font-size: 15px;
      font-weight: 600;
    }

  }
`;
export const Button = styled.div`
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
  letter-spacing: .5px;
  @media only screen and (max-width: 600px) {
    margin: 20px auto;
    margin-bottom: 30px;
    font-size: 16px;
  }

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
 
  &:hover{
    background-color: #49CB86;
  }
`;