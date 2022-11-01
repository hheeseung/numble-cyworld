import { IHeader } from "../../types/type";

function Header({ title, subtitle, width, border }: IHeader) {
  return (
    <>
      <header className="header">
        <h3>{title}</h3>
        <span>{subtitle}&nbsp;</span>
      </header>
      <style jsx>{`
        .header {
          display: flex;
          border-bottom: ${border || "1px solid #999"};
          width: ${width};
        }
        .header h3 {
          margin: 0;
          color: #55b2d4;
        }
        .header span {
          font-size: 0.8rem;
          line-height: 1.8rem;
          margin-left: 10px;
        }
      `}</style>
    </>
  );
}
export default Header;
