import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

const defaultTheme = createTheme();

export default function Register() {
  const initialValues = {
    id: uuidv4(),

    email: "",
    password: "",
    confirmPassword: "",
  };
  const navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const [emailExists, setEmailExists] = React.useState(false);

  const checkEmail = async (email: string) => {
    try {
      const response = await axios.get("http://localhost:3000/users", {
        params: { email },
      });

      // Check if there are any users with the same email
      const existingUsers = response.data.filter(
        (user: any) => user.email === email
      );

      // If there are existing users with the same email, return true
      return existingUsers.length > 0;
    } catch (error) {
      console.error("Lỗi khi kiểm tra email:", error);
      return false;
    }
  };
  const isEmailValid = (email: any) => {
    const emailPattern = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;
    return emailPattern.test(email);
  };

  const isPasswordValid = (password: any) => {
    const passwordRegex = /^(?=.*[A-Za-z\d!@#\$%^&*])[A-Za-z\d!@#\$%^&*]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); 
    const form = event.currentTarget as HTMLFormElement;
    const email = form.elements.namedItem("email") as HTMLInputElement;
    const password = form.elements.namedItem("password") as HTMLInputElement;
    const repeatPassword = form.elements.namedItem(
      "repeatpassword"
    ) as HTMLInputElement;

    var emailValue = "",
      passwordValue = "",
      repeatPasswordValue = "";

    if (email && password && repeatPassword) {
      emailValue = email.value;
      passwordValue = password.value;
      repeatPasswordValue = repeatPassword.value;
    }

    if (emailValue.trim() == "") {
      alert("Email is required. Please input!");
      return;
    }

    if (!isEmailValid(emailValue)) {
      alert("Invalid email. Please enter a valid email address.");
      return;
    }

    if (passwordValue.trim() == "") {
      alert("Password is required. Please input!");
      return;
    }

    const emailAlreadyExists = await checkEmail(emailValue);

    if (!isPasswordValid(passwordValue)) {
      alert("Password is not valid. Please enter a valid password.");
      return;
    }

    if (emailAlreadyExists) {
      setEmailExists(true);
    } else {
      setEmailExists(false);

      // Gửi dữ liệu đăng ký lên máy chủ
      const registrationData = {
        email: emailValue,
        id: uuidv4(),
        password: passwordValue,
      };

      try {
        const response = await axios.post(
          "http://localhost:3000/users",
          registrationData
        );
        alert(122);
        navigate("/Login");
      } catch (error) {
        console.error("Lỗi ", error);
      }
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
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
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
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="repeatpassword"
                  label="Repeat Password"
                  type="password"
                  id="reapeat-password"
                  autoComplete="new-password"
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
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/Login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
