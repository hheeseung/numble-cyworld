import Image from "next/image";
import { IChildren } from "../../types/type";

function Background(props: IChildren) {
  return (
    <div className="img-container">
      <Image
        src="/image/background.png"
        alt="background-img"
        layout="fixed"
        width="1920px"
        height="935px"
      />
      <div className="innerBox">
        <Image
          src="/image/innerBox.png"
          alt="innerBox-img"
          width="1300px"
          height="875px"
        />
        <div className="children">{props.children}</div>
      </div>
      <style jsx>{`
        .img-container {
          position: relative;
        }
        .innerBox {
          position: absolute;
          top: 20px;
          left: 20px;
        }
        .children {
          position: absolute;
          top: 60px;
          left: 60px;
        }
      `}</style>
    </div>
  );
}
export default Background;
