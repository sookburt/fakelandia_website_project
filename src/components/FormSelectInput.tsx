import { MISDEMEANOURS } from "../data/MisdemeanourRecord";
import getMisdemeanourText from "../helpers/MisdemeanourDescription";
import { NameValueStringPair } from "../interfaces/SelectOptionChoices";

interface Props {
  option:string;
  optionList: NameValueStringPair[];
  update: React.Dispatch<React.SetStateAction<string>>;
}

const FormSelectInput: React.FC<Props> = (props) => {

  const update = (value: string):void =>  {
    const index = parseInt(value);
    if(!Number.isNaN(index)) 
    {
      const state = MISDEMEANOURS[index];
      props.update(state);
    }
    else if (value === 'talk') {
      props.update('talk');
    }
    else {
      props.update('');
    }
  };

  return (
    <>
      <select 
        id='misdemeanourSelect' name='misdemeanourSelect' className='form--input'
        onChange={(e) => update(e.target.value)}
        >
          <option value=''>Select...</option>
          {props.optionList.map((item) => <option value={item.name}>{getMisdemeanourText(item.value)}</option>)}
      </select>
      </>
  );
}

export default FormSelectInput;