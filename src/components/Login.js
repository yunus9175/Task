import React, { useState } from 'react';
import isEmail from 'validator/lib/isEmail';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';

import OutlinedInput from '@mui/material/OutlinedInput';
import { Typography } from '@mui/material';
const Login = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  let navigate = useNavigate();

  const validPass = (param) => {
    if (param) {
      return values.password
        .split('')
        .reduce((acc, num) => acc + Number(num), 0);
    }
    return false;
  };
  const isFormDidabledFn = () => {
    if (isEmail(values.email.trim())) {
      let isPassNumber = Number(values.password);
      if (validPass(isPassNumber) === 10) {
        console.log('login success');
        navigate(`/dashboard`);
      } else {
        alert('Incorrect password');
      }
    } else {
      alert('Invalid email');
    }
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    isFormDidabledFn();
  };
  // const nameBlur = () => {
  //   if (!name.trim() == ""&&!email.trim().includes("@")) {
  //     SetisFormDisabled(false);
  //     console.log("sideefect");
  //   } else SetisFormDisabled(true);
  // };
  // const emailBlur = () => {
  //   if (!email.trim().includes("@")&&!name.trim() == "") {
  //     SetisFormDisabled(false);
  //     console.log("sideefect");
  //   } else SetisFormDisabled(true);
  // };
  return (
    <div className="LoginApp">
      {/* <h2>{counter}</h2>
      <h2>-{counter}</h2> */}
      {/* <form onSubmit={handleFormSubmit}>
        <label>Email</label>
        <input
          type="email"
          // onBlur={emailBlur}
          value={email}
          onChange={(e) => SetEmail(e.target.value)}
          placeholder="enter email"
        />
        <label>Password</label>
        <input
          type="password"
          // onBlur={nameBlur}
          value={pass}
          onChange={(e) => SetPass(e.target.value)}
          placeholder="enter password"
        />

        {/* name=''&&email not valid */}
      {/* <button disabled={!(pass && email)}>Submit</button>
      </form> */}
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1 },
          '& .MuiFormControl-root': { width: '100%' },
        }}
        noValidate
        autoComplete="off"
      >
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <TextField
          required
          id="outlined-required"
          label="Required"
          value={values.email}
          onChange={handleChange('email')}
          fullWidth
        />
        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            fullWidth
            sx={{
              '& .MuiTextField-root': {
                width: '100%',
              },
            }}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <button
          disabled={!(values.password && values.email)}
          onClick={handleFormSubmit}
        >
          Submit
        </button>
      </Box>
    </div>
  );
};

export default Login;
