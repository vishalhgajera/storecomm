import React, { useState } from 'react';
import { useNavigate  } from 'react-router-dom';
import { Container } from '@mui/system';
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  CssBaseline,
  FormControlLabel,
  Grid,
  Link,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import axios from 'axios';

const SignupForm = () => {

  const navigate = useNavigate ();
  const [username, setUsername] = useState('demo@email.com');
  const [password, setPassword] = useState('demo@1234');

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:3333/auth/signup', { username, password });
      alert('created new account');
      navigate('/'); 
    } catch (err) {
      console.log(err);
      alert(err.response);
      console.error(err);
    }
  };

  return (
    <Box>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Paper sx={{ p: 2, mt: 5 }} >
          <Box
            pb={2}
            display={'flex'}
            alignItems={'center'}
            flexDirection={'column'}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main'}}/>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
          </Box>

          <form noValidate onSubmit={handleSignup}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Box py={2}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Sign Up
              </Button>
            </Box>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>
    </Box>
  );
};

export default SignupForm;
