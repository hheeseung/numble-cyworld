import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSmile,
  faPhone,
  faEnvelope,
  faHashtag,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

function Profile() {
  return (
    <>
      <aside className="aside">
        <div className="profile">
          <Image
            src="/image/CyworldProfile.png"
            alt="profile"
            layout="fixed"
            width="142px"
            height="123px"
          />
        </div>
        <div className="metadata">
          <ul className="metadata-list">
            <li>
              <span>
                <FontAwesomeIcon icon={faSmile} />
              </span>
              <span>이름</span>
            </li>
            <li>
              <span>
                <FontAwesomeIcon icon={faPhone} />
              </span>
              <span>Phone</span>
            </li>
            <li>
              <span>
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <span>E-mail</span>
            </li>
            <li>
              <span>
                <FontAwesomeIcon icon={faHashtag} />
              </span>
              <span>인스타그램</span>
            </li>
          </ul>
        </div>
        <div className="mood">
          <p>오늘의 기분</p>
          <select className="mood-select">
            <option value="joy">기쁨 😊</option>
            <option value="sadness">우울 😥</option>
            <option value="sleepy">졸림 😴</option>
          </select>
        </div>
      </aside>
      <style jsx>{`
        .aside {
          width: 208px;
          height: 440px;
          position: relative;
          margin-right: 5px;
          border: 1px solid #999999;
          border-radius: 10px;
          background-color: #ffffff;
          padding: 20px;
        }
        .profile {
          margin: 10px;
        }
        .metadata {
          width: 100%;
          border-top: 2px dotted #999999;
        }
        .metadata-list {
          list-style: none;
          padding: 0;
          font-size: 13px;
        }
        .metadata-list li {
          margin-bottom: 7px;
        }
        .metadata-list li span:first-child {
          margin-right: 10px;
        }
        .mood {
          position: absolute;
          bottom: 41px;
          font-size: 13px;
        }
        .mood p {
          margin: 0;
          margin-bottom: 8px;
        }
        .mood-select {
          width: 166px;
          padding: 3px;
          background-color: #eeeeee;
          font-size: 13px;
        }
      `}</style>
    </>
  );
}
export default Profile;
