"use client";

import { Metadata } from "next";
import Link from "next/link";
import { useRouter } from "next/navigation";

// * 상수 선언부 */
import { prefix } from "./config/config";

import { Button } from "@mui/material";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import FavoriteIcon from "@mui/icons-material/Favorite";
// export const metadata: Metadata = {
//   title: "main | Tarot For Love",
//   description: "Generated by create next app",
// };

export default function Home() {
  const router = useRouter();
  console.log("prefix : ", prefix);

  return (
    <>
      <main className="flex min-h-screen flex-col items-center flex-start p-24">
        <section className="day-counter">
          <h2>처음 만난 날 200일째</h2>
          <div className="couple-name">
            영희
            <FavoriteIcon className="heart-icon" />
            철수
          </div>
        </section>

        <section className="today-question">
          <h2>
            <LoyaltyIcon />
            오늘의 질문
          </h2>
          <div className="flex-col-center gap-10">
            비오는 날은 주로 뭘 하며 시간을 보내나요?
            <Button
              variant="outlined"
              // endIcon={<PersonAddIcon />}
              onClick={() => router.push(`${prefix}/question`)}
              color="inherit"
            >
              생각 나누기
            </Button>
          </div>
        </section>

        <section className="today-tarot">
          <h2>
            <CardGiftcardIcon />
            오늘의 타로
          </h2>
          <div>
            <Button
              variant="outlined"
              // endIcon={<PersonAddIcon />}
              onClick={() => router.push(`${prefix}/tarot`)}
              color="inherit"
            >
              지금 바로 카드 확인
            </Button>
          </div>
        </section>
      </main>

      <style jsx>{`
        h2 {
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-weight: 400;
        }
        h2::after {
          display: none;
        }

        section {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 10px;
        }
        section > div {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        section button {
          cusor: pointer;
        }
        .day-counter {
          width: 100%;
          height: 33.33333333333%;
          position: relative;
          gap: 2px;
        }
        .day-counter * {
          color: #fff;
        }
        .day-counter::after {
          display: inline-block;
          content: "";
          width: 100%;
          height: 100%;
          position: absolute;
          left: 0;
          top: 0;
          opacity: 0.3;
          z-index: -1;
          background: url("${prefix}/images/main_couple_bg.jpg") center/100%
            no-repeat;
        }
        .day-counter h2 {
          width: 100%;
          text-align: center;
        }
        .day-counter .couple-name {
          font-size: 16px;
          font-weight: 500;
          text-align: center;
          margin: 0 auto;
        }

        .today-question {
          width: 100%;
          height: 33.333333333%;
          position: relative;
        }
        .today-question::after {
          display: inline-block;
          content: "";
          width: 100%;
          height: 100%;
          position: absolute;
          left: 0;
          top: 0;
          opacity: 0.5;
          z-index: -1;
          background: url("${prefix}/images/main_bg_01.jpg") center/100%
            no-repeat;
        }
        .today-tarot {
          width: 100%;
          height: 33.333333333%;
          position: relative;
        }
        .today-tarot::after {
          display: inline-block;
          content: "";
          width: 100%;
          height: 100%;
          position: absolute;
          left: 0;
          top: 0;
          opacity: 0.3;
          z-index: -1;
          background: url("${prefix}/images/main_bg_02.jpg") center/100%
            no-repeat;
        }
        .today-tarot button {
          width: 300px;
        }
      `}</style>
    </>
  );
}
