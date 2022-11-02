import Image from "next/image";
import { useRef, useState } from "react";

function WordRelay() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [word, setWord] = useState("코드캠프");
  const [result, setResult] = useState(false);
  const [visible, setVisible] = useState(true);
  const [inputText, setInputText] = useState("");

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const currentText = e.currentTarget.value;
    setInputText(currentText);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (word[word.length - 1] === inputText?.charAt(0)) {
      setWord(inputText);
      setResult(true);
      setVisible(false);
      setInputText("");
    } else {
      setVisible(false);
      setResult(false);
    }
  };

  return (
    <div className="game">
      <Image
        src="/image/train.png"
        alt="game"
        layout="fixed"
        width="40px"
        height="20px"
      />
      <p className="game__title">끝말잇기</p>
      <p className="game__word">
        제시어: <span>{word}</span>
      </p>
      <form className="game__form" onSubmit={onSubmit}>
        <input
          ref={inputRef}
          onChange={onChange}
          type="text"
          className="word-input"
          placeholder="단어를 입력하세요."
          value={inputText}
        />
        <button className="button">입력</button>
      </form>
      <p className="game__result">
        {visible ? "결과는?" : result ? "정답입니다!" : "오답입니다!"}
      </p>
      <style jsx>{`
        p {
          margin: 0;
          padding: 0;
        }
        .game {
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: center;
          width: 222px;
          height: 168px;
          text-align: center;
          border: 1px solid #999999;
          border-radius: 10px;
          background-color: #f6f6f6;
          padding: 18px;
          font-size: 13px;
        }
        .game__title {
          margin: 5px 0;
          font-weight: 600;
        }
        .word-input {
          width: 136px;
          background-color: #fff;
          border: 1px solid #999999;
          outline: none;
          padding: 3px;
          border-radius: 3px;
        }
        .button {
          background-color: #fff;
          border: 1px solid #999999;
          outline: none;
          cursor: pointer;
          padding: 3px;
          border-radius: 3px;
        }
        .game__result {
          margin: 5px 0;
        }
      `}</style>
    </div>
  );
}

export default WordRelay;
