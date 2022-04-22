import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const MainLayout: React.FC = () => {
  return (
    <>
      <Header />
      <main className="main--content">
        <Outlet/>
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;