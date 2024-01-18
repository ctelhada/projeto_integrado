import styled from "styled-components";

export const BreakifyWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  & > span {
    font-size: 75px;
  }
`;

export const BreakifyChildren = styled.div`
  height: 100px;
  background-color: #0f5135;
  aspect-ratio: 1;
  color: #fff;
  font-size: 75px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
