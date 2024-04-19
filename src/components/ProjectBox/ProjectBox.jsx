import React from "react";
import styled from "styled-components";

export default function ProjectBox({ img, title, text, action,link}) {
  return (
    <Wrapper>
      <ImgBtn href={link}  target="_blank"  className="aniamte pointer" >
      <img className="radius8" src={img}  alt="Portfolio Item"/>
      </ImgBtn>
      <h3 className="font20 extraBold" >{title}</h3>
      <p className="font13">{text}</p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  margin-top: 40px;
  h3 {
    margin-top: 20px;
    margin-bottom: 5px;
  }
  p{
    color: #000;
    font-size: 15px;
    font-weight: 500;
    @media screen and (max-width:600px){
      width: 100%;
      font-size: 15px;
      font-weight: 600;
    }
  }
`;
const ImgBtn = styled.a`
  background-color: transparent;
  border: 0px;
  outline: none;
  padding: 0;
  margin: 20px 0;
  overflow: hidden;
  @media only screen and (max-width: 1100px) {
    height: fit-content;
  }
  img{
    height: 100%;
    width: 100%;
    -webkit-box-shadow: -2px 0px 38px -3px rgba(71, 71, 71, 0.37);
-moz-box-shadow: -2px 0px 38px -3px rgba(71, 71, 71, 0.37);
box-shadow: -2px 0px 38px -3px rgba(71, 71, 71, 0.37);
 
  }
  &:hover > img {
    opacity: 0.5;
  }
`;