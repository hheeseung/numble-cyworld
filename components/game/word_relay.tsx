import { useState } from "react";

function WordRelay() {
  const [lotto, setLotto] = useState([3, 5, 10, 24, 30, 34]);

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
      <style jsx>{`
        p {
          margin: 0;
          padding: 0;
        }
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
        .lotto__title {
          margin: 5px 0;
          font-size: 1rem;
          font-weight: 600;
        }
        .lotto__numbers,
        .button {
          background-color: #fff;
          border: 1px solid #999999;
          border-radius: 5px;
          outline: none;
        }
        .lotto__numbers {
          margin: 10px 0;
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
    </div>
  );
}
export default WordRelay;
