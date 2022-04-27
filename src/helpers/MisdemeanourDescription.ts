
  const getMisdemeanourText = (misdemeanour:string) => {
    
    switch (misdemeanour){
      case 'rudeness':  return 'Mild Public Rudeness 🤪';
      case 'vegetables': return 'Not Eating Your Vegetables 🥗';
      case 'lift': return 'Speaking in a Lift 🗣';
      default: return 'Supporting Millwall 😈';
    }
  };

  export default getMisdemeanourText;