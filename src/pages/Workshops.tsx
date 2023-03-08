import { FC, FunctionComponent, useEffect, useState } from "react";
import WorkshopCard from "../components/WorkshopCard";
import { Link } from "react-router-dom";
import Filters from "../components/Filters";

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
  rating: number;
  category: string;
}

type SetActiveCategories = (category: string[]) => void;

const Workshops: FC<Workshop> = () => {
  const [workshops, setWorkshops] = useState<Workshop[]>([]);
  const categories:string[] = workshops.reduce<string[]>(
    (acc: string[], workshop: Workshop) =>
      acc.includes(workshop.category) ? acc : acc.concat(workshop.category),
    []
  );
  const [activeCategories, setActiveCategories]=useState<string[]>([])
  console.log(activeCategories);
  


  useEffect(() => {
    fetch("./src/dataset.json")
      .then((res) => res.json())
      .then((resJson) => {
        setWorkshops(resJson.workshops);
      });
  }, []);

  return (
    <div>
      <Filters setActiveCategories={ setActiveCategories }/>
      {workshops.map((workshop, index) => {
        return (
          <Link to={`/workshop/${workshop.id}`} key={`${workshop}-${index}`}>
            <WorkshopCard workshop={workshop} />
          </Link>
        );
      })}
    </div>
  );
};

export default Workshops;
