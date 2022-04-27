import { useContext, useEffect, useState } from "react";
import { MisdemeanourRecord, MISDEMEANOURS, Misdemeanours } from "../data/MisdemeanourRecord";
import getCitizenId from "../helpers/CitizenId";
import getMisdemeanourText from "../helpers/MisdemeanourDescription";
import MisdemeanourContext, { IMisdemeanourContext } from "../hooks/MisdemeanourContext";
import FormButton from "./FormButton";
import FormOutcome from "./FormOutcome";
import FormSelectInput from "./FormSelectInput";
import FormTextArea from "./FormTextArea";
import FormTextInput from "./FormTextInput";

const Form: React.FC = () => {

  const {misdemeanourList, misdemeanourSetter} = useContext<IMisdemeanourContext>(MisdemeanourContext);
  const [subject, setSubject] = useState<string>('');
  const [option, setOption] = useState<string>('');
  const [details, setDetails] = useState<string>('');
  const [record, setRecord] = useState<MisdemeanourRecord>();

  const options = [...MISDEMEANOURS.map((item, index) => (
    {name: index.toString(), value: item})), 
    {name: 'talk', value: 'talk'}];

  const buildMisdemeanourRecord = () => {

    if(option === 'talk') {
        console.log(`Citizen Id: ${getCitizenId()}`);
        console.log(`I just want to talk...`);
        console.log(`Date: ${new Date().toLocaleDateString()}`);
        console.log(`Misdemeanour Subject: ${subject}`);
        console.log(`Misdemeanour Details: ${details}`);
    }
    else {
      const newRecord = ({
        citizenId: getCitizenId(),
        misdemeanour: option as Misdemeanours,
        date: new Date().toLocaleDateString(),
        misdemeanourDescription: getMisdemeanourText(option),
        misdemeanourSubject: subject,
        misdemeanourDetail: details
      });
  
      setRecord(newRecord);
    }
  }

  useEffect(() => { 
    misdemeanourList && record && misdemeanourSetter([...misdemeanourList, record]) 
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [record]);

  return (
    <>
    {record && (<FormOutcome {...record} />)}
      <form className="form">
        <div className="form--row">
          <label htmlFor='formTextInput' className='form--rowlabel'>Subject: </label>
          <FormTextInput text={subject} update={setSubject} />
        </div>
        <div className="form--row">
          <label htmlFor='reason-for-contact' className='form--rowlabel'>Reason for contact: </label>
          <FormSelectInput option={option} optionList={options} update={setOption} />
        </div>
        <div className="form--row">
          <label htmlFor="details"  className='form--rowlabel'>Details: </label>
          <FormTextArea text={details} update={setDetails} />
        </div>
        <div className="form--row">
          <FormButton buttonLabel={'Confess'} saveForm={buildMisdemeanourRecord} />
        </div>
      </form>
    </>
  );
}

export default Form;