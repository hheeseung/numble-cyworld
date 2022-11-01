import { useQuery } from "@apollo/client";
import Link from "next/link";
import { GET_LIST } from "../../API/query";

function BoardList() {
  const { data } = useQuery(GET_LIST);
  return (
    <div className="post">
      <ul className="post__list">
        {data?.fetchBoards
          .map((post: { number: number; title: string }) => (
            <li key={post.number}>
              <span className="post__badge">다이어리</span>
              <Link href={`/diary/${post.number}`}>
                <span className="post__title">{post.title}</span>
              </Link>
            </li>
          ))
          .splice(0, 4)}
      </ul>
      <style jsx>{`
        .post {
          width: 253px;
          height: 70px;
        }
        .post__list {
          list-style: none;
          padding: 0;
          margin: 0;
          font-size: 13px;
          padding-top: 3px;
        }
        .post__list li {
          margin-bottom: 3px;
        }
        .post__badge {
          background-color: #ee3e61;
          color: #ffffff;
          font-size: 10px;
          font-weight: 600;
          padding: 2px;
          margin-right: 5px;
          border-radius: 3px;
        }
        .post__title {
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
export default BoardList;
