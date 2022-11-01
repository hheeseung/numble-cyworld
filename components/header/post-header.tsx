interface IPostHeader {
  title: string;
  subtitle: string;
}

function PostHeader({ title, subtitle }: IPostHeader) {
  return (
    <header className="post-header">
      <h3>{title}</h3>
      <span>│</span>
      <h3>{subtitle}</h3>
      <style jsx>{`
        .post-header {
          display: flex;
          align-items: center;
          border-bottom: 1px solid #999;
          color: #55b2d4;
        }
        .post-header h3 {
          margin: 0;
          margin-bottom: 5px;
        }
      `}</style>
    </header>
  );
}
export default PostHeader;
