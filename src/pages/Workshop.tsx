import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { FC, useEffect, useState } from "react";
import { Workshop as workshopType } from "./Workshops";
import ModalBooking from "../components/ModalBooking";
import "../style/Modal.css";
import "../style/App.css";
import "../style/Slide.css";
import "../style/Workshop.css";
import menuiserie1 from "../assets/menuiserie/menuiserie1.jpg";
import menuiserie2 from "../assets/menuiserie/menuiserie2.jpg";
import menuiserie3 from "../assets/menuiserie/menuiserie3.jpeg";

const Workshop: FC = () => {
  const [workshopTargeted, setWorkshopTargeted] = useState<workshopType[] | []>(
    []
  );
  const { workshopId } = useParams<{ workshopId: string }>();

  useEffect(() => {
    fetch("../src/dataset.json")
      .then((res) => res.json())
      .then((resJson) => {
        return resJson.workshops.filter(
          (workshop: workshopType) => workshop.id === parseInt(workshopId!)
        );
      })
      .then((finalResult) => setWorkshopTargeted(finalResult));
  }, []);

  function openModal() {
    const overlay = document.querySelector(".overlay") as HTMLElement;
    overlay.style.display = "block";
    const modalContainer = document.querySelector(
      ".modal-container"
    ) as HTMLElement;
    modalContainer.classList.add("modal-show");
  }

  function closeModal() {
    const overlay = document.querySelector(".overlay") as HTMLElement;
    overlay.style.display = "none";
    const modalContainer = document.querySelector(
      ".modal-container"
    ) as HTMLElement;
    modalContainer.classList.remove("modal-show");
  }

  return (
    <>
      <div className="workshop-container">
        <Link className="btn-style-1" to="/workshops">
          Retour
        </Link>
        <ul>
          {workshopTargeted.map((workshop) => (
            <>
              <li className="workshop-title" key={workshop.id}>
                {workshop.title}
              </li>
              <div className="rating-container">
                <i className="fa-regular fa-star"></i>
                <li>{workshop.rating}</li>
                <li className="workshop-comment">
                  ( {workshop.comment} commentaires )
                </li>
                <li>
                  <u>{workshop.location}</u>
                </li>
              </div>
              <div className="images-worshop-container">
                <img
                  src={menuiserie1}
                  alt="image1"
                  className="workshop-image1"
                />
                <div>
                  <img
                    src={menuiserie2}
                    alt="image2"
                    className="workshop-image2"
                  />
                  <img
                    src={menuiserie3}
                    alt="image3"
                    className="workshop-image3"
                  />
                </div>
              </div>
              <div className="details-workshop-text">
                <li className="workshop-content">{workshop.content}</li>
                <li>{workshop.squareMeter}m2</li>
                <li>
                  Electricité{" "}
                  {workshop.electricity ? (
                    <i className="fa-regular fa-square-check"></i>
                  ) : (
                    <i className="fa-sharp fa-regular fa-square"></i>
                  )}
                </li>
                <li>
                  Point d'eau{" "}
                  {workshop.water ? (
                    <i className="fa-regular fa-square-check"></i>
                  ) : (
                    <i className="fa-sharp fa-regular fa-square"></i>
                  )}
                </li>
                <li>
                  <b>{workshop.price}</b>€ par jour
                </li>
                <li>Loueur: {workshop.owner}</li>
                <li>Contact: {workshop.phone}</li>
              </div>
            </>
          ))}
        </ul>
        <button
          className="btn-style-1"
          onClick={() => {
            openModal();
          }}
        >
          Réserver
        </button>
      </div>
      <ModalBooking
        workshopTargeted={workshopTargeted}
        closeModal={closeModal}
      />
    </>
  );
};
export default Workshop;
