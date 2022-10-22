import Navbar from '../navbar/navbar';
import Header from '../header/header';
import Aside from '../aside/user_info';

type Props = {
  children: React.ReactNode;
};

function Layout(props: Props) {
  return (
    <div className='background'>
      <div className='inner-box'>
        <Navbar />
        <Header />
        <main className='main'>
          <Aside />
          <section className='section'>{props.children}</section>
        </main>
      </div>
      <style jsx>{`
        .background {
          position: relative;
          background: url('/image/background.png') center/cover no-repeat;
          width: 1920px;
          height: 937px;
        }
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
        .section {
          width: 880px;
          height: 718px;
          border: 1px solid #999999;
          border-radius: 10px;
          background-color: #ffffff;
          padding: 30px 50px;
        }
      `}</style>
    </div>
  );
}

export default Layout;
