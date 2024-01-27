"use client";

import React, { use, useState } from "react";
import { Resolver } from "react-hook-form";
import { useRouter } from "next/navigation";

// * 상수 선언부 */
import { prefix } from "../config/config";

import { Button } from "@mui/material";

import { TextareaAutosize } from "@mui/base/TextareaAutosize";
import { styled } from "@mui/joy/styles";
import { Textarea } from "@mui/joy";
import dbHandler from "../config/db";

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

const StyledTextarea = styled(TextareaAutosize)({
  resize: "none",
  border: "none", // remove the native textarea border
  minWidth: 0, // remove the native textarea width
  outline: 0, // remove the native textarea outline
  padding: 0, // remove the native textarea padding
  paddingBlockStart: "1em",
  paddingInlineEnd: `var(--Textarea-paddingInline)`,
  flex: "auto",
  alignSelf: "stretch",
  color: "inherit",
  backgroundColor: "#eee",
  fontFamily: "inherit",
  fontSize: "inherit",
  fontStyle: "inherit",
  fontWeight: "inherit",
  lineHeight: "inherit",
  "&::placeholder": {
    opacity: 0,
    transition: "0.1s ease-out",
  },
  "&:focus::placeholder": {
    opacity: 1,
  },
  // specific to TextareaAutosize, cannot use '&:focus ~ label'
  "&:focus + textarea + label, &:not(:placeholder-shown) + textarea + label": {
    top: "0.5rem",
    fontSize: "0.75rem",
  },
  "&:focus + textarea + label": {
    color: "var(--Textarea-focusedHighlight)",
  },
});

const StyledLabel = styled("label")(({ theme }) => ({
  position: "absolute",
  lineHeight: 1,
  top: "calc((var(--Textarea-minHeight) - 1em) / 2)",
  color: theme.vars.palette.text.tertiary,
  fontWeight: theme.vars.fontWeight.md,
  transition: "all 150ms cubic-bezier(0.4, 0, 0.2, 1)",
}));

const InnerTextarea = React.forwardRef<
  HTMLTextAreaElement,
  JSX.IntrinsicElements["textarea"]
>(function InnerTextarea(props, ref) {
  const id = React.useId();
  return (
    <React.Fragment>
      <StyledTextarea minRows={2} {...props} ref={ref} id={id} />
      <StyledLabel htmlFor={id}>Label</StyledLabel>
    </React.Fragment>
  );
});

export default function Question() {
  const router = useRouter();

  // 데이터베이스 연결
  function dbConnect(event: React.MouseEvent) {
    console.log(event);
    // dbHandler();
  }
  return (
    <>
      <main className="question flex min-h-screen flex-col items-center justify-between p-24">
        <section className="flex-col-center">
          <h2>N일째 질문</h2>
          <p data-bobum="채소">서로를 좋아하게 된 계기는 무엇인가요?</p>
          <form
            className="flex-col-center"
            onSubmit={(event) => {
              event.preventDefault();
            }}
          >
            {/* <Textarea
                slots={{ textarea: InnerTextarea }}
                slotProps={{ textarea: { placeholder: "A placeholder" } }}
                sx={{ borderRadius: "6px" }}
              /> */}
            <Textarea color="neutral" minRows={10} size="lg" variant="soft" />
            <Button
              variant="outlined"
              // endIcon={<PersonAddIcon />}
              // onClick={() => router.push(`${prefix}/question`)}
              onClick={(e) => dbConnect(e)}
              color="inherit"
            >
              생각 남기기
            </Button>
          </form>
        </section>
      </main>

      <style jsx>{`
        section {
          width: 100%;
          height: 100%;
          position: relative;
          gap: 35px;
        }
        section::after {
          display: inline-block;
          content: "";
          width: 100%;
          height: 100%;
          position: absolute;
          left: 0;
          top: 0;
          opacity: 0.3;
          z-index: -1;
          background: url("${prefix}/images/tarot_back/back_01.png") center/50%
            no-repeat;
        }
        section h2 {
          font-sizpx;
          color: #fff;
        }
        section h2::after {
          display: none;
        }
        form {
          opacity: 0.6;
          gap: 30px;
        }
      `}</style>
    </>
  );
}
