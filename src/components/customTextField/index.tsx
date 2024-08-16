import React from "react";
import { Controller } from "react-hook-form";
import { TextField, Grid } from "@mui/material";

export default function CustomTextField({
  error,
  errorCondition,
  onSubmit,
  control,
  name,
  form,
  fullWidth,
  className,
  placeholder,
  startAdornment,
  onChange,
}: any) {
  return (
    <Grid component={form} onSubmit={onSubmit}>
      <Controller
        name={name}
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            label=""
            variant="outlined"
            fullWidth={fullWidth}
            {...field}
            error={error}
            size="small"
            onChange={(e) => {
              field.onChange(e);
              onChange && onChange(e);
            }}
            InputProps={{
              className: className,
              startAdornment: startAdornment,
            }}
            placeholder={placeholder}
          />
        )}
      />
      {errorCondition}
    </Grid>
  );
}

