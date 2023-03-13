import { FC, useState } from "react";
import "../style/CursorFilter.css";

const CursorFilter: FC = () => {
  const [value, setValue] = useState(15);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(event.target.value));
  };
  return (
    <div className="container-slider">
      <label
        htmlFor="customRange1"
        className="mb-2 inline-block text-neutral-700 dark:text-neutral-200"
      ></label>
      <div className="flex justify-between">
        <span>0€</span>
        <div>{value}€/jour</div>
        <span>30€</span>
      </div>
      <input
        type="range"
        className="transparent h-1.5 w-full cursor-pointer appearance-none rounded-lg border-transparent bg-neutral-200"
        id="customRange1"
        min="0"
        max="30"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};
export default CursorFilter;
