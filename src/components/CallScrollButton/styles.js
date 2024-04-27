import styled from "styled-components";
export const Wrapper = styled.div`
position: fixed;
bottom: 30px;
right: 20px;
width: 40px;
height: 80px;
display: none;
z-index: 999999999 !important;
@media screen and (max-width:700px) {
    display: block;
    width: fit-content;
}
.call-wrapper{
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    justify-content: space-between;
    .call-svg{
        height: 60px;
        width: 60px;
        background-color: #00bb00;
        border-radius: 50%;
        padding: 15px;

        svg{
            height: 100%;
            width: 100%;
            fill: #fff !important;
        }
    }
    .numb {
        background-color: #00bb00;
        padding: 12px 30px;
        border-radius: 30px;
        font-size:25px;
        font-weight: 800 !important;
        margin-right: 20px;

    }
}
`;