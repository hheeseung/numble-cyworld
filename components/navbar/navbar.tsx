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
          font-family: "S-CoreDream-3Light";
          display: flex;
          justify-content: center;
          align-items: center;
          width: 60px;
          height: 32px;
          background-color: #298eb5;
          color: #ffffff;
          border: 1px solid #0f465e;
          border-top-right-radius: 5px;
          border-bottom-right-radius: 5px;
          position: absolute;
          top: 83px;
          left: 740px;
          font-weight: 500;
          font-size: 13px;
          cursor: pointer;
        }
        .home {
          top: 60px;
        }
        .game {
          top: 94px;
        }
        .diary {
          top: 128px;
        }
      `}</style>
    </nav>
  );
}
export default Navbar;
