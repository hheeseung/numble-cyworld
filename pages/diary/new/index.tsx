import { gql, useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { GET_LIST } from "..";
import Button from "../../../components/button/button";

const CREATE_POST = gql`
  mutation createPost($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;

function CreatePost() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const textRef = useRef<HTMLTextAreaElement>(null);
  const [createPost] = useMutation(CREATE_POST);

  const onInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    const currInput = e.currentTarget.value;
    setTitle(currInput);
  };

  const onTextChange = (e: React.FormEvent<HTMLTextAreaElement>) => {
    const currText = e.currentTarget.value;
    setContents(currText);
  };

  const onSubmit = async () => {
    const result = await createPost({
      variables: { title, contents, writer: "User811" },
      onCompleted: () => {
        alert("등록 완료!");
      },
      refetchQueries: [{ query: GET_LIST }],
    });
    router.push(`/diary/${result.data.createBoard.number}`);
  };

  const onCancel = () => {
    router.push("/diary");
  };

  return (
    <>
      <header className="diary-header">
        <h3>Diary</h3>
        <span>│</span>
        <h3>글 등록</h3>
      </header>
      <div className="container">
        <div>
          <input
            ref={inputRef}
            className="post-title"
            type="text"
            placeholder="제목을 입력하세요."
            onChange={onInputChange}
            required
            autoFocus
          />
        </div>
        <div>
          <textarea
            ref={textRef}
            className="post-text"
            placeholder="내용을 입력하세요."
            onChange={onTextChange}
            required
          ></textarea>
        </div>
      </div>
      <div className="button-container">
        <Button text="등록하기" onClick={onSubmit} />
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

export default CreatePost;
