import { useParams } from "react-router-dom";

function Workshop() {
  const { workshopParams } = useParams();
  const workshopId = parseInt(workshopParams!);// le point d'explamation à pour focntion de 

  return <div>Workshop { workshopId }</div>;
}
export default Workshop;
