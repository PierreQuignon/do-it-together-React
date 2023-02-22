import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import WorkshopDetails from "../components/WorkshopDetails";

function Workshop() {
  const { workshopId } = useParams<{ workshopId: string }>();
  const idNumber = parseInt(workshopId!)

  return(
    <div>
      {workshops.map((workshop, index) => {
        return(
          <div>
            <WorkshopDetails key={`${workshop}-${index}`} workshop={workshop}/>
          </div>
        )
      })}
    {idNumber}
    <Link to="/workshops">
      Retour
    </Link>
  </div>
  )
};
export default Workshop;
