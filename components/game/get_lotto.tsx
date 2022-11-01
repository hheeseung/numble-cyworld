import { useRef, useState } from "react";

function GetLotto() {
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
      <img src="/image/train.png" alt="game" />
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
        <button className="button">검색</button>
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
          align-items: center;
          justify-content: space-evenly;
          width: 300px;
          height: 220px;
          text-align: center;
          border: 1px solid #999999;
          border-radius: 10px;
          background-color: #f6f6f6;
          padding: 22px 28px;
          font-size: 0.9rem;
        }
        .game__title {
          margin: 5px 0;
          font-size: 1rem;
          font-weight: 600;
        }
        .word-input {
          background-color: #fff;
          border: 1px solid #999999;
          border-radius: 5px;
          outline: none;
          padding: 3px;
        }
        .button {
          margin-left: 5px;
          padding: 3px 5px;
          margin-top: 5px;
          cursor: pointer;
          background-color: #fff;
          border: 1px solid #999999;
          border-radius: 5px;
          outline: none;
        }
        .game__result {
          margin: 10px 0;
        }
      `}</style>
    </div>
  );
}

export default GetLotto;
