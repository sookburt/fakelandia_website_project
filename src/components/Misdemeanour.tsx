import { useEffect, useState } from "react";
import generateMisdemeanours from "../data/generate_misdemenours";
import { MisdemeanourRecord } from "../data/MisdemeanourRecord";
import MisdemeanourRow from "./MisdemeanourRow";



const Misdemeanour: React.FC = () => {

  const [filter, setFilter] = useState(10);
  const updateFilter = (value: string) => {
    const num = parseInt(value);
    if(num !== filter){
      setFilter(num);
    }
  };
  const [misdemeanours, setMisdemeanours] = useState<MisdemeanourRecord[]>([]);


  useEffect(() =>  {
    const callApi = async () => {
      const records = await generateMisdemeanours(filter);
      records.map(record =>  record.misdemeanourDescription = getMisdemeanourText(record.misdemeanour));
      setMisdemeanours(records);
    }
    callApi(); // TODO: unsure why but this gets called twice each time a change is made
  }, [filter]);

  const getMisdemeanourText = (misdemeanour:string) => {
    
    switch (misdemeanour){
      case 'rudeness':  return 'Mild Public Rudeness 🤪';
      case 'vegetables': return 'Not Eating Your Vegetables 🥗';
      case 'lift': return 'Speaking in a Lift 🗣';
      default: return 'Supporting Manchester United 😈';
    }
  };

  return (
    <>
      <h1>Misdemeanours</h1>
      {console.log(misdemeanours)}
      { /* TODO: create components to display misdemeanours and pass via useContext */ }
      <label className="label--hidden" htmlFor='myFilter'>Filter</label>
      <select 
        id='myFilter' 
        onChange={(e) => {e.preventDefault();updateFilter(e.target.value)}}>
        <option value='10'>Get Ten</option>
        <option value='1'>Get One</option>
      </select>
      <table className="misdemeanour-table">
        <caption>{filter} misdemeanours of our citizens with punishment ideas.</caption>
        <thead>
          <tr>
            <th>Citizen Id</th>
            <th>Date</th>
            <th>Misdemeanour</th>
            <th>Punishment Idea</th>
          </tr>
        </thead>
        <tbody>
          {misdemeanours.map((record) => <MisdemeanourRow  {...record}/>)}
        </tbody>
      </table>
    </>
  );
}

export default Misdemeanour;
