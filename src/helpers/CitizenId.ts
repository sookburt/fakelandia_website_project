
const getCitizenId = () => {

  return Math.floor(rand(37) * rand(967))
}

function rand(x: number): number {
  
	return Math.random() * x;
}

export default getCitizenId;