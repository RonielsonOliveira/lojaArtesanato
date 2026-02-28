import styled from "styled-components";
import * as colors from "../../config/colors";
export const FilterStyle = styled.div`
  color: ${colors.colorTextMain};
  display: flex;
  width: 20%;
  height: 1000px;
  gap: 20px;
  padding: 15px;
  display: grid;
  position: flex;

  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);

  a {
    color: ${colors.textcolor};
    font-weight: bold;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Checkbox = styled.div`
  text-align: right;
  margin: 15px auto;
  width: 100%;
  label {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    margin-bottom: 15px;
    width: 300px;
  }
  input[type="checkbox"] {
    appearance: none;
    text-align: right;
    align-items: center;
    border: 2px solid #555;
    border-radius: 4px;
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: flex-end;
    cursor: pointer;
    position: relative;
    transition: 0.2s;
  }
  input[type="checkbox"]:checked {
    background-color: ${colors.primaryColor};
    border-color: #0080ff;
  }
  input[type="checkbox"]:checked::after {
    content: "✓";
    color: ${colors.textcolor};
    font-size: 16px;
    font-weight: bold;
    position: absolute;
    top: -2px;
    left: 4px;
  }
`;
