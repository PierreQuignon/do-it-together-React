import { Workshop as workshopType } from "../pages/Workshops";
import { FC } from "react";
import "../style/WorkshopCard.css";

interface WorkshopProps {
  workshop: workshopType;
}


const WorkshopCard: FC<WorkshopProps> = ({ workshop }) => {
  return (
    <ul className="container-workshop">
      <li>Titre: {workshop.title}</li>
      <li>Surface: {workshop.squareMeter}m2</li>
      <li>Prix: {workshop.price}€</li>
      <li>Localisation: {workshop.location}</li>
      <li>
        Note:{" "}
        {[...Array(workshop.rating)].map((_, i) => ( // Si workshop.map égale 2, le tableau sera le suivant [undifined, undefined]. "_" est fait pour ignorer la valeur "undefined" car elle n'est pas utilisée
          <i key={i} className="fa-regular fa-star"></i>
        ))}
      </li>
    </ul>
  );
};
export default WorkshopCard;
