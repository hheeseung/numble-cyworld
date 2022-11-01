import BoardList from "../components/board_list/board_list";
import Category from "../components/category/category";
import Header from "../components/header/header";
import Music from "../components/music/music";

function Home() {
  return (
    <>
      <Header title="Update News" width="420px" border="2px solid #999;" />
      <div className="board">
        <BoardList />
        <Category />
      </div>
      <Music />
      <style jsx>{`
        .board {
          display: flex;
          margin-bottom: 50px;
        }
      `}</style>
    </>
  );
}

export default Home;
