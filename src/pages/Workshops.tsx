import { FC, useEffect, useState } from "react";
import WorkshopCard from "../components/WorkshopCard";
import { Link } from "react-router-dom";
import TagsFilters from "../components/TagsFilters";
import CursorFilter from "../components/CursorFilter";
import "../style/Workshops.css";

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

  useEffect(() => {
    fetch("./src/dataset.json")
    .then((res) => res.json())
    .then((resJson) => {
      setWorkshops(resJson.workshops);
    });
  }, []);

  const priceRange = workshops.map((workshop) => workshop.price);
  const pricesSorted = priceRange.sort((a, b) => a - b);
  const minPrice = pricesSorted[0];
  const maxPrice = pricesSorted[pricesSorted.length - 1];

  const [value, setValue] = useState<number>(20);

  const filteredWorkshops = workshops.filter(
    (workshop) =>
    value >= workshop.price &&
    (!activeCategories.length || activeCategories.includes(workshop.category))
    );


  return (
    <div className="workshops-container">
      <div className="filters-container">
        <TagsFilters
          setActiveCategories={setActiveCategories}
          activeCategories={activeCategories}
        />
        <CursorFilter
          value={value}
          setValue={setValue}
          minPrice={minPrice}
          maxPrice={maxPrice}
        />
      </div>
      {filteredWorkshops.map((workshop) => (
        <Link to={`/workshop/${workshop.id}`} key={workshop.id}>
          <WorkshopCard workshop={workshop} />
        </Link>
      ))}
    </div>
  );
};

export default Workshops;
