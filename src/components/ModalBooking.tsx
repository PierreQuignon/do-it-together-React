import { FC, useState } from "react";
import { Workshop as workshopType } from "../pages/Workshops";
import { DatePicker } from "antd";
import moment from "moment";
import "../style/Modal.css"

interface IWorkshopProps {
  open: boolean;
  onClose: () => void;
  workshopTargeted: workshopType[] | [];
}

const { RangePicker } = DatePicker;

const ModalBooking: FC<IWorkshopProps> = ({
  open,
  onClose,
  workshopTargeted,
}) => {
  const [duration, setDuration] = useState<number>(0);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  function bookingAlert() {
    alert("Merci de votre réservation");
  }

  if (!open) return null;

  return (
    <>
      <div>
        <div className=" bg-amber-50 w-96 border border-black mx-auto mb-5">
          <div>
            <button className="m-1" onClick={onClose}>
            <i className="fa-regular fa-circle-xmark"></i>
            </button>
            {workshopTargeted.map((workshop, index) => {
              return <p key={index}>Prix : {workshop.price}€/jour</p>;
            })}
            <div className="m-2">
              <RangePicker
                placeholder={["Date de début", "Date de fin"]}
                suffixIcon={<></>}
                format='DD-MM-YYYY'
                onChange={(values) => {
                  if (values) {
                    const start = values[0];
                    const end = values[1];
                    const duration = moment.duration(end!.diff(start)).asDays();
                    setDuration(duration);
                    setTotalPrice(workshopTargeted[0].price*duration)
                  }
                  else {
                    setDuration(0);
                    setTotalPrice(0);
                  }
                }}
              />
            </div>
            <p>Montant total de votre réservation : { totalPrice } €</p>
            <button className="btn-booking-modal" onClick={() => bookingAlert()}>
              Réserver
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalBooking;
