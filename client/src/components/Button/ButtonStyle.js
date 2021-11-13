import styled from "styled-components"

export const SubmitButton = styled.button`
  outline: none;
  border: none;
  background-color: ${({ theme }) => theme.colors.buttonBg};
  color: ${({ theme }) => theme.colors.buttonText};
  cursor: pointer;
  height: 40px;
  width: 150px;
  transition:400ms ease-in-out;
  &:hover {
    background-color: ${({ theme }) => theme.colors.buttonText};
    color: ${({ theme }) => theme.colors.buttonBg};
  }
`;