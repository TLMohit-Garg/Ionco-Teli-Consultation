import React from "react";
import { FormControl, InputLabel, Select, MenuItem, Grid } from "@mui/material";
import { Controller } from "react-hook-form";
import { customSelectProps } from "../../customDataTypes/datatypes";
import styles from "../../Styles/customValidation.module.css";

const CustomSelect = ({
  error,
  errorCondition,
  onSubmit,
  control,
  name,
  form,
  selectData,
  placeHolder,
  sx,
  className,
  selectFieldCss,
  onChange,
}: customSelectProps) => {
  return (
    <Grid>
      <Grid component={form} onSubmit={onSubmit}>
        <FormControl
          fullWidth={true}
          className={`${styles.formControl} ${selectFieldCss}`}
        >
          <InputLabel id="selectOption-label"></InputLabel>
          <Controller
            name={name}
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Select
                {...field}
                labelId="selectOption-label"
                label=""
                error={error}
                size="small"
                displayEmpty
                sx={sx}
                onChange={(e) => {
                  field.onChange(e);
                  if (onChange) {
                    onChange(e);
                  }
                }}
              >
                <MenuItem value="" className={styles.menuItem}>
                  <span className={styles.placeholder}>{placeHolder}</span>
                </MenuItem>
                {selectData.map((item: any) => {
                  return (
                    <MenuItem
                      key={item.id}
                      value={item.type}
                      className={styles.menuItemList}
                    >
                      <span className={className}>{item.name}</span>
                    </MenuItem>
                  );
                })}
              </Select>
            )}
          />

          {errorCondition}
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default CustomSelect;

