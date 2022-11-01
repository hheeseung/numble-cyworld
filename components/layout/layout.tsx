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
        }
        .section {
          width: 880px;
          height: 718px;
          border: 1px solid #999999;
          border-radius: 10px;
          background-color: #ffffff;
          padding: 30px 50px;
        }
      `}</style>
    </>
  );
}
export default Layout;
