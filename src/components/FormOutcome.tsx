import { Link } from "react-router-dom";
import { MisdemeanourRecord } from "../data/MisdemeanourRecord";

const FormOutcome: React.FC<MisdemeanourRecord> = (props) => {

  return (
    <>
      <h2>Congratulations</h2>
      <p>The following record has been successfully submitted.</p>
      <dl>
        <dt>Citizen Id: </dt><dd>{props.citizenId}</dd>
        <dt>Subject: </dt><dd>{props.misdemeanourSubject}</dd>
        <dt>Option: </dt><dd>{props.misdemeanour}</dd>
        <dt>Description: </dt><dd>{props.misdemeanourDescription}</dd>
        <dt>Details: </dt><dd>{props.misdemeanourDetail}</dd>
      </dl>
      <Link to='/misdemeanour'>Click here to see your confession in the list</Link>
      <hr />
    </>
  );
}

export default FormOutcome;