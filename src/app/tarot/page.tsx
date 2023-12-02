"use client";

import { use, useState } from "react";
import { useForm, Resolver } from "react-hook-form";
import { useRouter } from "next/navigation";

import Image from "next/image";
import { prefix } from "../config/config";

type FormValues = {
  firstName: string;
  lastName: string;
};

// export const metadata: Metadata = {
//   title: "Login | Tarot For Love",
//   description: "로그인 페이지 입니다.",
// };

const tarotCardName = [
  "fool",
  "magician",
  "high_priestess",
  "emperess",
  "emperor",
  "hierophant",
  "lovers",
  "chariot",
  "strength",
  "hermit",
  "wheel_fortune",
  "justice",
  "hanged_man",
  "death",
  "temperance",
  "devil",
  "tower",
  "star",
  "moon",
  "sun",
  "judgement",
  "world",
];

export default function Tarot() {
  const router = useRouter();

  const imgNum = Math.floor(Math.random() * (3 - 1) + 1);
  const imgName = tarotCardName[Math.floor(Math.random() * (23 - 1) + 1)];
  console.log(imgNum);

  const [isDeckOpen, setIsDeckOpen] = useState(false);

  return (
    <>
      <main className="tarot flex min-h-screen flex-col items-center justify-between p-24">
        <section>
          <h2>오늘의 타로 카드</h2>
          <div className="img-wrap">
            {/* <Image
              src={`${prefix}/images/tarot_back/back_0${imgNum}.png`}
              fill={true}
              className="img-contain"
              alt="타로 덱"
            /> */}
            <img
              src={`${prefix}/images/tarot_back/back_0${imgNum}.png`}
              className={`tarot-deck img-contain ${
                isDeckOpen === true ? "none" : ""
              }`}
              alt="타로 덱"
              onClick={() => {
                setIsDeckOpen(true);
              }} //숨겨진 타로 결과 보여주기
            />
            <img
              src={`${prefix}/images/tarot_major/${imgName}.png`}
              className={`tarot-major img-contain ${
                isDeckOpen === true ? "active" : ""
              }`}
              alt="타로 덱"
              onClick={() => {}} //결과에 따른 데이트 장소 추천 페이지로 이동
            />
          </div>
        </section>
      </main>
    </>
  );
}
