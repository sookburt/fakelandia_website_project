import Form from "./Form";

const Confession: React.FC = () => {

  return(
  <>
    <h1>Confession:</h1>
    <div  className='confession-intro--paragraph'>
      It's very difficult to catch people committing 
      misdemeanours so we appreciate it when citizens 
      confess to us directly.
    </div>

    <div className='confession-intro--paragraph'>
      However, if you're just having a hard day and need to vent then
      you're welcome to contact us here too.  Up to you!
    </div> 

    <Form />
  </>
  )
};

export default Confession;