import Image from "next/image";
import AppHeader from "./components/header";
import AppFooter from "./components/footer";

export default function Home() {
  return (
    <>
      <AppHeader />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div>
          <h2>오늘의 질문</h2>
        </div>
        <div>
          <h2>오늘의 타로</h2>
        </div>
        <div>
          <h2>오늘의 데이트 코스</h2>
        </div>
      </main>
      <AppFooter />
    </>
  );
}
