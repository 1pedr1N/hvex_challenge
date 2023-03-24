import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #1b2033;

  width: 100%;
  margin-top: 100px;
  height: 80vh;
`;
export const Container2 = styled.div`
  display: flex;
  flex-direction: column;

  align-items: initial;
  padding-left: 200px;
  width: 40%;
`;
export const Title = styled.h1`
  font-size: 32px;

  font-weight: 700;
  color: white;
  margin-top: 200px;

  @media (max-width: 1300px) {
    font-size: 30px;
  }
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;
export const Subtitle = styled.h2`
  font-size: 32px;

  font-weight: 700;
  color: #52e0ff;
  @media (max-width: 1300px) {
    font-size: 30px;
    max-width: 530px;
  }
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;
export const Desc = styled.p`
  font-size: 20px;

  font-weight: 400;
  color: white;

  @media (max-width: 1300px) {
    font-size: 16px;
    max-width: 530px;
  }
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  width: 50%;
  margin-top: 50px;
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
export const Container3 = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
