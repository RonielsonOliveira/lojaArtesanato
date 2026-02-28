import styled from "styled-components";
import * as colors from "../../config/colors.js";

export const PageWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const ProductWrapper = styled.div`
  display: flex;
  gap: 80px;
  padding: 60px 0px;
  width: 100%;
  align-items: flex-start;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 30px;
  }
`;

export const Image = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;

  img {
    width: 100%;
    max-width: 450px;
    border-radius: 12px;
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
  }
`;

export const Details = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  text-align: right;
`;

export const Title = styled.h1`
  color: ${colors.colorTextMain};
  font-size: 2.2rem;
  margin-bottom: 20px;
`;

export const Price = styled.h2`
  color: ${colors.colorTextMain};
  font-size: 2rem;
  margin-bottom: 20px;
`;

export const Description = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 25px;
  color: #555;
`;

export const Info = styled.div`
  margin-bottom: 30px;

  p {
    margin: 5px 0;
    font-weight: 500;
    color: ${colors.colorTextMain};
  }
`;

export const Button = styled.button`
  margin-top: auto;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${colors.colorAccent};
  color: #fff;

  padding: 15px 25px;
  width: 250px;

  border: 2px dashed #fff;
  border-radius: 8px;

  font-size: 1rem;
  cursor: pointer;

  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: rotate(-1deg) translateY(-6px);
  }
`;
export const ButtonWrapper = styled.div`
  margin-top: auto;
  display: flex;
  justify-content: flex-end;
`;
