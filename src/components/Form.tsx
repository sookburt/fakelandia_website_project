import { useContext, useState } from "react";
import { MISDEMEANOURS, Misdemeanours } from "../data/MisdemeanourRecord";
import getCitizenId from "../helpers/CitizenId";
import getMisdemeanourText from "../helpers/MisdemeanourDescription";
import MisdemeanourContext, { IMisdemeanourContext } from "../hooks/MisdemeanourContext";
import FormButton from "./FormButton";
import FormSelectInput from "./FormSelectInput";
import FormTextInput from "./FormTextInput";

const Form: React.FC = () => {

  const {misdemeanourList, misdemeanourSetter} = useContext<IMisdemeanourContext>(MisdemeanourContext);

  const [subject, setSubject] = useState<string>('');
  const [option, setOption] = useState<Misdemeanours | ''>('');
  const [details, setDetails] = useState<string>('');

  const buildMisdemeanourRecord = () => {
    
    const newRecord = ({
      citizenId: getCitizenId(),
			misdemeanour: option,
			date: new Date().toLocaleDateString(),
      misdemeanourDescription: getMisdemeanourText(option),
      misdemeanourSubject: subject,
      misdemeanourDetail: details
		});
    
    misdemeanourSetter([...misdemeanourList, newRecord]);
  }

  return (
    <>
      <form className="form">
        <div className="form--row">
          <label htmlFor='formTextInput' className='form--rowlabel'>Subject: </label>
          <FormTextInput text={subject} update={setSubject} />
        </div>
        <div className="form--row">
          <label htmlFor='reason-for-contact' className='form--rowlabel'>Reason for contact: </label>
          <FormSelectInput option={option} update={setOption} />
        </div>
        <div className="form--row">
          <label htmlFor="details"  className='form--rowlabel'>Details: </label>
          <textarea id='details' className='form--rowitem' />
        </div>
        <div className="form--row">
          <FormButton buttonLabel={'Confess'} saveForm={buildMisdemeanourRecord} />
        </div>
      </form>
    </>
  );
}

export default Form;