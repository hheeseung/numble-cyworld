import { gql, useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { GET_POST } from ".";
import { GET_LIST } from "..";
import Button from "../../../components/button/button";

const UPDATE_POST = gql`
  mutation updatePost(
    $number: Int
    $writer: String
    $title: String
    $contents: String
  ) {
    updateBoard(
      number: $number
      writer: $writer
      title: $title
      contents: $contents
    ) {
      _id
      number
      message
    }
  }
`;

function UpdatePost() {
  const inputRef = useRef<HTMLInputElement>(null);
  const textRef = useRef<HTMLTextAreaElement>(null);
  const router = useRouter();
  const postId = Number(router.query.postId);
  const { data, refetch } = useQuery(GET_POST, {
    variables: { postId },
  });
  const [updatePost] = useMutation(UPDATE_POST);
  const [title, setTitle] = useState(data?.fetchBoard?.title);
  const [contents, setContents] = useState(data?.fetchBoard?.contents);
  const number = postId;

  const onInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    const currInput = e.currentTarget.value;
    setTitle(currInput);
  };

  const onTextChange = (e: React.FormEvent<HTMLTextAreaElement>) => {
    const currText = e.currentTarget.value;
    setContents(currText);
  };

  const onUpdate = () => {
    updatePost({
      variables: {
        number,
        title,
        contents,
        writer: "본인",
      },
      onCompleted: () => {
        alert("수정 완료!");
        router.push(`/diary/${postId}`);
      },
      refetchQueries: [{ query: GET_LIST }],
    });
    refetch();
  };

  const onCancel = () => {
    router.push(`/diary/${postId}`);
  };

  return (
    <>
      <header className="diary-header">
        <h3>Diary</h3>
        <span>│</span>
        <h3>글 수정</h3>
      </header>
      <div className="container">
        <div>
          <input
            ref={inputRef}
            className="post-title"
            type="text"
            value={title}
            onChange={onInputChange}
            required
            autoFocus
          />
        </div>
        <div>
          <textarea
            ref={textRef}
            className="post-text"
            value={contents}
            onChange={onTextChange}
            required
          ></textarea>
        </div>
      </div>
      <div className="button-container">
        <Button text="수정하기" onClick={onUpdate} />
        <Button text="취소하기" onClick={onCancel} />
      </div>
      <style jsx>{`
        .diary-header {
          display: flex;
          align-items: center;
          border-bottom: 1px solid #999;
          color: #55b2d4;
        }
        .diary-header h3 {
          margin: 0;
          margin-bottom: 5px;
        }
        .container {
          margin: 15px 0;
          padding: 15px;
          border: 1px solid #dddddd;
        }
        .post-title,
        .post-text {
          width: 100%;
          border: 1px solid #ddd;
          padding: 5px;
        }
        .post-title:focus,
        .post-text:focus {
          outline: none;
        }
        .post-title {
          margin-bottom: 15px;
        }
        .post-text {
          height: 400px;
        }
        .button-container {
          text-align: center;
          margin-bottom: 30px;
        }
      `}</style>
    </>
  );
}

export default UpdatePost;
