import { Misdemeanours } from "../data/MisdemeanourRecord";

interface Props {
  value: string;
  display: string; 
  misdemeanourOption: Misdemeanours | '' | 'talk';
  selectedOption: Misdemeanours | '' | 'talk';
}
const FormSelectOption: React.FC<Props> = (props) => {

  return(
    <>
     {
      props.misdemeanourOption === props.selectedOption ? 
        <option value={props.value} selected>{props.display}</option> : 
        <option value={props.value}>{props.display}</option>
     }
    </>
  );
}

export default FormSelectOption;