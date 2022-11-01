import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { GET_LIST, GET_POST, UPDATE_POST } from "../../../api/query";
import Button from "../../../components/button/button";
import TextForm from "../../../components/form/text_form";
import PostHeader from "../../../components/header/post-header";

function UpdatePost() {
  const router = useRouter();
  const postId = Number(router.query.postId);
  const number = postId;
  const inputRef = useRef<HTMLInputElement>(null);
  const textRef = useRef<HTMLTextAreaElement>(null);
  const { data, refetch } = useQuery(GET_POST, { variables: { postId } });
  const [updatePost] = useMutation(UPDATE_POST);
  const [title, setTitle] = useState(data?.fetchBoard?.title);
  const [contents, setContents] = useState(data?.fetchBoard?.contents);

  const onTitleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const currInput = e.currentTarget.value;
    setTitle(currInput);
  };

  const onContentsChange = (e: React.FormEvent<HTMLTextAreaElement>) => {
    const currText = e.currentTarget.value;
    setContents(currText);
  };

  const onUpdate = () => {
    updatePost({
      variables: {
        number,
        title,
        contents,
        writer: "User811",
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
      <PostHeader title="Diary" subtitle="글 수정" />
      <TextForm
        inputRef={inputRef}
        textRef={textRef}
        onTitleChange={onTitleChange}
        onContentsChange={onContentsChange}
        title={title}
        contents={contents}
      />
      <div className="button-container">
        <Button text="등록하기" onClick={onUpdate} />
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

export default UpdatePost;
