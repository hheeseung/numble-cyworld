import {useRouter} from 'next/router';
import DiaryScreen from './diary_screen';
import GameScreen from './game_screen';
import HomeScreen from './home_screen';

function Contents() {
  const router = useRouter();

  return (
    <section className='section'>
      {router.pathname === '/' ? <HomeScreen /> : null}
      {router.pathname === '/game' ? <GameScreen /> : null}
      {router.pathname === '/diary' ? <DiaryScreen /> : null}
      <style jsx>{`
        .section {
          width: 880px;
          height: 718px;
          border: 1px solid #999999;
          border-radius: 10px;
          background-color: #ffffff;
        }
      `}</style>
    </section>
  );
}

export default Contents;
