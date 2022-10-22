import Contents from './contents';
import Status from './status';

function Background() {
  return (
    <div>
      <div className='background'>
        <div className='innerBox'>
          <Status />
          <Contents />
        </div>
      </div>
      <style jsx>{`
        .background {
          position: relative;
          background: url('/image/background.png') center/cover no-repeat;
          width: 100vw;
          height: 100vh;
        }
        .innerBox {
          position: absolute;
          top: 30px;
          left: 30px;
          background: url('/image/innerBox.png') center/cover no-repeat;
          width: 1300px;
          height: 875px;
          padding: 65px 70px;
        }
      `}</style>
    </div>
  );
}

export default Background;
