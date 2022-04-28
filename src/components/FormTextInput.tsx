interface Props {
  text: string;
  placeholder: string;
  update: React.Dispatch<React.SetStateAction<string>>;
}

const FormTextInput: React.FC<Props> = (props) => {

  return (
    <>
      <input id='formTextInput' name='formTextInput' 
        value={props.text} 
        className='form--input' placeholder={props.placeholder}
        onChange={(e) => props.update(e.target.value)}
      />
    </>
  );

}

export default FormTextInput;