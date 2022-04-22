import { useEffect, useState } from "react";
import generateMisdemeanours, {MisdemeanourRecord} from "../data/generate_misdemenours";



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
      setMisdemeanours(await generateMisdemeanours(filter));
    }
    callApi();
  }, [filter])

  return (
    <>
      <h1>Misdemeanours</h1>
      {console.log(misdemeanours)}
      <label className="label--hidden" htmlFor='myFilter'>Filter</label>
      <select 
        id='myFilter' 
        onChange={(e) => {e.preventDefault();updateFilter(e.target.value)}}>
        <option value='10'>Get Ten</option>
        <option value='1'>Get One</option>
      </select>
    </>
  );
}

export default Misdemeanour;
