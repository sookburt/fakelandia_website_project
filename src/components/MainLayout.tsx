import { Outlet } from "react-router-dom";
import Nav from "./Nav";

const MainLayout: React.FC = () => {
  return (
    <>
      <header><Nav/></header>
      <main className="main--content">
        <Outlet/>
      </main>
    </>
  );
};

export default MainLayout;