import { useContext } from "react";
import { MisdemeanourRecord } from "../data/MisdemeanourRecord";
import MisdemeanourContext from "../hooks/MisdemeanourContext";
import MisdemeanourRow from "./MisdemeanourRow";

const MisdmeanourTable: React.FC = () => {

  const filtered: MisdemeanourRecord[] = useContext(MisdemeanourContext);

  return (

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
  );

}

export default MisdmeanourTable;
