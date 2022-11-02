import GetLotto from "../../components/game/get_lotto";
import WordRelay from "../../components/game/word_relay";
import Header from "../../components/header/header";

function Game() {
  return (
    <>
      <Header title="Game" subtitle="TODAY CHOICE" />
      <section className="game-container">
        <WordRelay />
        <GetLotto />
      </section>
      <style jsx>{`
        .game-container {
          height: 95%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-evenly;
        }
      `}</style>
    </>
  );
}

export default Game;
