import { BreakifyChildren, BreakifyWrapper } from "./breakify.styles";

interface Props {
  result: string[];
}

export const BreakifyLogo = ({ result }: Props) => {
  return (
    <BreakifyWrapper>
      <span>{result[0]}</span>
      {result[1] && <BreakifyChildren>{result[1]}</BreakifyChildren>}
      <span>{result[2]}</span>
    </BreakifyWrapper>
  );
};
