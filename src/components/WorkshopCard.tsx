import { Workshop as workshopType } from "../pages/Workshops";
import { FC } from "react";

interface IWorkshopProps {
  workshop: workshopType;
}

const WorkshopCard: FC<IWorkshopProps> = ({
  workshop,
}) => {
  return (
    <ul className="border border-black p-2 rounded m-4">
      <li>Titre: {workshop.title}</li>
      <li>Surface: {workshop.squareMeter}m2</li>
      <li>Prix: {workshop.price}€</li>
      <li>Localisation: {workshop.location}</li>
    </ul>
  );
};
export default WorkshopCard;
