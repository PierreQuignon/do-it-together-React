import { useParams } from "react-router-dom";

function Workshop() {
  const { workshopParams } = useParams();
  const workshopId = parseInt(workshopParams);

  return <div>Workshop { workshopId }</div>;
}
export default Workshop;
