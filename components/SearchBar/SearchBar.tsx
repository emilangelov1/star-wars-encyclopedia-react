import styled from "@emotion/styled";
import React from "react";

const StyledInput = styled.input`
  border: none;
  border-radius: 5px;
  width: 30%;
  height: 40px;
`;

const StyledForm = styled.form`
  padding: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

type Props = {};

export default function SearchBar({}: Props) {
  return (
    <StyledForm>
      <StyledInput placeholder="Search Character..."></StyledInput>
    </StyledForm>
  );
}
