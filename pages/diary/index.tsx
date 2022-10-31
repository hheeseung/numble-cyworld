import { gql, useQuery } from "@apollo/client";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export const GET_LIST = gql`
  query getBoards {
    fetchBoards {
      number
      createdAt
      title
    }
  }
`;

function Diary() {
  const { data } = useQuery(GET_LIST);
  const router = useRouter();

  const onClick = () => {
    router.push("/diary/new");
  };

  return (
    <>
      <header className="diary-header">
        <div className="category-title">
          <h3>Diary</h3>
          <span>TODAY STORY</span>
        </div>
        <div>
          <button className="new-post-btn" onClick={onClick}>
            다이어리 작성
          </button>
        </div>
      </header>
      {data?.fetchBoards
        .map((post: { number: number; createdAt: string; title: string }) => (
          <div key={post.number} className="board-list">
            <div className="post">
              <p className="post__date">{post.createdAt.slice(0, 10)}</p>
              <p className="post__title">제목: {post.title}</p>
            </div>
            <div className="more-info">
              <Link href={`/diary/${post.number}`}>자세히 보러가기 &gt;</Link>
            </div>
          </div>
        ))
        .splice(0, 5)}
      <style jsx>{`
        .diary-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #999;
        }
        .diary-header h3 {
          margin: 0;
          color: #55b2d4;
        }
        .diary-header span {
          font-size: 0.8rem;
          line-height: 1.8rem;
          margin-left: 10px;
        }
        .category-title {
          display: flex;
        }
        .new-post-btn {
          border: 1px solid #ababab;
          background-color: #ffffff;
          padding: 3px 10px;
          border-radius: 5px;
          cursor: pointer;
        }
        .new-post-btn:hover {
          background-color: #ababab;
          color: #ffffff;
        }
        .board-list {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border: 1px solid #dddddd;
          margin: 20px 0;
          padding: 5px 20px;
          color: #999999;
        }
        .post__title {
          color: #343131;
          font-weight: 600;
        }
        .post__date {
          width: fit-content;
          background-color: #55b2d4;
          color: #ffffff;
          font-weight: 600;
          font-size: 15px;
          padding: 3px 5px;
          border-radius: 5px;
        }
        .more-info {
          color: #999999;
          text-decoration: underline;
        }
      `}</style>
    </>
  );
}

export default Diary;
