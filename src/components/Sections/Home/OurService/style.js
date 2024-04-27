import styled from "styled-components";
export const Wrapper = styled.div`
  height: fit-content;
  width: 100%;
  padding-top: 80px;

  @media screen and (max-width: 900px) {
    height: fit-content;
  }
  @media screen and (max-width: 600px) {
    padding: 80px 0;
  }
`;
export const Container = styled.div`
  height: 100%;
  width: 80%;
  margin: auto;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 1200px){
    width: 100%;
  }
 
  @media screen and (max-width: 800px){
    width: 95%;
  }
 
  h1 {
    text-align: center;
    @media screen and (max-width: 600px) {
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
    margin-bottom: 80px;

    text-align: center;
    @media screen and  (max-width: 860px) {
      width: 90%;
    }
    @media screen and (max-width: 700px) {
      width: 90%;
      font-size: 13px;
      font-weight: 500;
      margin-bottom: 20px;
      line-height: 130%;
    }
  
  }
`;
export const ServiceWrapper =styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0.5 solid lightgray;
  @media screen and (max-width: 1600px) {
    flex-wrap: wrap;
    justify-content: center;
  }
  @media screen and (max-width: 600px) {
    padding-bottom: 80px;
    padding: 0;

  }
  .bg-dark{
  /* background-color: #3a589e94; */

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
    font-size: 32px;
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
  padding: 50px 0;
  height: 560px;
  margin: 15px;
  width: 38%;
  overflow: hidden;
  /* background-color: #0080ff88; */
  border-radius: 30px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  align-items: center;
  @media screen and  (max-width: 1350px) {
      height: 600px;
      width: 45%;
    }
   
  @media screen and (max-width: 700px) {
    width: 100%;
    padding: 50px 15px;
    margin-top: 20px;
    padding-bottom: 30px;
    &:hover{
      svg{
        transform: scale(1) !important;
      }
    }
    .google-svg{
      transform: scale(1.3);
    }
  }

  &:hover{
      svg{
        transform: scale(1.4);
      }
    }
    
  .svg-wrapper {
    height: 160px;
    width: 250px;
    @media screen and (max-width:1200px){
      height: 150px;
      width: 230px;
    }
    
    svg{
      height: 100%;
      width: 100%;
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
    @media screen and (max-width:700px){
      width: 100%;
      font-size: 14px;
      font-weight: 500
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
  margin: 20px auto;
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