import styled from "styled-components";

export const DescriptionBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const ImageBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: #1c2c44;
  width: 75px;
  height: 75px;
`;
export const Text = styled.p`
  text-align: center;
  font-size: 14px;
  font-weight: 700;
  margin: 0;
  padding: 0;
  color: #263238;
  @media (max-width: 1450px) {
    font-size: 1rem;
  }
`;
