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

  main > p {
    font-size: 16px;
    color: var(--grey-0);
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
