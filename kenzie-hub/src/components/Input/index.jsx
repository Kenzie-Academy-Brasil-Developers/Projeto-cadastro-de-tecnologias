import React from "react";
import { StyledInput } from "./style";
import { forwardRef } from "react";

export const Input = React.forwardRef(
  ({ type, placeholder, id, label, error, ...rest }, ref) => {
    return (
      <StyledInput>
        <label htmlFor={id}>{label}</label>
        <input
          type={type}
          placeholder={placeholder}
          ref={ref}
          id={id}
          {...rest}
        />
        {error ? <p>{error}</p> : null}
      </StyledInput>
    );
  }
);
