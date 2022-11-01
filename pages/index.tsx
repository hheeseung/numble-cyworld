import BoardList from "../components/board_list/board_list";
import Category from "../components/category/category";
import Header from "../components/header/header";
import Music from "../components/music/music";

function Home() {
  return (
    <>
      <Header title="Update News" width="248px" border="1px solid #999;" />
      <div className="board">
        <BoardList />
        <Category />
      </div>
      <Music />
      <style jsx>{`
        .board {
          display: flex;
          width: 465px;
          height: 88px;
          margin-bottom: 15px;
        }
      `}</style>
    </>
  );
}

export default Home;
