import LoginIcon from "@mui/icons-material/Login";
import Link from "next/link";

export default function AppHeader() {
  return (
    <header className="app-header flex-between">
      <h1>
        <Link href="/">TAROT FOR LOVE</Link>
      </h1>
      <ul>
        <li>
          <Link href="/auth/signin" className="signin-btn">
            <LoginIcon />
          </Link>
        </li>
      </ul>
    </header>
  );
}
