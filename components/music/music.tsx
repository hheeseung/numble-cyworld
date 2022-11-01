import { playlist } from "../../data/playlist";
import Header from "../header/header";

function Music() {
  return (
    <div className="music">
      <Header title="오늘의 BGM" subtitle="TODAY CHOICE" />
      <div className="playlist header">
        <div className="playlist__checkbox">
          <input type="checkbox" />
        </div>
        <div className="playlist__number">번호</div>
        <div className="playlist__title">곡명</div>
        <div className="playlist__artist">아티스트</div>
      </div>
      {playlist.map((music, index) => (
        <div className="playlist" key={index}>
          <div className="playlist__checkbox">
            <input type="checkbox" />
          </div>
          <div className="playlist__number">{index + 1}</div>
          <div className="playlist__title">{music.title}</div>
          <div className="playlist__artist">{music.artist}</div>
        </div>
      ))}
      <style jsx>{`
        .music {
          width: 464px;
          height: 244px;
        }
        .playlist {
          display: flex;
          width: 100%;
          font-size: 13px;
          border-bottom: 1px dotted #999;
        }
        .playlist__checkbox {
          width: 10%;
          text-align: center;
        }
        .playlist__number {
          width: 10%;
          text-align: center;
        }
        .playlist__title {
          width: 50%;
        }
        .playlist__artist {
          width: 30%;
        }
        .header {
          background-color: #eeeeee;
          border-top: 1px solid #999999;
          border-bottom: 2px solid #999999;
          font-weight: 600;
        }
      `}</style>
    </div>
  );
}
export default Music;
