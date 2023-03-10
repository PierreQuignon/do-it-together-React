import { FC, useState } from "react";
import { Workshop as workshopType } from "../pages/Workshops";
import { DatePicker } from "antd";
import moment from "moment";
import "../style/Modal.css";
import "../style/App.css";

interface IWorkshopProps {
  workshopTargeted: workshopType[] | [];
  close: () => void;
}

const { RangePicker } = DatePicker;

const ModalBooking: FC<IWorkshopProps> = ({ workshopTargeted, close }) => {
  const [duration, setDuration] = useState<number>(0);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  function bookingAlert() {
    if (duration > 0) {
        close();
        alert("Do It Together vous remercie de votre réservation 🎉😃");
    }
  }

  return (
    <>
      <div className="overlay"></div>
      <div className="modal-container">
        <button className="btn-close" onClick={close}>
          <i className="fa-regular fa-circle-xmark"></i>
        </button>
        <div className="content-modal-container">
          {workshopTargeted.map((workshop, index) => {
            return <p key={index}>Prix : {workshop.price}€/jour</p>;
          })}
          <div className="">
            <RangePicker
              placeholder={["Date de début", "Date de fin"]}
              format="DD-MM-YYYY"
              onChange={(values) => {
                if (values) {
                  const start = values[0];
                  const end = values[1];
                  const duration = moment.duration(end!.diff(start)).asDays();
                  setDuration(duration);
                  setTotalPrice(workshopTargeted[0].price * duration);
                } else {
                  setDuration(0);
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
