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
  @media (max-width: 1450px) {
    width: 80%;
  }
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
  @media (max-width: 1450px) {
    font-size: 1rem;
  }
  @media (max-width: 768px) {
    padding: 50px;
    font-size: 1.5rem;
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
  @media (max-width: 768px) {
    width: 70%;
    height: 70px;
  }
`;
export const ResponsiveList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
export const Sidebar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 60%;
  height: 100%;
  background-color: #252835;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const CloseButton = styled.div`
  border: none;
  color: white;
  font-size: 2rem;
  position: absolute;
  top: 0;
  margin: 20px;
  padding: 10px;

  right: 0;
  :hover {
    cursor: pointer;
    color: #00b6de;
    transform: scale(1.1);
    transition: 0.3s;
  }
`;
