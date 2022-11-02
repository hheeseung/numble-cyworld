import { useQuery, useMutation } from "@apollo/client";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { DELETE_POST, GET_LIST, GET_POST } from "../../../API/query";
import Button from "../../../components/button/button";
import Header from "../../../components/header/header";

function ReadPost() {
  const router = useRouter();
  const postId = Number(router.query.postId);
  const { data } = useQuery(GET_POST, { variables: { postId } });

  const [deletePost] = useMutation(DELETE_POST);

  const onEdit = () => {
    router.push(`/diary/${postId}/edit`);
  };

  const onDelete = async () => {
    await deletePost({
      variables: { postId },
      // 삭제 성공 시 수행될 코드
      onCompleted: () => {
        alert("삭제 성공!");
      },
      // mutation 완료 후 다이어리 목록을 재요청해 삭제 후 목록으로 refresh
      refetchQueries: [{ query: GET_LIST }],
    });
    router.push("/diary");
  };

  return (
    <>
      <Header title="Diary" />
      <div className="diary">
        <div className="date">{data?.fetchBoard?.createdAt.slice(0, 10)}</div>
        <div className="contents">
          <h3 className="contents__title">{data?.fetchBoard?.title}</h3>
          <p className="contents__content">{data?.fetchBoard?.contents}</p>
        </div>
      </div>
      <div className="buttons">
        <Button text="수정하기" onClick={onEdit} />
        <Button text="삭제하기" onClick={onDelete} />
      </div>
      <Link href="/diary">
        <a className="back">&lt; 목록으로</a>
      </Link>
      <style jsx>{`
        .diary-header {
          display: flex;
          border-bottom: 1px solid #999;
          height: 24px;
        }
        .diary-header h3 {
          margin: 0;
          color: #55b2d4;
        }
        .diary-header span {
          margin-left: 10px;
        }
        .diary {
          border: 1px solid #dddddd;
          width: 100%;
          height: 266px;
          margin: 15px 0 20px 0;
        }
        .date {
          background-color: #dddddd;
          color: #666666;
          padding: 5px;
          font-size: 15px;
          font-weight: 600;
        }
        .contents {
          padding: 20px 30px;
        }
        .contents__title {
          font-size: 15px;
          text-align: center;
        }
        .contents__content {
          font-size: 13px;
          color: #666;
        }
        .buttons {
          text-align: center;
        }
        .back {
          font-size: 13px;
          text-decoration: underline;
        }
      `}</style>
    </>
  );
}

export default ReadPost;
