import { Misdemeanours, MISDEMEANOURS } from "../data/MisdemeanourRecord";
import getMisdemeanourText from "../helpers/MisdemeanourDescription";
import { NameValueStringPair } from "../interfaces/SelectOptionChoices";
import FormSelectOption from "./FormSelectOption";

interface Props {
  selectedOption:Misdemeanours | '' | 'talk';
  optionList: NameValueStringPair[];
  update: React.Dispatch<React.SetStateAction<Misdemeanours | '' | 'talk'>>;
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
          <FormSelectOption value='' display='Select...' 
            misdemeanourOption= '' selectedOption={props.selectedOption}/>
          {props.optionList.map((item) => {
            return (
              <FormSelectOption value={item.name} 
                display={getMisdemeanourText(item.value)} 
                misdemeanourOption={item.value}
                selectedOption={props.selectedOption} />
              )
            })
          }
      </select>
      </>
  );
}

export default FormSelectInput;