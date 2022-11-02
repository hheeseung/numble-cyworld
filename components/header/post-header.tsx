interface IPostHeader {
  title: string;
  subtitle: string;
}

function PostHeader({ title, subtitle }: IPostHeader) {
  return (
    <header className="post-header">
      <div className="post-header__title">
        <h4>{title}</h4>
        <span>│</span>
        <h4>{subtitle}</h4>
      </div>
      <style jsx>{`
        .post-header {
          border-bottom: 1px solid #999;
        }
        .post-header__title {
          width: 110px;
          display: flex;
          justify-content: space-evenly;
          align-items: center;
          margin-bottom: 5px;
          color: #55b2d4;
        }
        .post-header h4 {
          margin: 0;
        }
      `}</style>
    </header>
  );
}
export default PostHeader;
