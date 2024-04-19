import styled from "styled-components";
export const Wrapper = styled.div`
width: 100%;
height: 100%;
position: fixed;
z-index: 99999999999;
top: 0;
left: 0;
background-color: #fff;
.ancor{
  color:#0080ff;
}

p{
    font-size: 18px;
    font-weight: 600;
    line-height: 24px;
    width: 90%;
    margin: 10px auto;
    @media only screen and (max-width: 600px) {
    width: 100%;
    font-size: 16px;
    text-align: center;
    padding: 10px 0;
}

}
`;
export const Container = styled.div`
width: 100%;
height: 100%;
position: relative;
backdrop-filter: blur(12px);
display: flex;
align-items: center;
justify-content: center;

`;
export const Box = styled.div`
height: fit-content;
width: 50%;
background-color: #fff;
border-radius: 14px;
padding: 20px ;
position: relative;
@media only screen and (max-width: 600px) {
    width: 90%;
    margin: auto;
    height: fit-content;
}
`;
export const Title = styled.div`
 font-size: 24px;
 font-weight: 700;
 text-align: center;
 margin: 20px 0;
 @media only screen and (max-width: 600px) {
 font-size: 18px;

}

`;
export const Icon = styled.div`
 width: 100%;
 margin: 20px auto;
 display: flex;
 justify-content: center;
 

`;

export const Button = styled.div`
background-color: #0080ff;
  padding: 10px 47px;
  border-radius: 30px;
  border: 0;
  width: fit-content;
  color: #fff;
  margin: 10px auto;
  margin-top: 15px;
  cursor: pointer;
  display: block;
  font-size: 16px;
  font-weight: 600;
  margin: 30px auto;

  &:hover {
    background-color: #49cb86;
  }

`;