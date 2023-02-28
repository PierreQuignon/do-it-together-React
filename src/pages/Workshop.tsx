import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Workshop as workshopType } from "./Workshops";
import ModalBooking from "../components/ModalBooking";

function Workshop() {
  const [workshopTargeted, setWorkshopTargeted] = useState<workshopType[] | []>(
    []
  );
  const [openModal, setOpenModal] = useState<boolean>(false);
  console.log("openModal", openModal);
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

  return (
    <>
      <div>
        <Link className="p-px border border-black rounded m-2" to="/workshops">
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
              className="p-px border border-black rounded m-2"
              onClick={() => setOpenModal(true)}
            >
              Réserver
            </button>
            <ModalBooking open={openModal} onClose={() => setOpenModal(false)} />
          </div>
      </div>
    </>
  );
}
export default Workshop;
