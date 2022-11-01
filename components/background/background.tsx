import Image from "next/image";
import { IChildren } from "../../types/type";

function Background(props: IChildren) {
  return (
    <div className="img-container">
      <Image
        src="/image/background.png"
        alt="background-img"
        layout="fixed"
        width="1024px"
        height="600px"
      />
      <div className="innerBox">
        <Image
          src="/image/innerBox.png"
          alt="innerBox-img"
          width="808px"
          height="544px"
        />
        <div className="children">{props.children}</div>
      </div>
      <style jsx>{`
        .img-container {
          position: relative;
        }
        .innerBox {
          position: absolute;
          top: 24px;
          left: 26px;
        }
        .children {
          position: absolute;
          top: 24px;
          left: 26px;
        }
      `}</style>
    </div>
  );
}
export default Background;
