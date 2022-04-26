interface Props {
  buttonLabel: string;
  saveForm: Function;
}

const FormButton: React.FC<Props> = (props) => {


  return (
  <>
    <button className='form--button' 
      onClick={(e) => {e.preventDefault(); props.saveForm()}}
    >{props.buttonLabel}</button>
  </>
  );
}

export default FormButton;