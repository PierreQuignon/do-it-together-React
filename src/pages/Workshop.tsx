import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Workshop as workshopType } from "./Workshops";
import ModalBooking from "../components/ModalBooking";
import "../style/Modal.css";
import "../style/App.css";

function Workshop() {
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
    const overlay = document.querySelector('.overlay') as HTMLElement;
    overlay.style.display = 'block';
    const modalContainer = document.querySelector('.modal-container') as HTMLElement;
    modalContainer.classList.add('modal-show');
  }

   function closeModal() {
    const overlay = document.querySelector('.overlay') as HTMLElement;
    overlay.style.display = 'none';
    const modalContainer = document.querySelector('.modal-container') as HTMLElement;
    modalContainer.classList.remove('modal-show');
  }

  return (
    <>
      <div>
        <Link className="btn-style-1" to="/workshops">
          Retour
        </Link>
        {workshopTargeted.map((workshop, index) => {
          return (
            <ul key={index}>
              <li>{workshop.title}</li>
              <li>Adresse: {workshop.location}</li>
              <li>{workshop.content}</li>
              <li>Surface: {workshop.squareMeter}m2</li>
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
              <li>Prix: {workshop.price}€/jour</li>
              <li>Loueur: {workshop.owner}</li>
              <li>Contact: {workshop.phone}</li>
            </ul>
          );
        })}
        <div>
          <button
            className="btn-style-1"
            onClick={() => {
              openModal()
            }}
          >
            Réserver
          </button>
          <ModalBooking
            workshopTargeted={workshopTargeted}
            close={closeModal}
          />
        </div>
      </div>
    </>
  );
}
export default Workshop;
