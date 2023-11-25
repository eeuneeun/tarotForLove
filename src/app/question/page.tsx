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
import AppFooter from "../components/footer";
import AppHeader from "../components/header";

type FormValues = {
  firstName: string;
  lastName: string;
};

// export const metadata: Metadata = {
//   title: "Login | Tarot For Love",
//   description: "로그인 페이지 입니다.",
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

export default function Question() {
  return (
    <>
      <AppHeader />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="panel">
          <h2>오늘의 타로 카드</h2>
        </div>
      </main>
      <AppFooter />
    </>
  );
}
