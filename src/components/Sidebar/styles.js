import styled from "styled-components";
export const Wrapper = styled.div`
  background-color: #0080ff;
  color: #fff !important;
  transition: 0.3s ease;
  height: 100%;
  width: 100%;
  @media (max-width: 400px) {
    width: 100%;
  }
 .sidebar-logo{
   height: 45px;
   width: fit-content;
   
   svg{
     height: 100%;
     width: 100%;
     g{
       fill: #222;
     }
   }
   @media (max-width: 600px) {
     margin-right: auto;
     width: 100px;
     
  }
 }
  @media (max-width: 400px) {
    width: 100%;
  }
`;
export const SidebarHeader = styled.div`
width: 90%;
margin: auto;
display: flex;
align-items: center;
justify-content: space-between;
  padding: 10px 0;
`;

export const CloseBtn = styled.button`
  border: 0px;
  outline: none;
  background-color: transparent;
  padding: 15px;
`;

export const UlStyle = styled.ul`
  padding: 40px;
  li {
    margin: 20px 0;
    font-weight: 700 !important;
    font-size: 20px;
    @media only screen and (max-width:600px) {
      font-size: 18px;
      font-weight: 600;
    }
  }
`;
