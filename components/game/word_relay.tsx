import Image from "next/image";
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
      <Image
        src="/image/lotto.png"
        alt="lotto"
        layout="fixed"
        width="34px"
        height="36px"
      />
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
        .lotto__title {
          margin: 5px 0;
          font-weight: 600;
        }
        .lotto__numbers,
        .button {
          background-color: #fff;
          border: 1px solid #999999;
          border-radius: 3px;
          outline: none;
        }
        .lotto__numbers {
          width: 130px;
          height: 20px;
          margin: 2px;
        }
        .button {
          cursor: pointer;
          padding: 3px;
        }
        .lotto__numbers {
          background-color: #ffe400;
          font-weight: 600;
          margin: 4px;
        }
        .lotto__number {
          margin: 0 4px;
        }
      `}</style>
    </div>
  );
}
export default WordRelay;
