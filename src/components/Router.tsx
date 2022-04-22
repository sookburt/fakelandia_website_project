import { Routes, Route } from "react-router-dom";
import Confession from "./Confession";
import Home from "./Home";
import MainLayout from "./MainLayout";
import Misdemeanour from "./Misdemeanour";
import NotFound from "./NotFound";

const Router: React.FC = () => {
  return (
  <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home/>}/>
        <Route path='Misdemeanour' element={<Misdemeanour/>}/>
        <Route path='Confession' element={<Confession/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Route>
  </Routes>
  )
}

export default Router;