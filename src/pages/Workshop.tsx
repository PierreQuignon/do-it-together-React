import { useParams } from "react-router-dom";
import Card from "../components/Card";

function Workshop() {
  const { workshopParams } = useParams();
  // const workshopId = parseInt(workshopParams!);

  return(
    <Card />
  )
};
export default Workshop;
