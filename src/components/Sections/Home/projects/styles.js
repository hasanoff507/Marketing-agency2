import styled from "styled-components";

export const Wrapper = styled.section`
  width: 90%;
  margin: auto;
  padding-top: 80px;

`;
export const HeaderInfo = styled.div`
  text-align: center;
  padding-bottom: 50px;
  @media (max-width: 600px) {
    padding-bottom: 0;
  }
  .subtitle{
    width: 80%;
    margin: auto;
    padding:15px 0;
    font-size: 16px;
    font-weight: 500;
    line-height: 22px;
    @media (max-width: 600px) {
      font-size: 14px;
      font-weight: 500;
      width: 100%;
      display: none;
    }
  }
`;

export const ImgWrapper = styled.div`
  width: 100%;
  padding: 0 15%;
  img {
    width: 100%;
    height: auto;
  }
  @media (max-width: 400px) {
    padding: 0;
  }
`;
export const Button = styled.div`
 padding: 11px 30px;
 width:fit-content;
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
  margin: 30px auto;
  margin-bottom: 0;
  transition: all 450ms;
  letter-spacing: .5px;
  @media only screen and (max-width: 600px) {
    margin: 20px auto;
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
`;