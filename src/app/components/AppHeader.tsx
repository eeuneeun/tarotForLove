import Link from "next/link";
import RoofingIcon from "@mui/icons-material/Roofing";
import ClearAllIcon from "@mui/icons-material/ClearAll";
import LoginIcon from "@mui/icons-material/Login";
import FaceIcon from "@mui/icons-material/Face";
import Face3Icon from "@mui/icons-material/Face3";

export default function AppHeader() {
  return (
    <header className="app-header flex-between">
      <h1>
        <Link href="/">
          <RoofingIcon />
        </Link>
      </h1>
      <ul className="flex-between">
        <li>
          <Link href="/menu/gnb" className="gnb-btn flex-center">
            <ClearAllIcon />
          </Link>
        </li>
        <li>
          <Link href="/auth/signin" className="signin-btn flex-center none">
            <LoginIcon />
          </Link>

          {/* 남성유저의 경우 */}
          <Link href="/auth/signin" className="signin-btn flex-center none">
            <FaceIcon />
          </Link>
          {/* 여성유저의 경우 */}
          <Link href="/auth/signin" className="signin-btn flex-center">
            <Face3Icon />
          </Link>
        </li>
      </ul>
    </header>
  );
}
