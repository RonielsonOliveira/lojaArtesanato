import styled from "styled-components";
import * as colors from "../../config/colors";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 30px;
`;
export const Description = styled.div`
  font-size: 18px;
  padding: 4px;
  color: ${colors.colorAccent};
  a {
    color: inherit;
  }
`;
export const Title = styled.div`
  font-size: 28px;
  padding: 4px;
  color: ${colors.colorAccent};
  a {
    color: inherit;
  }
`;
export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  svg {
    color: ${colors.colorPrimary};
    width: 34px;
    height: 34px;
  }
`;
