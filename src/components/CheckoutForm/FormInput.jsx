import React from "react";
import { TextField, Grid } from "@material-ui/core";
import { useFormContext, Controller } from "react-hook-form";

const FormInput = ({ name, label, required, ...props }) => {
  const { control } = useFormContext();

  return (
    <Grid item xs={12} sm={6}>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange } }) => (
          <TextField
            fullWidth
            defaultValue=""
            label={label}
            onChange={onChange}
            required={required}
            {...props}
          />
        )}
      />
    </Grid>
  );
};

export default FormInput;
