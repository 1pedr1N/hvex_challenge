import styled from "styled-components";

export const Header = styled.header`
  background-color: #252835;
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  color: white;
`;
export const ListHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  color: white;
  width: 60%;
`;
export const Text = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
  padding: 0;
  :hover {
    cursor: pointer;
    color: #00b6de;
    transform: scale(1.1);
    transition: 0.3s;
  }
`;
export const Button = styled.button`
  background-color: #252835;

  border: 1px solid #00b6de;
  border-radius: 5px;
  padding: 10px;
  font-size: 1rem;
  font-family: "Inter";
  color: #00b6de;
  :hover {
    cursor: pointer;
    background-color: #00b6de;
    color: white;
    transform: scale(1.1);
    transition: 0.3s;
  }
`;
