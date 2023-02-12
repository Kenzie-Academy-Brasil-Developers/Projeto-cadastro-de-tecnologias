import styled from "styled-components";

export const StyledInput = styled.div`
  display: flex;
  flex-direction: column;

  gap: 10px;

  input {
    background-color: var(--grey-2);
    border: none;
    border-radius: 8px;
    padding: 16px;
    color: var(--grey-1);
  }

  label {
    color: var(--grey-0);
    font-weight: 400;
    font-size: 12px;
  }

  p {
    font-size: 12px;
    font-weight: 600;
    color: var(--negative);
  }
`;
