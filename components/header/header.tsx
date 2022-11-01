import { IHeader } from "../../types/type";

function Header({ title, subtitle, width, border }: IHeader) {
  return (
    <>
      <header className="header">
        <h3>{title}</h3>
        <span>{subtitle}</span>
      </header>
      <style jsx>{`
        .header {
          display: flex;
          align-items: center;
          border-bottom: ${border || "1px solid #999"};
          width: ${width};
        }
        .header h3 {
          font-size: 15px;
          margin: 0;
          color: #55b2d4;
        }
        .header span {
          font-size: 10px;
          margin-left: 10px;
        }
      `}</style>
    </>
  );
}
export default Header;
