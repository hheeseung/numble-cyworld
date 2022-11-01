import { playlist } from "../../data/playlist";
import Header from "../header/header";

function Music() {
  return (
    <div className="music">
      <Header title="오늘의 BGM" subtitle="TODAY CHOICE" />
      <div className="playlist">
        <span className="playlist__header checkbox">
          <input type="checkbox" />
        </span>
        <span className="playlist__header number">번호</span>
        <span className="playlist__header">곡명</span>
        <span className="playlist__header">아티스트</span>
        {playlist.map((music, index) => (
          <>
            <div className="checkbox">
              <input type="checkbox" />
            </div>
            <div className="number">{index + 1}</div>
            <div>{music.title}</div>
            <div>{music.artist}</div>
          </>
        ))}
      </div>
      <style jsx>{`
        .playlist {
          display: grid;
          grid-template-columns: 0.06fr 0.08fr 0.46fr 0.4fr;
          width: 100%;
          border-top: 1px solid #999999;
        }
        .playlist span {
          border-bottom: 2px solid #999999;
          padding: 5px 0;
        }
        .playlist div {
          border-bottom: 1px dotted #999999;
          padding: 5px 0;
        }
        .playlist__header {
          background-color: #eeeeee;
          font-weight: 500;
        }
        .checkbox,
        .number {
          text-align: center;
        }
      `}</style>
    </div>
  );
}
export default Music;
