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
import Image from "next/image";

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

export default function Tarot() {
  return (
    <>
      <AppHeader />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <section>
          <h2>오늘의 타로 카드</h2>
          <div className="img-wrap">
            <Image
              src={"/images/tarot_back/back_01.png"}
              fill={true}
              className="img-contain"
              alt="타로 덱"
            />
          </div>
        </section>
      </main>
      <AppFooter />
      <style jsx>{`
        section {
          width: 100%;
          height: 100%;
        }

        h2 {
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          padding-bottom: 20px;
        }
        h2::after {
          display: none;
        }

        .img-wrap {
          position: relative;
          width: 90%;
          height: 90%;
          margin: 0 auto;
        }

        .img-wrap::after {
          display: inline-block;
          content: "";
          width: 100%;
          height: 100%;
          position: absolute;
          left: 0;
          top: 0;
          box-shadow: 5px 5px 5px 5px #000;
        }
      `}</style>
    </>
  );
}
