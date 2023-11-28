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
import AppFooter from "../../components/AppFooter";
import AppHeader from "../../components/AppHeader";
import { Metadata } from "next";

type FormValues = {
  firstName: string;
  lastName: string;
};

// export const metadata: Metadata = {
//   title: "Signup | Tarot For Love",
//   description: "회원가입 페이지 입니다.",
// };

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
          <h2>회원가입</h2>
          <form onSubmit={onSubmit}>
            {/* 아이디 */}
            <FormControl fullWidth sx={{ m: 1 }} variant="outlined">
              <TextField id="id" label="ID" variant="standard" />
            </FormControl>

            {/* 비밀번호 */}
            <FormControl sx={{ m: 1 }} variant="standard">
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input
                id="password"
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

            {/* 비밀번호 확인*/}
            <FormControl sx={{ m: 1 }} variant="standard">
              <InputLabel htmlFor="password-check">Password 체크</InputLabel>
              <Input
                id="password-check"
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

            {/* 이름 */}
            <FormControl fullWidth sx={{ m: 1 }} variant="outlined">
              <TextField id="name" label="이름" variant="standard" />
            </FormControl>

            {/* 애칭 */}
            <FormControl fullWidth sx={{ m: 1 }} variant="outlined">
              <TextField id="nickname" label="애칭" variant="standard" />
            </FormControl>

            {/* 생일 */}
            <FormControl fullWidth sx={{ m: 1 }} variant="outlined">
              <TextField id="birth" label="생일" variant="standard" />
            </FormControl>

            {/* 기념일 */}
            <FormControl fullWidth sx={{ m: 1 }} variant="outlined">
              <TextField id="anniversary" label="기념일" variant="standard" />
            </FormControl>

            {/* 취미 */}
            <FormControl fullWidth sx={{ m: 1 }} variant="outlined">
              <TextField id="hobby" label="취미" variant="standard" />
            </FormControl>

            {/* MBTI */}
            <FormControl fullWidth sx={{ m: 1 }} variant="outlined">
              <TextField id="mbti" label="MBTI" variant="standard" />
            </FormControl>

            <Stack direction="column" spacing={2}>
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
