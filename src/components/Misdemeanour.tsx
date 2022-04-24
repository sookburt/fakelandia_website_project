import React from "react";
import { useEffect, useState } from "react";
import generateMisdemeanours from "../data/generate_misdemenours";
import { Misdemeanours, MisdemeanourRecord } from "../data/MisdemeanourRecord";
import MisdemeanourContext from "../hooks/MisdemeanourContext";
import MisdmeanourTable from "./MisdemeanourTable";
import Select from "./Select";



const Misdemeanour: React.FC = () => {
  
  const [misdemeanours, setMisdemeanours] = useState<MisdemeanourRecord[]>([]);
  const [filtered, setFiltered] = useState<MisdemeanourRecord[]>(misdemeanours);
  const [option, setOption] = useState<Misdemeanours | 'all'>('all');
  
  const getMisdemeanourText = (misdemeanour:string) => {
    
    switch (misdemeanour){
      case 'rudeness':  return 'Mild Public Rudeness 🤪';
      case 'vegetables': return 'Not Eating Your Vegetables 🥗';
      case 'lift': return 'Speaking in a Lift 🗣';
      default: return 'Supporting Millwall 😈';
    }
  };

  useEffect(() => {
    if(option !== 'all'){
      const filteredRecords = misdemeanours.filter((rec) => rec.misdemeanour === option);
      setFiltered([...filteredRecords]);
    }
    else{
      setFiltered([...misdemeanours]);
    }
  }, [misdemeanours, option]);
    
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
      <h1>Misdemeanours</h1>
      <Select option={option} update={setOption} />
      <MisdemeanourContext.Provider value={filtered}>
        <MisdmeanourTable />
      </MisdemeanourContext.Provider>
    </>
  );
}

export default Misdemeanour;
