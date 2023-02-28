import { FC } from "react";

interface IWorkshopProps {
  open: boolean;
  onClose: () => void;
}

const ModalBooking: FC<IWorkshopProps> = ({open, onClose}) => {
  if (!open) return null;

  return (
    <div className="flex justify-center border border-black w-60">
      <button className="" onClick={onClose}>X</button>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A dolorum
          tempora possimus eaque quis officia velit maxime? Cupiditate, veniam
          quo.
        </p>
      </div>
    </div>
  );
};

export default ModalBooking;
