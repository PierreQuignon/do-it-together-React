import { FC, useEffect, useState } from "react";
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

const Workshops: FC = () => {
  const [workshops, setWorkshops] = useState<Workshop[]>([]);

  const [activeCategories, setActiveCategories] = useState<Array<string>>([]);
  console.log('activeCategories', activeCategories);


  useEffect(() => {
    fetch("./src/dataset.json")
      .then((res) => res.json())
      .then((resJson) => {
        setWorkshops(resJson.workshops);
      });
  }, []);

  return (
    <div>
      <Filters setActiveCategories={setActiveCategories} activeCategories={activeCategories}/>
      {workshops.map((workshop, index) => {
        const { category } = workshop;
        return !activeCategories.length || activeCategories.includes(category) ? (
          <Link to={`/workshop/${workshop.id}`} key={`${workshop}-${index}`}>
            <WorkshopCard workshop={workshop} />
          </Link>
        ) : null;
      })}
    </div>
  );
};

export default Workshops;
