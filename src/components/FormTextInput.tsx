interface Props {
  text: string;
  update: React.Dispatch<React.SetStateAction<string>>;
}

const FormTextInput: React.FC<Props> = (props) => {

  return (
    <>
      <input id='formTextInput' name='formTextInput' 
        onChange={(e) => props.update(e.target.value)}
      />
    </>
  );

}

export default FormTextInput;