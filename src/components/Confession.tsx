import Form from "./Form";

const Confession: React.FC = () => {

  return(
  <div className="container-inner">
    <h1>Confession:</h1>
    <p className='confession-intro--paragraph'>
      It's very difficult to catch people committing 
      misdemeanours so we appreciate it when citizens 
      confess to us directly.
    </p>

    <p className='confession-intro--paragraph'>
      However, if you're just having a hard day and need to vent then
      you're welcome to contact us here too.  Up to you!
    </p> 

    <Form />
  </div>
  
  )
};

export default Confession;