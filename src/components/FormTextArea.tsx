
interface Props {
  text: string;
  update: React.Dispatch<React.SetStateAction<string>>;
}
const FormTextArea: React.FC<Props> = (props) => {

  return(
    <>
      <textarea id='details' className='form--rowitem' value={props.text} 
        onChange={(e) => props.update(e.target.value)} />
    </>
  );
}

export default FormTextArea;