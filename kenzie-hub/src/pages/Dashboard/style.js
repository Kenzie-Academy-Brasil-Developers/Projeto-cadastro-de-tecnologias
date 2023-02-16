import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledDash = styled.div`
  font-family: var(--font-primary);

  width: 800px;
  max-width: 90%;
  margin: 0 auto;

  padding: 50px 0px 20px 0px;

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  header {
    display: flex;
    justify-content: space-between;

    padding: 50px 0px;
  }

  header > p {
    font-size: 18px;
    font-weight: 700;

    color: var(--grey-0);
  }

  header > span {
    font-size: 12px;

    color: var(--grey-1);
  }

  main {
    line-height: 250%;
  }

  main > h3 {
    font-size: 18px;
    font-weight: 700;

    color: var(--grey-0);
  }

  main > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  main > div > p {
    font-size: 16px;
    color: var(--grey-0);
  }

  main > div > button {
    color: #ffff;
    background-color: var(--grey-3);
    padding: 12px 20px;
    border: none;
    font-weight: 600;
    font-size: 12px;
  }

  main > ul {
    background-color: var(--grey-3);
    padding: 22px;
    margin-top: 20px;
  }

  main > ul > li {
    background-color: var(--grey-4);
    color: var(--grey-0);

    display: flex;
    justify-content: space-between;
    padding: 10px;
    margin-top: 10px;

    cursor: pointer;
  }

  main > ul > li:hover {
    background-color: var(--grey-2);
    color: var(--grey-0);

    display: flex;
    justify-content: space-between;
    padding: 10px;
    margin-top: 10px;

    cursor: pointer;
  }

  main > ul > li > p {
    font-weight: 700;
    font-size: 14px;
  }

  main > ul > li > span {
    font-weight: 400;
    font-size: 12px;
  }
`;

export const StyledLink = styled(Link)`
  list-style: none;
  text-decoration: none;

  padding: 12px 20px;
  border-radius: 8px;
  border: none;

  font-weight: 600;
  font-size: 12px;

  background-color: var(--grey-3);
  color: var(--grey-0);
`;
