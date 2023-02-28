import { FC, useState } from "react";
import { Workshop as workshopType } from "../pages/Workshops";
import { DatePicker, Space } from "antd";

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
  const [dates, setDates] = useState([]);
  console.log(dates);
  

  if (!open) return null;

  return (
    <>
      <div>
        <div className=" bg-amber-50 w-96 border border-black mx-auto mb-5">
          <div>
            <button className="border border-black w-6 m-2" onClick={onClose}>
              X
            </button>
            {workshopTargeted.map((workshop) => {
              return <p>Prix : {workshop.price}€/jour</p>;
            })}
            <RangePicker onChange={(values) => setDates(values)} />
            <button className="border border-black p-1 rounded-md">
              Réserver
            </button>
            <p>Aucun montant ne vous sera débité pour le moment</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalBooking;
