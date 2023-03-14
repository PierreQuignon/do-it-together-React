import { FC } from "react";
import { Workshop } from "../pages/Workshops";
import "../style/CursorFilter.css";

interface filterProps {
  setValue: React.Dispatch<React.SetStateAction<number>>;
  value: number;
  valueNumber: number;
  workshops: Workshop[];
  minPrice: number;
  maxPrice: number;
}

const CursorFilter: FC<filterProps> = ({
  setValue,
  value,
  valueNumber,
  minPrice,
  maxPrice,
}) => {

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    valueNumber = parseInt(event.target.value);
    setValue(valueNumber)
  };


  return (
    <div className="container-slider">
      <label
        htmlFor="customRange1"
        className="mb-2 inline-block text-neutral-700 dark:text-neutral-200"
      ></label>
      <div className="flex justify-between">
        <span>{minPrice}€</span>
        <div>{value}€/jour</div>
        <span>{maxPrice}€</span>
      </div>
      <input
        type="range"
        className="transparent h-1.5 w-full cursor-pointer appearance-none rounded-lg border-transparent bg-neutral-200"
        id="customRange1"
        min={minPrice}
        max={maxPrice}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};
export default CursorFilter;
