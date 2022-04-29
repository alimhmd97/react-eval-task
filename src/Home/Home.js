import BasicModal from "../UI/Modal";
import Header from "./Header/Header";
import MiniDrawer from "./sideBar/UisidBar";

function Home() {
  return (
    <div>
      <div style={{ display: "none" }}>
        {" "}
        <BasicModal />
      </div>
      <Header />
      <MiniDrawer />
    </div>
  );
}

export { Home };
