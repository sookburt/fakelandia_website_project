import { Misdemeanours, MISDEMEANOURS } from "../data/MisdemeanourRecord";

interface Props {
  option:string;
  update: React.Dispatch<React.SetStateAction<Misdemeanours | 'all'>>;
}

const Select: React.FC<Props> = (props) => {

  const updateFilter = (value: string):void =>  {
    const index = parseInt(value);
    if(!Number.isNaN(index)) 
    {
      const state = MISDEMEANOURS[index];
      props.update(state);
    }
    else {
      props.update('all');
    }
  };

  return (
    <>
    <label className="filter--label" htmlFor='myFilter'>Filter Misdemeanours:</label>
      <select 
        id='myFilter' name='myFilter' className='filter--select'
        onChange={(e) => updateFilter(e.target.value)}
        >
        <option value='all'>All</option>
        <option value='0'>Rudeness</option>
        <option value='1'>Vegetables</option>
        <option value='2'>Lift</option>
        <option value='3'>United</option>
      </select>
      </>
  );
}

export default Select;