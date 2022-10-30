import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSmile,
  faPhone,
  faEnvelope,
  faHashtag,
} from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import Link from "next/link";

type Props = {
  children: React.ReactNode;
};

function Layout(props: Props) {
  const router = useRouter();
  const GAME = "game";
  const DIARY = "diary";
  const BG_COLOR = "#ffffff";
  const COLOR = "#298eb5";

  return (
    <div className="background">
      <div className="inner-box">
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
                backgroundColor:
                  router.pathname === `/${GAME}` ? BG_COLOR : COLOR,
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
        </nav>
        <header className="header">
          <div className="visit">
            <span>TODAY</span>
            <span>0</span>
            <span>│</span>
            <span>TOTAL</span>
            <span>11203</span>
          </div>
          <div className="title">사이좋은 사람들, 싸이월드</div>
          <div className="private">
            <span>사생활보호설정</span>
            <span> ▶</span>
          </div>
        </header>
        <main className="main">
          <aside className="aside">
            <div className="profile">
              <img src="/image/CyworldProfile.png" alt="profile" />
            </div>
            <div className="metadata">
              <ul className="metadata-list">
                <li>
                  <span>
                    <FontAwesomeIcon icon={faSmile} />
                  </span>
                  <span>이름</span>
                </li>
                <li>
                  <span>
                    <FontAwesomeIcon icon={faPhone} />
                  </span>
                  <span>Phone</span>
                </li>
                <li>
                  <span>
                    <FontAwesomeIcon icon={faEnvelope} />
                  </span>
                  <span>E-mail</span>
                </li>
                <li>
                  <span>
                    <FontAwesomeIcon icon={faHashtag} />
                  </span>
                  <span>인스타그램</span>
                </li>
              </ul>
            </div>
            <div className="mood">
              <p>오늘의 기분</p>
              <select className="mood-select">
                <option value="joy">기쁨 😊</option>
                <option value="sadness">우울 😥</option>
                <option value="sleepy">졸림 😴</option>
              </select>
            </div>
          </aside>
          <section className="section">{props.children}</section>
        </main>
      </div>
      <style jsx>{`
        .background {
          position: relative;
          background: url("/image/background.png") center/cover no-repeat;
          width: 1920px;
          height: 937px;
        }
        .inner-box {
          position: absolute;
          top: 30px;
          left: 30px;
          background: url("/image/innerBox.png") center/cover no-repeat;
          width: 1300px;
          height: 875px;
          padding: 65px 70px;
        }
        /* nav */
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
          right: -19px;
          font-weight: 500;
          font-size: 20px;
          cursor: pointer;
        }
        .home {
          top: 120px;
        }
        .game {
          top: 180px;
        }
        .diary {
          top: 240px;
        }
        /* header */
        .header {
          display: flex;
          justify-content: space-between;
        }
        .visit {
          width: 270px;
          display: flex;
          justify-content: space-evenly;
          font-size: 0.8rem;
          padding: 7px 25px;
        }
        .visit span:nth-child(2) {
          color: #ff0000;
        }
        .title {
          width: 750px;
          font-size: 1.2rem;
          font-weight: 700;
          color: #55b2d4;
        }
        .private {
          width: 100px;
          font-size: 0.8rem;
          line-height: 2rem;
        }
        .private span:last-child {
          color: #ff6400;
        }
        /* main */
        .main {
          display: flex;
        }
        /* aside */
        .aside {
          width: 270px;
          height: 718px;
          position: relative;
          margin-right: 5px;
          border: 1px solid #999999;
          border-radius: 10px;
          background-color: #ffffff;
          padding: 28px;
        }
        .profile {
          margin: 10px;
        }
        .metadata {
          width: 100%;
          border-top: 2px dotted #999999;
        }
        .metadata-list {
          list-style: none;
          padding: 0;
        }
        .metadata-list li {
          margin-bottom: 7px;
        }
        .metadata-list li span:first-child {
          margin-right: 10px;
        }
        .mood {
          position: absolute;
          bottom: 41px;
        }
        .mood p {
          margin: 0;
          margin-bottom: 8px;
        }
        .mood-select {
          width: 210px;
          padding: 3px;
          background-color: #eeeeee;
          font-size: 1rem;
        }
        /* section */
        .section {
          width: 880px;
          height: 718px;
          border: 1px solid #999999;
          border-radius: 10px;
          background-color: #ffffff;
          padding: 30px 50px;
        }
      `}</style>
    </div>
  );
}

export default Layout;
