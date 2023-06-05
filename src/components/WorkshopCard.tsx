import { Workshop as workshopType } from "../pages/Workshops";
import { FC } from "react";
import "../style/WorkshopCard.css";

interface WorkshopProps {
  workshop: workshopType;
}

const WorkshopCard: FC<WorkshopProps> = ({ workshop }) => {
  return (
    <ul className="container-workshop-card">
      <div className="first-lign-card">
        <li>
          <b>{workshop.title}</b>
        </li>
        <div className="rating-container">
          <i className="fa-regular fa-star"></i>
          <li>{workshop.rating}</li>
        </div>
      </div>
      <li>{workshop.location}</li>
      <div className="price-container">
        <li>
          <b>{workshop.price}</b>€ par jour
        </li>
      </div>
    </ul>
  );
};
export default WorkshopCard;
