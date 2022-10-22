import UserInfo from './user_info';

function Contents() {
  return (
    <main className='main'>
      <UserInfo />
      <section className='section'></section>
      <style jsx>{`
        .main {
          display: flex;
        }
        .section {
          width: 880px;
          height: 718px;
          border: 1px solid #999999;
          border-radius: 10px;
          background-color: #ffffff;
        }
      `}</style>
    </main>
  );
}

export default Contents;
