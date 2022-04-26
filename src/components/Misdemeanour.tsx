import React, { useContext, useEffect, useState } from "react";
import { Misdemeanours, MisdemeanourRecord } from "../data/MisdemeanourRecord";
import FilteredMisdemeanourContext from "../hooks/FilteredMisdemeanourContext";
import MisdemeanourContext, { IMisdemeanourContext } from "../hooks/MisdemeanourContext";
import MisdmeanourTable from "./MisdemeanourTable";
import Select from "./Select";
 
const Misdemeanour: React.FC = () => {
  
  const {misdemeanourList} = useContext<IMisdemeanourContext>(MisdemeanourContext);
  const [filtered, setFiltered] = useState<MisdemeanourRecord[]>(misdemeanourList);
  const [option, setOption] = useState<Misdemeanours | ''>('');

  useEffect(() => {
    if(option !== ''){
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
      <label className="filter--label" htmlFor='misdemeanourSelect'>Select Misdemeanour:</label>
      <Select option={option} update={setOption} />
      <FilteredMisdemeanourContext.Provider value={filtered}>
        <MisdmeanourTable />
      </FilteredMisdemeanourContext.Provider>
    </>
  );
}

export default Misdemeanour;
