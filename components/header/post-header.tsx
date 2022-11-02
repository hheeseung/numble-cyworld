interface IPostHeader {
  title: string;
  subtitle: string;
}

function PostHeader({ title, subtitle }: IPostHeader) {
  return (
    <header className="post-header">
      <h4>{title}</h4>
      <span>│</span>
      <h4>{subtitle}</h4>
      <style jsx>{`
        .post-header {
          display: flex;
          align-items: center;
          border-bottom: 1px solid #999;
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
