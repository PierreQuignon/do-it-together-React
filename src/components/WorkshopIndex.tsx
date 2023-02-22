import { Workshop as workshopType } from "../pages/Index"
import * as React from "react";

interface IWorkshopProps {
  workshop: workshopType;
}

const Workshop: React.FunctionComponent<IWorkshopProps> = ({ workshop }) => {
  return (
    <ul className="border border-black p-2 mb-2 rounded">
      <li>Titre: {workshop.title}</li>
      <li>Surface: {workshop.squareMeter}m2</li>
      <li>Prix: {workshop.price}€</li>
      <li>Localisation: {workshop.location}</li>
    </ul>
  );
};
export default Workshop;
