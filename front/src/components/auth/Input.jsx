import React from "react";
import { Grid, TextField, InputAdornment, IconButton } from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

const Input = ({
  half,
  handleChange,
  handleShowPassword,
  name,
  label,
  autoFocus,
  type,
  errorMessage,
}) => {
  return (
    <>
      <Grid item xs={12} sm={half ? 6 : 12}>
        <TextField
          name={name}
          label={label}
          onChange={handleChange}
          fullWidth
          required
          helperText={errorMessage}
          variant="outlined"
          autoFocus={autoFocus}
          type={type}
          InputProps={
            name === "password"
              ? {
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleShowPassword}>
                        {type === "password " ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }
              : null
          }
        />
        {/* style={{ color: "red" }} variant="h6" align="center" */}
        {/* <Box
          sx={{
            color: "red",
            textAlign: "center",
            required: "true",
          }}
        >
          {errorMessage}
        </Box> */}
      </Grid>
    </>
  );
};

export default Input;
