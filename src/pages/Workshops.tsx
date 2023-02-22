import { useEffect, useState } from "react";
import WorkshopCard from "../components/WorkshopCard";
import { Link } from "react-router-dom";

export interface Workshop {
  id: number;
  owner: string;
  title: string;
  squareMeter: number;
  content: string;
  electricity: boolean;
  water: boolean;
  location: string;
  phone: string;
  price: number;
}

const Workshops: any = () => {
  const [workshops, setWorkshops] = useState<Workshop[] | []>([]);

  useEffect(() => {
    fetch("./src/dataset.json")
      .then((res) => res.json())
      .then((resJson) => {
        setWorkshops(resJson.workshops);
      });
  }, []);

  return (
    <div>
      {workshops.map((workshop, index) => {
        return(
        <Link to={`/workshop/${workshop.id}`}>
          <WorkshopCard key={`${workshop}-${index}`} workshop={workshop}/>
        </Link>
        )
      })}
    </div>
  );
};

export default Workshops;
