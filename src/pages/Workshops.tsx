import { FC, FunctionComponent, useEffect, useState } from "react";
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

const Workshops: FC = () => {
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
        <Link to={`/workshop/${workshop.id}`} key={`${workshop}-${index}`}>
          <WorkshopCard workshop={workshop}/>
        </Link>
        )
      })}
    </div>
  );
};

export default Workshops;
