"use client";

import { use, useState } from "react";
import { useForm, Resolver } from "react-hook-form";
import { useRouter } from "next/navigation";

import {
  TextField,
  Input,
  FormControl,
  InputLabel,
  InputAdornment,
  Button,
  Stack,
} from "@mui/material";

import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import AppFooter from "../../components/footer";
import AppHeader from "../../components/header";

type FormValues = {
  firstName: string;
  lastName: string;
};

const resolver: Resolver<FormValues> = async (values) => {
  return {
    values: values.firstName ? values : {},
    errors: !values.firstName
      ? {
          firstName: {
            type: "required",
            message: "This is required.",
          },
        }
      : {},
  };
};

export default function Signin() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver });
  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <>
      <AppHeader />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="panel">
          <h2>로그인</h2>
          <form onSubmit={onSubmit}>
            <FormControl fullWidth sx={{ m: 1 }} variant="outlined">
              <TextField id="user-id" label="ID" variant="standard" />
            </FormControl>

            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
              <InputLabel htmlFor="standard-adornment-password">
                Password
              </InputLabel>
              <Input
                id="standard-adornment-password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>

            <Stack direction="column" spacing={2}>
              <Button
                fullWidth
                variant="contained"
                endIcon={<LoginIcon />}
                color="success"
              >
                로그인
              </Button>
              <Button
                fullWidth
                variant="contained"
                endIcon={<PersonAddIcon />}
                onClick={() => router.push("/auth/signup")}
              >
                회원가입
              </Button>
            </Stack>

            {/* <input {...register("firstName")} placeholder="Bill" />
        {errors?.firstName && <p>{errors.firstName.message}</p>}
        <input {...register("lastName")} placeholder="Luo" /> */}
          </form>
        </div>
      </main>
      <AppFooter />
    </>
  );
}
