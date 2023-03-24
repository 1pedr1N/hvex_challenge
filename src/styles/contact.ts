import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40vh;
  background-color: #1c2c44;
`;
export const Title = styled.h1`
  color: #fdfdfd;
  font-size: 32px;
  font-weight: 700;
  text-align: center;
  max-width: 569px;
`;
export const Divider = styled.div`
  width: 170px;
  height: 5px;
  background-color: #00b6de;
`;
export const Button = styled.button`
  background-color: #1c2c44;
  color: #52e0ff;
  font-size: 16px;

  font-weight: 400;
  border: 1px solid #00b6de;
  border-radius: 5px;
  padding: 15px 20px;
  margin-top: 20px;
  cursor: pointer;
  transition: 0.3s;
  :hover {
    background-color: #52e0ff;
    transition: 0.3s;
    color: #fafafa;
  }
`;
