import styled from "styled-components";
import * as colors from "../../config/colors";

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  width: 100%;
  margin: 0 auto;

  justify-items: center;
`;
export const Info = styled.div`
  background: ${colors.colorBgCard};
  border-radius: 12px;
  border: 2px dashed ${colors.colorAccent};

  display: grid;
  grid-template-rows: auto 1fr auto;
  gap: 15px;

  width: 100%;
  max-width: 400px;
  min-height: 480px;

  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  text-align: left;
  position: relative;

  transition: border 0.2s ease;

  &:hover {
    border: 2px dashed ${colors.colorSecondary};
    transform: scale(1.05);
    cursor: pointer;
  }

  a {
    color: ${colors.colorTextMain};
    text-decoration: none;
    font-size: 22px;
    font-weight: bold;
  }
  span {
    color: ${colors.colorAccent};
    font-size: 22px;
    font-weight: bold;
  }
`;
export const ImageWrapper = styled.div`
  width: 100%;
  height: 230px;
  overflow: hidden;
  border-radius: 6px;
  background: #fff;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;
export const Title = styled.div`
  color: ${colors.colorTextMain};
  font-size: 26px;
`;
export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
