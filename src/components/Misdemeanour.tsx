import React, { useContext, useEffect, useState } from "react";
import { Misdemeanours, MisdemeanourRecord } from "../data/MisdemeanourRecord";
import FilteredMisdemeanourContext from "../hooks/FilteredMisdemeanourContext";
import MisdemeanourContext, { IMisdemeanourContext } from "../hooks/MisdemeanourContext";
import MisdmeanourTable from "./MisdemeanourTable";
import Select from "./Select";
 


const Misdemeanour: React.FC = () => {
  
  const {misdemeanourList, misdemeanourSetter} = useContext<IMisdemeanourContext>(MisdemeanourContext);
  const [filtered, setFiltered] = useState<MisdemeanourRecord[]>(misdemeanourList);
  const [option, setOption] = useState<Misdemeanours | 'all'>('all');

  useEffect(() => {
    if(option !== 'all'){
      const filteredRecords = misdemeanourList.filter((rec) => rec.misdemeanour === option);
      setFiltered([...filteredRecords]);
    }
    else{
      setFiltered([...misdemeanourList]);
    }
  }, [misdemeanourList, option]);

  return (
    <>
      <h1>Misdemeanours</h1>
      <Select option={option} update={setOption} />
      <FilteredMisdemeanourContext.Provider value={filtered}>
        <MisdmeanourTable />
      </FilteredMisdemeanourContext.Provider>
    </>
  );
}

export default Misdemeanour;
