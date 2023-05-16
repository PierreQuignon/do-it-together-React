import { FC } from "react";
import "../style/CursorFilter.css";

interface filterProps {
  setValue: React.Dispatch<React.SetStateAction<number>>;
  value: number;
  minPrice: number;
  maxPrice: number;
}

const CursorFilter: FC<filterProps> = ({
  setValue,
  value,
  minPrice,
  maxPrice
}) => {

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const valueNumber = parseInt(event.target.value);
    setValue(valueNumber)
  };

  return (
    <div className="container-slider">
      <div className="flex justify-center">
        <div>{value}€/jour</div>
      </div>
      <input
        type="range"
        className="transparent h-1.5 w-full cursor-pointer appearance-none rounded-lg border-transparent bg-neutral-200"
        min={minPrice}
        max={maxPrice}
        onChange={handleChange}
      />
    </div>
  );
};
export default CursorFilter;
