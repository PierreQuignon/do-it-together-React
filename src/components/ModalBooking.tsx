import { FC } from "react";

interface IWorkshopProps {
  open: boolean;
  onClose: () => void;
}

const ModalBooking: FC<IWorkshopProps> = (open, onClose) => {
  if (!open) return null;

  return (
    <div className="border border-black" onClick={onClose}>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <p onClick={onClose}>X</p>
        <div className="border border-black">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A dolorum
            tempora possimus eaque quis officia velit maxime? Cupiditate, veniam
            quo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ModalBooking;
