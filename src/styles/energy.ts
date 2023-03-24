import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 100px;
`;
export const Container2 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 60%;
  img {
    width: 60%;
  }
`;
export const TextDiv = styled.div`
  display: flex;
  align-items: initial;
  justify-content: initial;
  flex-direction: column;

  width: 50%;
  margin-left: 50px;
`;
export const Title = styled.h1`
  font-size: 32px;
  font-family: "Inter";
  font-weight: 700;
  color: #115678;

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
  color: #373737;
  width: 110%;
  @media (max-width: 1300px) {
    font-size: 15px;
  }
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
export const Topic = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 100%;
  margin-top: 20px;
  img {
    width: 30px;
    margin-right: 10px;
  }
`;
export const TopicText = styled.h3`
  font-size: 20px;
  font-family: "Inter";
  font-weight: 600;
  color: #373737;
  width: 100%;

  @media (max-width: 1300px) {
    font-size: 15px;
  }
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
