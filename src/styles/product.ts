import styled from "styled-components";
import BackgroundIMG from "../assets/background.png";
export const Background = styled.div`
  background: url(${BackgroundIMG});
  background-size: cover;
  color: white;
  background-repeat: no-repeat;
  background-position: center;
  height: 60vh;
  display: flex;
  flex-direction: column;
  padding-left: 10%;
  padding-top: 10%;
  @media (max-width: 768px) {
    height: 100%;
  }
`;
export const Title = styled.h1`
  font-size: 48px;
  font-family: "Inter";
  font-weight: 700;

  max-width: 68%;
  @media (max-width: 1300px) {
    font-size: 30px;
  }
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;
export const Subtitle = styled.h2`
  font-size: 20px;
  font-family: "Inter";
  font-weight: 400;
  max-width: 68%;

  @media (max-width: 1300px) {
    font-size: 15px;
  }
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
export const Button = styled.button`
  background-color: #00b6de;
  border: none;
  border-radius: 5px;
  padding: 10px;
  font-size: 1rem;
  font-family: "Inter";
  color: white;
  width: 30%;
  height: 50px;
  margin-top: 100px;
  :hover {
    cursor: pointer;
    background-color: #252835;
    color: white;

    transform: scale(1.1);
    transition: 0.3s;
  }

  @media (max-width: 1300px) {
    margin-top: 30px;
  }
  @media (max-width: 768px) {
    margin-bottom: 50px;
    font-size: 10px;
  }
`;
export const WhatsApp = styled.div`
  position: fixed;
  bottom: 220px;
  right: 50px;
  margin: 20px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #00b6de;
  border-radius: 50%;
  color: white;
  font-size: 2rem;
  :hover {
    cursor: pointer;
    background-color: #252835;
    color: white;
    transform: scale(1.1);
    transition: 0.3s;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
