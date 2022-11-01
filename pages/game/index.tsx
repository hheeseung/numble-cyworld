import React, { useRef, useState } from "react";
import Header from "../../components/header/header";

function Game() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [word, setWord] = useState("코드캠프");
  const [result, setResult] = useState(false);
  const [visible, setVisible] = useState(true);
  const [inputText, setInputText] = useState("");
  const [lotto, setLotto] = useState([3, 5, 10, 24, 30, 34]);

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

  const onLottoStart = () => {
    let i = 0;
    while (i < 6) {
      let num = Math.floor(Math.random() * 45 + 1);
      if (lotto.indexOf(num) < 0) {
        lotto.splice(i, 1, num);
      }
      i++;
    }
    setLotto([...lotto]);
  };

  return (
    <>
      <Header title="Game" subtitle="TODAY CHOICE" />
      <section className="container">
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
              className="search-input"
              placeholder="단어를 입력하세요."
              value={inputText}
            />
            <button className="button">검색</button>
          </form>
          <p className="game__result">
            {visible ? "결과는?" : result ? "정답입니다!" : "오답입니다!"}
          </p>
        </div>
        <div className="lotto">
          <img src="/image/lotto.png" alt="lotto" />
          <p className="lotto__title">LOTTO</p>
          <p>버튼을 눌러 추첨하세요.</p>
          <div className="lotto__numbers">
            {lotto.map((i, index) => (
              <span key={index} className="lotto__number">
                {i}
              </span>
            ))}
          </div>
          <button className="button" onClick={onLottoStart}>
            추첨하기
          </button>
        </div>
      </section>
      <style jsx>{`
        p {
          margin: 0;
          padding: 0;
        }
        .container {
          height: 95%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-evenly;
        }
        .game,
        .lotto {
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
        .game__title,
        .lotto__title {
          margin: 5px 0;
          font-size: 1rem;
          font-weight: 600;
        }
        .game__result {
          margin: 10px 0;
        }
        .search-input,
        .lotto__numbers,
        .button {
          background-color: #fff;
          border: 1px solid #999999;
          border-radius: 5px;
          outline: none;
        }
        .search-input {
          padding: 3px;
        }
        .button {
          margin-left: 5px;
          padding: 3px 5px;
          margin-top: 5px;
          cursor: pointer;
        }
        .lotto__numbers {
          background-color: #ffe400;
          font-weight: 600;
          padding: 2px 5px;
          border-radius: 10px;
        }
        .lotto__number {
          margin: 0 5px;
        }
      `}</style>
    </>
  );
}

export default Game;
