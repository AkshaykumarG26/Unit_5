import styled from "styled-components";

export const Button = styled.button`
  /*CSS Syntax*/
  display: inline-block;
  font-size: 24px;
  font-weight: 700;
  border-radius: 10px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 15rem;
  height: 3rem;
  background: ${(props) => (props.theme === "light" ? "#96ceb4" : "#146356")};
  color: ${(props) => (props.theme === "light" ? "#146356" : "#96ceb4")};
  border: none;

  &:hover {
    box-shadow: -1px 3px 3px 0px #127356;
  }
`;


// light #96ceb4      dark  #146356
