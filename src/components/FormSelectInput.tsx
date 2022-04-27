import { Misdemeanours, MISDEMEANOURS } from "../data/MisdemeanourRecord";
import getMisdemeanourText from "../helpers/MisdemeanourDescription";

interface Props {
  option:string;
  update: React.Dispatch<React.SetStateAction<Misdemeanours | ''>>;
}

const FormSelectInput: React.FC<Props> = (props) => {

  const update = (value: string):void =>  {
    const index = parseInt(value);
    if(!Number.isNaN(index)) 
    {
      const state = MISDEMEANOURS[index];
      props.update(state);
    }
    else {
      props.update('');
    }
  };

  return (
    <>
      <select 
        id='misdemeanourSelect' name='misdemeanourSelect' className='form--select'
        onChange={(e) => update(e.target.value)}
        >
          <option value=''>Select...</option>
          {MISDEMEANOURS.map((item, index) => <option value={index}>{getMisdemeanourText(item)}</option>)}
      </select>
      </>
  );
}

export default FormSelectInput;