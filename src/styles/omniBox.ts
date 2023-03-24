import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #00b6de;
  justify-content: center;
  align-items: center;
  background-color: #1c2c44;
  width: 300px;
  height: 250px;
  margin: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
  transition: 0.3s;
  :hover {
    transform: scale(1.1);
    transition: 0.3s;
  }
`;
export const Text = styled.p`
  text-align: center;
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
  padding: 0;
  color: #52e0ff;

  @media (max-width: 1450px) {
    font-size: 1rem;
  }
`;
