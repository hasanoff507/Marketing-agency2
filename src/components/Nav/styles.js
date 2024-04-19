import styled from "styled-components";

export const Wrapper = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999999;
  @media screen and (min-width: 1600px) {
    height: 90px !important;
  }
  @media screen and (max-width: 500px) {
    height: fit-content;
    height: 70px;
  }

  .sidebar-button {
    display: none;
    @media only screen and (max-width: 600px) {
      display: block;
    }
  }

`;
export const NavInner = styled.div`
  position: relative;
  height: 100%;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
   @media screen and (min-width: 1600px){
    width: 73%;
    margin: auto;
    }
  @media screen and (max-width: 1600px){
    width: 90%;
    margin: auto;
  }

  .nav-logo{
    height: 55px;
    width: fit-content;
    @media screen and (max-width: 800px){
      height: 50px;
      width: 100px;
    }
    svg{
      height: 100%;
      width: 100%;
    }
  }
  
`

export const UlWrapper = styled.ul`
  display: flex;
  li{
    font-size: 16px;
    
  }
  
  @media (max-width: 760px) {
    display: none;
  }
`;
export const Drawer = styled.div`
height: 100%;
width: 100%;
right: ${({ open }) => (!open ? "-100vw" : "0")};
position: fixed;
top: 0;
z-index: 99999999999999;
`;


export const Button = styled.div`
  width: 40px;
  display: none;
  @media (max-width: 760px) {
    display: block;
    border: none;
  }
`;
export const NavbarButton = styled.div`

  //background-color: ;
  padding: 11px 30px;
  border: unset;
  border-radius: 20px;
  color: #000;
  z-index: 1;
  background: #fff;
  position: relative;
  font-weight: 600;
  font-size: 17px;
  -webkit-box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
  box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
  overflow: hidden;
  transition: all 450ms;
  letter-spacing: .5px;
  @media screen and (min-width: 1000px) {
   display: none;
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
  a{
    color: #fff ;
  }
  &:hover {
    background-color: #49CB86;
  }
  @media screen and (max-width: 800px){
    
  }
  @media screen and (max-width: 800px){
    display: none;
  }
`;