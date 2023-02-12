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
    font-size: 18px;
    text-align: center;
  }

  main > span {
    color: var(--grey-1);
    font-size: 12px;
    font-weight: 600;

    text-align: center;
  }

  main > button {
    background-color: var(--Color-primary);
    border: none;
    border-radius: 8px;
    padding: 20px;
    color: var(--grey-0);
    font-weight: 500;
    font-size: 16px;
  }
`;

export const StyledLink = styled(Link)`
  list-style: none;
  text-decoration: none;
  text-align: center;

  font-size: 16px;
  font-weight: 500;

  padding: 20px;
  border-radius: 8px;
  border: none;

  background-color: var(--grey-1);
  color: #ffff;
`;
