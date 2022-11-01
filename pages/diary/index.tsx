import { useQuery } from "@apollo/client";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { GET_LIST } from "../../API/query";
import Header from "../../components/header/header";

function Diary() {
  const { data } = useQuery(GET_LIST);
  const router = useRouter();

  const onClick = () => {
    router.push("/diary/new");
  };

  return (
    <>
      <Header title="Diary" subtitle="TODAY STORY" />
      <button className="write-btn" onClick={onClick}>
        다이어리 작성
      </button>
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
        p {
          margin: 0;
          padding: 0;
        }
        .write-btn {
          position: absolute;
          top: 20px;
          right: 27px;
          border: 1px solid #ababab;
          background-color: #ffffff;
          padding: 3px 10px;
          border-radius: 5px;
          cursor: pointer;
        }
        .write-btn:hover {
          background-color: #ababab;
          color: #ffffff;
        }
        .board-list {
          height: 65px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border: 1px solid #dddddd;
          margin: 10px 0;
          font-size: 13px;
        }
        .post {
          display: flex;
          flex-direction: column;
          padding: 10px;
          font-size: 13px;
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
          padding: 2px 4px;
          margin-bottom: 5px;
          border-radius: 4px;
        }
        .more-info {
          color: #999999;
          text-decoration: underline;
          padding: 10px;
        }
      `}</style>
    </>
  );
}

export default Diary;
