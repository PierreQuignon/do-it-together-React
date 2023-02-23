import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Workshop } from "./Workshops";


const Workshop: any = () => {
  const { workshopId } = useParams<{ workshopId: string }>();
  console.log(workshopId)

  return(
    <Link to="/workshops">
      Retour
    </Link>
  );
};
export default Workshop;
