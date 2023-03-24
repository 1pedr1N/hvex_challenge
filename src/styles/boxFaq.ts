import styled from "styled-components";

export const BoxFaqContainer = styled.div`
  display: flex;
  flex-direction: column;

  background-color: #f9f9f9;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
  width: 770px;
  padding: 20px;
  border-radius: 10px;
  margin-top: 30px;
  min-height: 200px;
`;
export const TitleDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 20px;
`;
export const Title = styled.h1`
  font-size: 16px;
  font-weight: 700;
  color: #1c2c44;
`;
export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #d9d9d9;
  margin-top: 10px;
  margin-bottom: 10px;
`;
export const Description = styled.p`
  color: #373737;
  font-size: 16px;
  font-weight: 400;
`;
