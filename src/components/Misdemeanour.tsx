import { useEffect, useState } from "react";
import generateMisdemeanours from "../data/generate_misdemenours";
import { Misdemeanours, MisdemeanourRecord } from "../data/MisdemeanourRecord";
import MisdemeanourRow from "./MisdemeanourRow";
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
      default: return 'Supporting Manchester United 😈';
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
      { /* TODO: create components to display misdemeanours and pass via useContext */ }
      <Select option={option} update={setOption} />
      <table className="misdemeanour-table">
        <caption>Misdemeanours of our citizens with punishment ideas.</caption>
        <thead>
          <tr>
            <th>Citizen Id</th>
            <th>Date</th>
            <th>Misdemeanour</th>
            <th>Punishment Idea</th>
          </tr>
        </thead>
        <tbody>
          {
            filtered.map((record) => <MisdemeanourRow  {...record}/>)
          }
        </tbody>
      </table>
    </>
  );
}

export default Misdemeanour;
