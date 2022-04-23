import { MisdemeanourRecord } from "../data/MisdemeanourRecord";

const MisdemeanourRow: React.FC<MisdemeanourRecord> = (props) => {

return (
  <>
    <tr>
      <td>{props.citizenId}</td>
      <td>{props.date}</td>
      <td>{props.misdemeanour}</td>
      <td></td>    
    </tr>
  </>
);
}

export default MisdemeanourRow;