import { IChildren } from "../../types/type";
import Profile from "../profile/profile";
import Background from "../background/background";
import HeaderLayout from "../header/header_layout";
import Navbar from "../navbar/navbar";

function Layout(props: IChildren) {
  return (
    <>
      <Background>
        <HeaderLayout />
        <Navbar />
        <main className="main">
          <Profile />
          <section className="section">{props.children}</section>
        </main>
      </Background>
      <style jsx>{`
        .main {
          display: flex;
          position: absolute;
          top: 44px;
          left: 6px;
        }
        .section {
          width: 524px;
          height: 442px;
          border: 1px solid #999999;
          border-radius: 10px;
          background-color: #ffffff;
          padding: 25px;
        }
      `}</style>
    </>
  );
}
export default Layout;
