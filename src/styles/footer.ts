import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: #1c2c44;
  width: 100%;
  height: 20vh;
  margin-top: 30px;
`;
export const Collumn = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
`;
export const SubTitle = styled.h2`
  color: #52e0ff;
  font-size: 20px;
  font-weight: 700;
`;
export const Address = styled.p`
  color: #ffffff;
  font-size: 16px;
  font-weight: 400;
  max-width: 223px;
`;
export const ContactText = styled.p`
  color: #ffffff;
  font-size: 16px;
  font-weight: 400;
  margin-top: 10px;
`;
export const SocialMedia = styled.div`
  display: flex;
  align-items: center;
  img {
    margin: 15px;
    cursor: pointer;
  }
`;
