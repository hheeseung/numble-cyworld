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
          width: 420px;
          margin-right: 20px;
          padding-top: 7px;
        }
        .post__list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .post__list li {
          margin-bottom: 7px;
        }
        .post__badge {
          background-color: #ee3e61;
          color: #ffffff;
          font-size: 0.8rem;
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
