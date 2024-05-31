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
  aspect-ratio: 1;
  color: #fff;
  font-size: 75px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(-45deg, #838181, #1f1d1d, #dce3e6, #8e9997);
  background-size: 400% 400%;
  animation: gradient 4s ease infinite;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
`;
