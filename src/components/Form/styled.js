import styled from "styled-components";
import { primaryColor } from "../../config/colors";
export const FormB = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  max-width: 400px;
  max-height: 200px;
  input {
    height: 40px;
    margin-bottom: 20px;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 0 10px;
  }
  button {
    background-color: ${primaryColor};
  }
`;
