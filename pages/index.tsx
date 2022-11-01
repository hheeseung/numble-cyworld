import { gql, useQuery } from "@apollo/client";
import Link from "next/link";
import Header from "../components/header/header";

export const GET_LIST = gql`
  query getBoards {
    fetchBoards {
      number
      title
      createdAt
    }
  }
`;

function Home() {
  const { data } = useQuery(GET_LIST);
  return (
    <>
      <Header title="Update News" width="420px" border="2px solid #999;" />
      <div className="board">
        <div className="post">
          <ul className="post__list">
            {data?.fetchBoards
              .map((post: { number: number; title: string }) => (
                <li key={post.number}>
                  <span className="post__badge">다이어리</span>
                  <Link href={`/diary/${post.number}`}>
                    <span className="post__title">{post.title}</span>
                  </Link>
                </li>
              ))
              .splice(0, 4)}
          </ul>
        </div>
        <div className="category">
          <div className="category__list">
            <div className="category__detail">
              <span>다이어리</span>
              <span>0/65</span>
            </div>
            <div className="category__detail">
              <span>사진첩</span>
              <span>0/265</span>
            </div>
          </div>
          <div className="category__list">
            <div className="category__detail">
              <span>게시판</span>
              <span>0/15</span>
            </div>
            <div className="category__detail">
              <span>방명록</span>
              <span>0/15</span>
            </div>
          </div>
        </div>
      </div>
      <div className="music">
        <Header title="오늘의 BGM" subtitle="TODAY CHOICE" />
        <div className="playlist">
          <span className="playlist__header checkbox">
            <input type="checkbox" />
          </span>
          <span className="playlist__header number">번호</span>
          <span className="playlist__header">곡명</span>
          <span className="playlist__header">아티스트</span>
          <div className="checkbox">
            <input type="checkbox" />
          </div>
          <div className="number">1</div>
          <div>Happiness</div>
          <div>The 1975</div>
          <div className="checkbox">
            <input type="checkbox" />
          </div>
          <div className="number">2</div>
          <div>The Sound</div>
          <div>The 1975</div>
          <div className="checkbox">
            <input type="checkbox" />
          </div>
          <div className="number">3</div>
          <div>Daydreaming</div>
          <div>Harry Styles</div>
          <div className="checkbox">
            <input type="checkbox" />
          </div>
          <div className="number">4</div>
          <div>Feel Good Inc.</div>
          <div>Gorillaz</div>
          <div className="checkbox">
            <input type="checkbox" />
          </div>
          <div className="number">5</div>
          <div>Champagne Supernova</div>
          <div>Oasis</div>
          <div className="checkbox">
            <input type="checkbox" />
          </div>
          <div className="number">6</div>
          <div>Live Forever</div>
          <div>Oasis</div>
          <div className="checkbox">
            <input type="checkbox" />
          </div>
          <div className="number">7</div>
          <div>Electricity (with Dua Lipa)</div>
          <div>Silk City, Dua Lipa, Diplo, Mark Ronson</div>
          <div className="checkbox">
            <input type="checkbox" />
          </div>
          <div className="number">8</div>
          <div>White Lies (feat.Jenni Potts)</div>
          <div>ODESZA, Jenni Potts</div>
          <div className="checkbox">
            <input type="checkbox" />
          </div>
          <div className="number">9</div>
          <div>Hype Boy</div>
          <div>New Jeans</div>
          <div className="checkbox">
            <input type="checkbox" />
          </div>
          <div className="number">10</div>
          <div>Somebody Else</div>
          <div>The 1975</div>
        </div>
      </div>
      <style jsx>{`
        .board {
          display: flex;
          margin-bottom: 50px;
        }
        .post {
          width: 420px;
          margin-right: 20px;
          padding-top: 7px;
        }
        .post__list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .post__list li {
          margin-bottom: 7px;
        }
        .post__badge {
          background-color: #ee3e61;
          color: #ffffff;
          font-size: 0.8rem;
          font-weight: 600;
          padding: 2px;
          margin-right: 5px;
          border-radius: 3px;
        }
        .post__title {
          cursor: pointer;
        }

        .category {
          width: 338px;
          border-top: 2px dotted #999;
          border-left: 0;
          border-right: 0;
        }
        .category__list {
          display: flex;
          justify-content: space-between;
          border-bottom: 2px dotted #999999;
          padding: 7px;
        }
        .category__detail {
          width: 165px;
        }
        .category__detail span:first-child {
          margin-right: 10px;
        }
        .category__detail span:last-child {
          color: #55b2d4;
          font-weight: 500;
        }

        .playlist {
          display: grid;
          grid-template-columns: 0.06fr 0.08fr 0.46fr 0.4fr;
          width: 100%;
          border-top: 1px solid #999999;
        }
        .playlist span {
          border-bottom: 2px solid #999999;
          padding: 5px 0;
        }
        .playlist div {
          border-bottom: 1px dotted #999999;
          padding: 5px 0;
        }
        .playlist__header {
          background-color: #eeeeee;
          font-weight: 500;
        }
        .checkbox,
        .number {
          text-align: center;
        }
      `}</style>
    </>
  );
}

export default Home;
