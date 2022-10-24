function Diary() {
  return (
    <>
      <header className='diary-header'>
        <h3>Diary</h3>
        <span>TODAY STORY</span>
      </header>
      <style jsx>{`
        .diary-header {
          display: flex;
          border-bottom: 1px solid #999;
        }
        .diary-header h3 {
          margin: 0;
          color: #55b2d4;
        }
        .diary-header span {
          font-size: 0.8rem;
          line-height: 1.8rem;
          margin-left: 10px;
        }
      `}</style>
    </>
  );
}

export default Diary;
