import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

:root {
  --Color-primary: #ff577f;
  --Color-secondary: #ff427f;
  --Color-primary-Negative: #59323f;
  --grey-1: #868e96;
  --grey-2: #343b41;
  --grey-3: #212529;
  --grey-4: #121214;
  --grey-0: #f8f9fa;

  --negative: #e83f5b;
  --sucess: #3fe864;

  --font-primary: "Inter", sans-serif;
}

button {
  cursor: pointer;
}

body {
  background-color: var(--grey-4);
}


`;
