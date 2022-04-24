import { MisdemeanourRecord } from "../data/MisdemeanourRecord";

const MisdemeanourRow: React.FC<MisdemeanourRecord> = (props) => {

return (
  <>
    <tr>
      <td>{props.citizenId}</td>
      <td>{props.date}</td>
      <td>{props.misdemeanourDescription}</td>
      <td><img className='table-row--image' src='https://picsum.photos/100/60' alt='Punishment idea' /></td>    
    </tr>
  </>
);
}

export default MisdemeanourRow;