function Header() {
  return (
    <header className='header'>
      <div className='visit'>
        <span>TODAY</span>
        <span>0</span>
        <span>│</span>
        <span>TOTAL</span>
        <span>11203</span>
      </div>
      <div className='title'>사이좋은 사람들, 싸이월드</div>
      <div className='private'>
        <span>사생활보호설정</span>
        <span> ▶</span>
      </div>
      <style jsx>{`
        .header {
          display: flex;
          justify-content: space-between;
        }
        .visit {
          width: 270px;
          display: flex;
          justify-content: space-evenly;
          font-size: 0.8rem;
          padding: 7px 25px;
        }
        .visit span:nth-child(2) {
          color: #ff0000;
        }
        .title {
          width: 750px;
          font-size: 1.2rem;
          font-weight: 700;
          color: #55b2d4;
        }
        .private {
          width: 100px;
          font-size: 0.8rem;
        }
        .private span:last-child {
          color: #ff6400;
        }
      `}</style>
    </header>
  );
}

export default Header;
