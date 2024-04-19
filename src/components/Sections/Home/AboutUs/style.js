import styled from "styled-components";

export const Wrapper = styled.div`
  height: fit-content;
  width: 100%;
  padding: 100px 0;
  padding-top: 140px;
  @media screen and (max-width: 700px){
    padding:80px 0;
    margin: 0;
  }
  
`;
export const  Container= styled.div`
  width: 80%;
  margin: auto;
  @media screen and (min-width: 1600px){
    width: 75%;
  }
  @media screen and (max-width: 800px){
    width: 90%;
  }
`;
export const  Title= styled.div`
    padding-bottom: 30px;
  @media screen and (max-width: 700px){
    padding-bottom: 20px;
    font-size: 14px;
  }
  .subtitle{
    width: 60%;
    margin: auto;
    text-align: center;
    padding-top: 30px;
    font-weight: 500;
    line-height: 22px;
    @media screen and (max-width: 600px){
      width: 90%;
      font-size: 14px;
      font-weight: 500;
      margin: auto;
      padding-top: 15px;
      display: none;
    }
  }
`;
export const  Row= styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 50px 0;
  @media screen and (max-width: 700px){
    flex-direction: column;
    justify-content: center;
    margin: 10px 0;
  }
`;

export const  Box= styled.div`
text-align: center;
    .box-title{
      margin: 10px auto;
      font-weight: 700;
      @media screen and (max-width:1200px){
        font-size: 14px;
      }
    }
    .box-text{
      font-size: 16px;
      font-weight: 500;
      margin: 10px auto;
      width: 75%;
      @media screen and (max-width:1200px){
        width: 80%;
      }
    }
`;
export const  SvgContainer= styled.div`
  height: 90px;
  width: fit-content;
  margin: 25px auto;
  
  @media screen and (max-width:1200px){
    height: 80px;
  }
  svg{
    height: 100%;
    width: fit-content;
  }
`;
