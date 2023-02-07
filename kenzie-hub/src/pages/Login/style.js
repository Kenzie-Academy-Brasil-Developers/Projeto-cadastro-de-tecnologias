import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLoginForm = styled.form`
  width: 400px;
  max-width: 99%;

  margin: 0 auto;

  padding: 50px 12px;

  background-color: var(--grey-4);

  font-family: var(--font-primary);

  header {
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
  }

  main {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 20px;

    padding: 20px 18px;

    background-color: var(--grey-3);
    border-radius: 8px;
  }

  main > h3 {
    color: var(--grey-0);
    font-weight: 700;
    text-align: center;
  }

  main > span {
    color: var(--grey-1);
  }

  main > label {
    color: var(--grey-0);
  }

  main > input {
    background-color: var(--grey-2);
    border: none;
    border-radius: 8px;
    padding: 16px;
    color: var(--grey-1);
  }

  main > button {
    background-color: var(--Color-primary);
    border: none;
    border-radius: 8px;
    padding: 20px;
    color: var(--grey-0);
    font-weight: 700;
  }
`;

export const StyledLink = styled(Link)`
  list-style: none;
  text-decoration: none;
  text-align: center;

  padding: 20px;
  border-radius: 8px;
  border: none;

  background-color: var(--grey-1);
  color: var(--grey-0);
`;
