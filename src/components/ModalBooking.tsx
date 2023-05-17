import { FC, useState } from "react";
import { Workshop as workshopType } from "../pages/Workshops";
import { DatePicker } from "antd";
import moment from "moment";
import "../style/Modal.css";
import "../style/App.css";

interface WorkshopProps {
  workshopTargeted: workshopType[] | [];
  closeModal: () => void;
}

const { RangePicker } = DatePicker;

const ModalBooking: FC<WorkshopProps> = ({ workshopTargeted, closeModal }) => {
  const [totalPrice, setTotalPrice] = useState<number>(0);

  function bookingAlert() {
    if (totalPrice > 0) {
      closeModal();
      alert("Do It Together vous remercie de votre réservation 🎉😃");
    }
  }

  return (
    <>
      <div className="overlay"></div>
      <div className="modal-container">
        <button className="btn-close" onClick={closeModal}>
          <i className="fa-regular fa-circle-xmark"></i>
        </button>
        <div className="content-modal-container">
          {workshopTargeted.map((workshop) => (
            <p key={workshop.id}>Prix : {workshop.price}€/jour</p>
          ))}
          <div>
            <RangePicker
              placeholder={["Date de début", "Date de fin"]}
              format="DD-MM-YYYY"
              onChange={(values) => {
                if (values) {
                  console.log("values", values);
                  const start = values[0];
                  const end = values[1];
                  const durationDays = moment
                    .duration(end!.diff(start))
                    .asDays(); //moment.duration utilise la bibliothèque moment.js pour calculer la durée en jours entre la date de début et la date de fin. La fonction diff() soustrait la date de début de la date de fin, et asDays() convertit le résultat en nombre de jours.
                  setTotalPrice(workshopTargeted[0].price * durationDays); //Le [0] permets de dire à TS que workshopTargeted est bien "workshopType[] | []"
                } else {
                  setTotalPrice(0);
                }
              }}
            />
          </div>
          <p>Montant total de votre réservation : {totalPrice} €</p>
          <button className="btn-style-1" onClick={bookingAlert}>
            Réserver
          </button>
        </div>
      </div>
    </>
  );
};

export default ModalBooking;
