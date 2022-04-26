import { useContext } from "react";
import MisdemeanourContext, { IMisdemeanourContext } from "../hooks/MisdemeanourContext";

const Form: React.FC = () => {

  const {misdemeanourList, misdemeanourSetter} = useContext<IMisdemeanourContext>(MisdemeanourContext);

  return (
    <>
      <form className="form">
        <div className="form--row">
          <label htmlFor='subject' className='form--rowlabel'>Subject: </label>
          <input id='subject'  className='form--rowitem'></input>
        </div>
        <div className="form--row">
          <label htmlFor='reason-for-contact' className='form--rowlabel'>Reason for contact: </label>
          <select id='reason-for-contact' className='form--rowitem'>
            <option></option>
            <option></option>
            <option></option>
            <option></option>
          </select>
        </div>
        <div className="form--row">
          <textarea className='form--rowitem' />
        </div>
        <div className="form--row">
          <button className='form--button'>Confess</button>
        </div>
      </form>
    </>
  );
}

export default Form;