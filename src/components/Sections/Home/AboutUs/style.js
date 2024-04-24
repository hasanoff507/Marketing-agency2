import styled from "styled-components";

export const Wrapper = styled.div`
  height: fit-content;
  width: 100%;
  @media screen and (max-width: 700px) {
    padding: 80px 0;
    margin: 0;
  }
`;

export const Title = styled.div`
  padding:100px;
  @media screen and (max-width: 700px) {
    padding-bottom: 20px;
    margin: auto;
    font-size: 14px;
    padding: 20px 0;
  }
  .subtitle {
    width: 60%;
    margin: auto;
    text-align: center;
    padding-top: 30px;
    font-weight: 500;
    line-height: 22px;
    @media screen and (max-width: 600px) {
      width: 90%;
      font-size: 14px;
      font-weight: 500;
      margin: auto;
      padding-top: 15px;
      display: none;
    }
  }
`;

export const Container = styled.div`
  width: 80%;
  margin: auto;
  @media screen and (min-width: 1600px) {
    width: 75%;
  }
  @media screen and (max-width: 800px) {
    width: 90%;
  }
`;

export const InternalWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.036);
  @media screen and (max-width: 1200px) {
    flex-direction: column;
  }
`;

export const Content = styled.div`
  width: 45%;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: left;
  @media screen and (max-width: 1200px) {
    width: 100%;
    margin: auto;
    justify-content: center;
  }
  @media screen and (max-width: 700px) {
    width: 90%;
    margin: auto;
    justify-content: center;
    height: fit-content;
    padding: 20px 5px;
  }
  .img-wrapper {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: right;
    img {
      height: 65%;
      width: 80%;
      border-radius: 5px;
      @media screen and (max-width: 700px) {
        width: 100%;
        height: 40%;
        margin: auto;
        justify-content: center;
      }
    }
  }
  .text-box {
    width: 80%;
    margin: auto;
    @media screen and (max-width: 700px) {
      width: 100%;
      margin: auto;
      justify-content: center;
    }
    .title {
      font-size: 35px;
      @media screen and (max-width: 700px) {
        font-size: 20px;
      }
    }
    .subtitle {
      font-size: 16px;
      margin-top: 30px;
      line-height: 140%;
      font-style: normal;
    }
  }
  .text {
    font-size: 16px;
    font-weight: 400;
    margin-top: 25px;
    line-height: 140%;
  }
  .statistic-wrapper {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px 0;
    .box {
      width: fit-content;
      .box-title {
        font-size: 32px;
        @media screen and (max-width: 700px) {
          font-size: 20px;
        }
      }
    }

    .box-number {
      font-size: 20px;
      margin-top: 10px;
      @media screen and (max-width: 700px) {
        font-size: 15px;
        font-weight: 500;
      }
    }
  }
`;
