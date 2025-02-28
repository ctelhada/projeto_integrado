import { BreakifyChildren, BreakifyWrapper } from "./breakify.styles";

interface Props {
  result: string[];
}

export const BreakifyLogo = () => {
  return (
    <BreakifyWrapper>
      <BreakifyChildren>W</BreakifyChildren>
      <span>ingman</span>
    </BreakifyWrapper>
  );
};
