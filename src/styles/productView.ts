import styled from "styled-components";

export const ProductViewContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 100px;
  align-items: center;

  height: 100%;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: 100px;

  padding: 20px;
`;
export const Title = styled.h1`
  font-size: 32px;
  font-weight: 700;
  color: #1b2033;
`;
export const Divider = styled.div`
  width: 170px;
  height: 5px;
  background-color: #00b6de;
`;
export const Subtitle = styled.h2`
  font-size: 32px;
  font-weight: 700;
  color: #1b2033;
  max-width: 505px;
`;
export const Desc = styled.p`
  font-size: 20px;
  font-weight: 400;
  color: #373737;
  max-width: 672px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  width: 50%;
  margin-top: 50px;
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
