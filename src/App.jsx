import { Fragment } from "react";
import HomePage from "./pages/Home/HomePage";
import SideBar from "./components/SideBar/SideBar";

function App() {
  return (
    <Fragment>
      <HomePage />
      <SideBar />
    </Fragment>
  );
}

export default App;
