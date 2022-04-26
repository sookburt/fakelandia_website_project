import { Misdemeanours, MISDEMEANOURS } from "../data/MisdemeanourRecord";

interface Props {
  option:string;
  update: React.Dispatch<React.SetStateAction<Misdemeanours | ''>>;
}

const Select: React.FC<Props> = (props) => {

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
        <option value='0'>Rudeness</option>
        <option value='1'>Vegetables</option>
        <option value='2'>Lift</option>
        <option value='3'>United</option>
      </select>
      </>
  );
}

export default Select;