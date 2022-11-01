import { useQuery, useMutation } from "@apollo/client";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { DELETE_POST, GET_LIST, GET_POST } from "../../../api/query";

function ReadPost() {
  const router = useRouter();
  const postId = Number(router.query.postId);
  const { data } = useQuery(GET_POST, { variables: { postId } });

  const [deletePost] = useMutation(DELETE_POST);

  const onEdit = () => {
    router.push(`/diary/${postId}/edit`);
  };

  const onDelete = () => {
    deletePost({
      variables: { postId },
      // 삭제 성공 시 수행될 코드
      onCompleted: () => {
        alert("삭제 성공!");
        router.push("/diary");
      },
      // mutation 완료 후 다이어리 목록을 재요청해 삭제 후 목록으로 refresh
      refetchQueries: [{ query: GET_LIST }],
    });
  };

  return (
    <>
      <header className="diary-header">
        <h3>Diary</h3>
        <span>&nbsp;</span>
      </header>
      <div className="diary">
        <div className="date">{data?.fetchBoard?.createdAt.slice(0, 10)}</div>
        <div className="contents">
          <h3 className="contents__title">{data?.fetchBoard?.title}</h3>
          <p className="contents__content">{data?.fetchBoard?.contents}</p>
        </div>
      </div>
      <div className="buttons">
        <button onClick={onEdit}>수정하기</button>
        <button onClick={onDelete}>삭제하기</button>
      </div>
      <Link href="/diary">
        <a className="back">&lt; 목록으로</a>
      </Link>
      <style jsx>{`
        .diary-header {
          display: flex;
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
        .diary {
          border: 1px solid #dddddd;
          width: 100%;
          height: 480px;
          margin: 15px 0 20px 0;
        }
        .date {
          background-color: #dddddd;
          color: #666666;
          padding: 10px;
          font-size: 17px;
          font-weight: 600;
        }
        .contents {
          padding: 20px 30px;
        }
        .contents__title {
          text-align: center;
        }
        .contents__content {
          color: #666;
        }
        .buttons {
          text-align: center;
          margin-bottom: 30px;
        }
        .buttons button {
          padding: 8px;
          font-size: 15px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          background-color: #d9d9d9;
          color: #666;
          font-weight: 600;
        }
        .buttons button:first-child {
          margin-right: 25px;
        }
        .back {
          text-decoration: underline;
        }
      `}</style>
    </>
  );
}

export default ReadPost;
