import { useContext, useState } from "react";
import { Misdemeanours } from "../data/MisdemeanourRecord";
import MisdemeanourContext, { IMisdemeanourContext } from "../hooks/MisdemeanourContext";
import Select from "./Select";

const Form: React.FC = () => {

  const {misdemeanourList, misdemeanourSetter} = useContext<IMisdemeanourContext>(MisdemeanourContext);

  const [subject, setSubject] = useState<string>('');
  const [option, setOption] = useState<Misdemeanours | ''>('');
  const [rant, setRant] = useState<string>('');

  const buildMisdemeanourRecord = () => {

  }

  return (
    <>
      <form className="form">
        <div className="form--row">
          <label htmlFor='subject' className='form--rowlabel'>Subject: </label>
          <input id='subject'  className='form--rowitem'></input>
        </div>
        <div className="form--row">
          <label htmlFor='reason-for-contact' className='form--rowlabel'>Reason for contact: </label>
          <Select option={option} update={setOption} />
        </div>
        <div className="form--row">
          <label htmlFor="details"  className='form--rowlabel'>Details: </label>
          <textarea id='details' className='form--rowitem' />
        </div>
        <div className="form--row">
          <button className='form--button' >Confess</button>
        </div>
      </form>
    </>
  );
}

export default Form;