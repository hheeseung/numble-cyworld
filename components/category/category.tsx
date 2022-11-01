function Category() {
  return (
    <div className="category">
      <div className="category__list">
        <div className="category__detail">
          <span>다이어리</span>
          <span>0/65</span>
        </div>
        <div className="category__detail">
          <span>사진첩</span>
          <span>0/265</span>
        </div>
      </div>
      <div className="category__list">
        <div className="category__detail">
          <span>게시판</span>
          <span>0/15</span>
        </div>
        <div className="category__detail">
          <span>방명록</span>
          <span>0/15</span>
        </div>
      </div>
      <style jsx>{`
        .category {
          width: 194px;
          height: 54px;
          font-size: 13px;
          border-top: 2px dotted #999;
          border-left: 0;
          border-right: 0;
        }
        .category__list {
          display: flex;
          justify-content: space-between;
          border-bottom: 2px dotted #999999;
          padding: 2px;
        }
        .category__detail {
          width: 165px;
        }
        .category__detail span:first-child {
          margin-right: 10px;
        }
        .category__detail span:last-child {
          color: #55b2d4;
          font-weight: 500;
        }
      `}</style>
    </div>
  );
}
export default Category;
