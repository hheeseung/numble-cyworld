function HeaderLayout() {
  return (
    <header className="header">
      <div className="group">
        <div className="visit">
          <span>TODAY</span>
          <span>0</span>
          <span>│</span>
          <span>TOTAL</span>
          <span>11203</span>
        </div>
        <div className="title">사이좋은 사람들, 싸이월드</div>
      </div>
      <div className="private">
        <span>사생활보호설정</span>
        <span> ▶</span>
      </div>
      <style jsx>{`
        .header {
          display: flex;
          justify-content: space-between;
          width: 756px;
          height: 20px;
          position: absolute;
        }
        .group {
          display: flex;
          justify-content: space-between;
          width: 378px;
          height: 16px;
          position: absolute;
          left: 44px;
          top: 26px;
        }
        .visit {
          width: 131px;
          height: 15px;
          display: flex;
          justify-content: space-evenly;
          font-size: 9px;
        }
        .visit span:nth-child(2) {
          color: #ff0000;
        }
        .title {
          display: flex;
          justify-content: space-evenly;
          width: 200px;
          height: 16px;
          font-weight: 700;
          color: #55b2d4;
          font-size: 16px;
          line-height: 16px;
          text-align: center;
        }
        .private {
          position: absolute;
          top: 28px;
          right: 24px;
          width: 83px;
          height: 18px;
          font-size: 11px;
        }
        .private span:last-child {
          color: #ff6400;
        }
      `}</style>
    </header>
  );
}
export default HeaderLayout;
