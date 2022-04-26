import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import generateMisdemeanours from "../data/generate_misdemenours";
import { MisdemeanourRecord } from "../data/MisdemeanourRecord";
import MisdemeanourContext from "../hooks/MisdemeanourContext";
import Footer from "./Footer";
import Header from "./Header";

const MainLayout: React.FC = () => {

  const [misdemeanours, setMisdemeanours] = useState<MisdemeanourRecord[]>([]);

  const getMisdemeanourText = (misdemeanour:string) => {
    
    switch (misdemeanour){
      case 'rudeness':  return 'Mild Public Rudeness 🤪';
      case 'vegetables': return 'Not Eating Your Vegetables 🥗';
      case 'lift': return 'Speaking in a Lift 🗣';
      default: return 'Supporting Millwall 😈';
    }
  };

  useEffect(() =>  {
    const callApi = async () => {
      const records = await generateMisdemeanours(10);
      records.map(record =>  record.misdemeanourDescription = getMisdemeanourText(record.misdemeanour));      
      setMisdemeanours([...records]);
    }
    callApi();
  }, []);

  return (
    <>
      <Header />
      <main className="main--content">
        <MisdemeanourContext.Provider value={{misdemeanourList:misdemeanours, misdemeanourSetter:setMisdemeanours}}>
          <Outlet/>
        </MisdemeanourContext.Provider>
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;