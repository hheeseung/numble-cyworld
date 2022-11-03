import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { CREATE_POST, GET_LIST } from "../../../API/query";
import Button from "../../../components/button/button";
import TextForm from "../../../components/form/text_form";
import PostHeader from "../../../components/header/post-header";

function CreatePost() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [createPost] = useMutation(CREATE_POST);

  const onTitleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const currInput = e.currentTarget.value;
    setTitle(currInput);
  };

  const onContentsChange = (e: React.FormEvent<HTMLTextAreaElement>) => {
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
      <PostHeader title="Diary" subtitle="글 등록" />
      <TextForm
        onTitleChange={onTitleChange}
        onContentsChange={onContentsChange}
      />
      <div className="button-container">
        <Button text="등록하기" onClick={onSubmit} />
        <Button text="취소하기" onClick={onCancel} />
      </div>
      <style jsx>{`
        .button-container {
          text-align: center;
          margin-bottom: 30px;
        }
      `}</style>
    </>
  );
}

export default CreatePost;
