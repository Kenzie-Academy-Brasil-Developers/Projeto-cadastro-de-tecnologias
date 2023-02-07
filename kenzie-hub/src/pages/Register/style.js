import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledRegisterForm = styled.form`
  width: 500px;
  max-width: 99%;

  margin: 0 auto;

  padding: 20px 12px;

  background-color: var(--grey-4);

  font-family: var(--font-primary);

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
  }

  main {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;

    padding: 20px 18px;

    background-color: var(--grey-3);
    border-radius: 8px;
  }

  main > div {
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 20px;
  }

  main > div > h3 {
    color: var(--grey-0);
    font-weight: 700;
  }

  main > div > span {
    color: var(--grey-1);
  }

  main > span {
    color: var(--negative);
  }

  main > label {
    color: var(--grey-0);
  }

  main > input,
  select {
    background-color: var(--grey-2);
    border: none;
    border-radius: 8px;
    padding: 16px;
    color: var(--grey-1);
  }

  main > button {
    background-color: var(--Color-primary-Negative);
    border: none;
    border-radius: 8px;
    padding: 16px;
    color: var(--grey-0);
    font-weight: 700;
    margin-top: 20px;
  }
`;

export const StyledLink = styled(Link)`
  list-style: none;
  text-decoration: none;

  padding: 12px 20px;
  border-radius: 8px;
  border: none;

  background-color: var(--grey-3);
  color: var(--grey-0);
`;
