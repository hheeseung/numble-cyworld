import Contents from './contents';
import InnerBox from './inner_box';
import Status from './status';

function Background() {
  return (
    <div className='background'>
      <InnerBox />
      <style jsx>{`
        .background {
          position: relative;
          background: url('/image/background.png') center/cover no-repeat;
          width: 100vw;
          height: 100vh;
        }
      `}</style>
    </div>
  );
}

export default Background;
