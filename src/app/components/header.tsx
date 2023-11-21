import Image from "next/image";

export default function AppHeader() {
  return (
    <header className="app-header flex-between">
      <h1>TAROT FOR LOVE</h1>
      <ul>
        <li>
          <a href="/auth/signin">로그인</a>
        </li>
      </ul>
    </header>
  );
}
