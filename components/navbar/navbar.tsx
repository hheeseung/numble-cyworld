import Link from "next/link";
import { useRouter } from "next/router";

function Navbar() {
  const router = useRouter();
  const GAME = "game";
  const DIARY = "diary";
  const BG_COLOR = "#ffffff";
  const COLOR = "#298eb5";

  return (
    <nav>
      <Link href="/">
        <div
          className="home"
          style={{
            backgroundColor: router.pathname === "/" ? BG_COLOR : COLOR,
            color: router.pathname === "/" ? COLOR : BG_COLOR,
          }}
        >
          홈
        </div>
      </Link>
      <Link href={`/${GAME}`}>
        <div
          className={`${GAME}`}
          style={{
            backgroundColor: router.pathname === `/${GAME}` ? BG_COLOR : COLOR,
            color: router.pathname === `/${GAME}` ? COLOR : BG_COLOR,
          }}
        >
          게임
        </div>
      </Link>
      <Link href={`/${DIARY}`}>
        <div
          className={`${DIARY}`}
          style={{
            backgroundColor: router.pathname.includes(`/${DIARY}`)
              ? BG_COLOR
              : COLOR,
            color: router.pathname.includes(`/${DIARY}`) ? COLOR : BG_COLOR,
          }}
        >
          다이어리
        </div>
      </Link>
      <style jsx>{`
        .home,
        .game,
        .diary {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 95px;
          height: 55px;
          background-color: #298eb5;
          color: #ffffff;
          border: 1px solid #0f465e;
          border-top-right-radius: 8px;
          border-bottom-right-radius: 8px;
          position: absolute;
          right: -94px;
          font-weight: 500;
          font-size: 20px;
          cursor: pointer;
        }
        .home {
          top: 60px;
        }
        .game {
          top: 120px;
        }
        .diary {
          top: 180px;
        }
      `}</style>
    </nav>
  );
}
export default Navbar;
