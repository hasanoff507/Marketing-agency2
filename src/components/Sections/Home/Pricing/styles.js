import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
  padding: 50px 30px;
  @media screen and (max-width: 600px){
    padding-top: 0;
    padding: 0;
    padding-bottom: 50px;
  }
  @media screen and (max-width: 1200px){
    height: 100%;
  }
`;
export const Container = styled.div`
  width: 80%;
  height: fit-content;
  margin: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  @media screen and (min-width: 1600px){
    width:70%;
  }
  @media screen and (max-width: 1400px){
    width: 90%;
  }
  @media screen and (max-width: 1200px){
    height: 100%;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  
  @media screen and (max-width: 800px){
    width: 80%;
    flex-wrap: wrap;
    justify-content: center;
  }
`;
export const HeaderInfo = styled.div`
  margin: 80px 0;
  text-align: center;
  
  @media screen and (max-width: 800px){
    margin: 30px 0;
    margin-top: 0;
    
  }
  @media screen and (max-width: 500px){
    width: 90%;
    margin: 30px auto;
    margin-top: 0px;

  }
  
  h1{
   
    
  }
  .subtitle{
    width: 50%;
    margin: auto;
    padding:15px 0;
    font-size: 16px;
    font-weight: 500;
    line-height: 22px;
    @media (max-width: 600px) {
      width: 90%;
      display: none;
      
    }
  }
  @media (max-width: 860px) {
    text-align: center;
  }
`;
export const TablesWrapper = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
export const TableBox = styled.div`
  width: 31%;
  border-radius: 35px;
  box-shadow:  9px 9px 18px #b5b5b5,
    -9px -9px 18px #ffffff;
  @media (max-width: 860px) {
    width: 100%;
    max-width: 370px;
    margin: 0 auto
  }
`;
