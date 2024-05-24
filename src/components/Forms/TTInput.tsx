import { TextField } from "@mui/material";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

type IInputProps = {
  name: string;
  label?: string;
  type?: string;
  fullWidth?: boolean;
  size?: "small" | "medium";
};
const TTInput = ({
  name,
  label,
  type = "text",
  fullWidth,
  size = "small",
}: IInputProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <TextField
          {...field}
          label={label}
          type={type}
          size={size}
          variant="outlined"
          fullWidth={fullWidth}
        />
      )}
    />
  );
};

export default TTInput;
