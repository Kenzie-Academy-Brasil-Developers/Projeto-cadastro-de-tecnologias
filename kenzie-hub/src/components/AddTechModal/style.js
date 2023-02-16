import styled from "styled-components";

export const StyledModal = styled.div`
  font-family: var(--font-primary);

  background-color: rgb(0, 0, 0, 0.7);
  z-index: 1;

  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: var(--grey-2);
    font-weight: 700;
    font-size: 14px;
    color: var(--grey-0);

    width: 300px;
    padding: 20px;
  }

  div > button {
    background-color: var(--grey-2);
    border: none;
    color: var(--grey-0);
  }
  form {
    display: flex;
    flex-direction: column;

    width: 300px;
    padding: 20px;
    gap: 10px;

    background-color: var(--grey-3);
  }

  form > p {
    color: var(--negative);
    font-weight: 400;
    font-size: 12px;
  }

  form > label {
    font-weight: 400;
    font-size: 12px;
    color: var(--grey-0);
  }

  form > input,
  select {
    background-color: var(--grey-2);
    padding: 16px;
    border: none;
    color: var(--grey-0);
  }

  form > button {
    background-color: var(--Color-primary);
    color: var(--grey-0);
    font-weight: 500;
    font-size: 16px;
    padding: 16px;
    border: none;

    margin-top: 10px;
  }
`;
