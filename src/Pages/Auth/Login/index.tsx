import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import axios from "axios";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import {
AuthState, loginFailure, loginSuccess
} from "../../../redux/slice/Authslice";


const defaultTheme = createTheme();

export default function SignIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(
    (state: { auth: AuthState }) => state.auth.isLoggedIn
  );

  const isEmailValid = (email: string) => {
  const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailPattern.test(email);
  };

  // const [cookies, setCookie] = useCookies(["isLogin"])



  // const logout = () => {

  //   sessionStorage.setItem("isLogin", "false");

  // }
  
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const email = event.currentTarget.email.value;

    const password = event.currentTarget.password.value;
    var emailValue = "",
      passwordValue = "";

    if (email && password) {
      emailValue = email;
      passwordValue = password;
    }

    console.log(emailValue)
    if (emailValue.trim() === "") {
      alert("Email is required. Please input!");
      return;
    }

    if (!isEmailValid(emailValue)) {
      alert("Invalid email. Please enter a valid email address.");
      return;
    }
    try {
      // Gửi yêu cầu đăng nhập đến server và kiểm tra thông tin
      const response = await axios.get("http://localhost:3000/users", {
        params: {
          email,
          password,
        },
      });

      if (response.data) {
        // Đăng nhập thành công
        dispatch(loginSuccess({ email, password }));
        sessionStorage.setItem("isLogin", "true");
        alert("Logged in successfully");
        navigate("/");
      } else {
        // Đăng nhập thất bại
        dispatch(loginFailure());
        alert("Email or password is incorrect. Please try again.");
      }
    } catch (error) {
      // Xử lý lỗi khi gửi yêu cầu đăng nhập
      console.error("Lỗi đăng nhập:", error);
      dispatch(loginFailure());
      alert("Error! Please try again.");
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/Register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
