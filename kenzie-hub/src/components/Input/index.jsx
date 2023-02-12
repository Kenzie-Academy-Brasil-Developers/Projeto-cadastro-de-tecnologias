import React from "react";
import { StyledInput } from "./style";

export const Input = React.forwardRef(
  ({ type, placeholder, id, label, error, name, register, ...rest }, ref) => {
    return (
      <StyledInput>
        <label htmlFor={id}>{label}</label>
        <input type={type} placeholder={placeholder} id={id} {...rest} />
        {error ? <p>{error}</p> : null}
      </StyledInput>
    );
  }
);
