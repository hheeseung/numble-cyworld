import Contents from './contents';
import Navbar from './navbar';
import Status from './status';
import UserInfo from './user_info';

function InnerBox() {
  return (
    <div className='inner-box'>
      <Status />
      <main className='main'>
        <UserInfo />
        <Contents />
      </main>
      <Navbar />
      <style jsx>{`
        .inner-box {
          position: absolute;
          top: 30px;
          left: 30px;
          background: url('/image/innerBox.png') center/cover no-repeat;
          width: 1300px;
          height: 875px;
          padding: 65px 70px;
        }
        .main {
          display: flex;
        }
      `}</style>
    </div>
  );
}

export default InnerBox;
