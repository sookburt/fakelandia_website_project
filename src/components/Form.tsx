import { useContext, useState } from "react";
import { MISDEMEANOURS, Misdemeanours } from "../data/MisdemeanourRecord";
import MisdemeanourContext, { IMisdemeanourContext } from "../hooks/MisdemeanourContext";
import FormSelectInput from "./FormSelectInput";
import FormTextInput from "./FormTextInput";

const Form: React.FC = () => {

  const {misdemeanourList, misdemeanourSetter} = useContext<IMisdemeanourContext>(MisdemeanourContext);

  const [subject, setSubject] = useState<string>('');
  const [option, setOption] = useState<Misdemeanours | ''>('');
  const [rant, setRant] = useState<string>('');

  const buildMisdemeanourRecord = (event:React.SyntheticEvent) => {
    event.preventDefault();
    return ({
			citizenId: Math.floor((Math.random() * 37) * (Math.random() * 967)),
			misdemeanour: option,
			date: new Date().toLocaleDateString(),
		});
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
          <button className='form--button' 
            onClick={(e) => buildMisdemeanourRecord}
          >Confess</button>
        </div>
      </form>
    </>
  );
}

export default Form;