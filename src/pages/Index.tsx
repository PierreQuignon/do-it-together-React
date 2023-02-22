import { useEffect, useState } from "react";
import Workshop from "../components/WorkshopIndex";

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

const Index: any = () => {
  const [workshops, setWorkshops] = useState<Workshop[] | []>([]);

  useEffect(() => {
    fetch("./src/dataset.json")
      .then((res) => res.json())
      .then((resJson) => {
        setWorkshops(resJson.workshops)
      });
  }, []);

  return(
      <div>
        {workshops.map((workshop, index) => {
          return <Workshop key={`${workshop}-${index}`} workshop={workshop}/>
        })}
      </div>
  );
};

export default Index
