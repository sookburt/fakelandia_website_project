import { Link } from "react-router-dom";
import { MisdemeanourRecord } from "../data/MisdemeanourRecord";

const FormOutcome: React.FC<MisdemeanourRecord> = (props) => {

  return (
    <>
      <h2>Congratulations</h2>
      <p>The following record has been successfully submitted.</p>
      <dl className='form'>
        <dt className='form--label'>Citizen Id: </dt><dd className='form--input'>{props.citizenId}</dd>
        <dt className='form--label'>Subject: </dt><dd className='form--input'>{props.misdemeanourSubject}</dd>
        <dt className='form--label'>Option: </dt><dd className='form--input'>{props.misdemeanour}</dd>
        <dt className='form--label'>Description: </dt><dd className='form--input'>{props.misdemeanourDescription}</dd>
        <dt className='form--label'>Details: </dt><dd className='form--input'>{props.misdemeanourDetail}</dd>
      </dl>
      <div className='link'>
        <Link to='/misdemeanour' >Click here to see your confession in the list</Link>
      </div>
    </>
  );
}

export default FormOutcome;