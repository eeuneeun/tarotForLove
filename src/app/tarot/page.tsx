"use client";

import { use, useState } from "react";
import { useForm, Resolver } from "react-hook-form";
import { useRouter } from "next/navigation";

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

  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <AppHeader />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
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
              src={`/images/tarot_back/back_0${imgNum}.png`}
              className={`tarot-deck img-contain ${
                isActive === true ? "none" : ""
              }`}
              alt="타로 덱"
              onClick={() => {
                setIsActive(true);
              }} //숨겨진 타로 결과 보여주기
            />
            <img
              src={`/images/tarot_major/${imgName}.png`}
              className={`tarot-major img-contain ${
                isActive === true ? "active" : ""
              }`}
              alt="타로 덱"
              onClick={() => {}} //결과에 따른 데이트 장소 추천 페이지로 이동
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

        .tarot-major {
          display: none;
        }
      `}</style>
    </>
  );
}
