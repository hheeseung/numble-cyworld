import Link from 'next/link';
import {useRouter} from 'next/router';

function Navbar() {
  const router = useRouter();
  const GAME = 'game';
  const DIARY = 'diary';
  const BG_COLOR = '#ffffff';
  const COLOR = '#298eb5';

  return (
    <nav>
      <Link href='/'>
        <div
          className='home'
          style={{
            backgroundColor: router.pathname === '/' ? BG_COLOR : COLOR,
            color: router.pathname === '/' ? COLOR : BG_COLOR,
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
          className='diary'
          style={{
            backgroundColor: router.pathname === `/${DIARY}` ? BG_COLOR : COLOR,
            color: router.pathname === `/${DIARY}` ? COLOR : BG_COLOR,
          }}
        >
          다이어리
        </div>
      </Link>
      <style jsx>{`
        div {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 70px;
          height: 42px;
          background-color: #298eb5;
          color: #ffffff;
          border: 1px solid #0f465e;
          border-top-right-radius: 5px;
          border-bottom-right-radius: 5px;
          position: absolute;
          right: 6px;
          font-weight: 500;
          cursor: pointer;
        }
        .home {
          top: 120px;
        }
        .game {
          top: 165px;
        }
        .diary {
          top: 210px;
        }
      `}</style>
    </nav>
  );
}

export default Navbar;
