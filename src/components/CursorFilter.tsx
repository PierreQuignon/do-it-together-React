import { FC } from "react";

const CursorFilter: FC = () => {
  return (
    <div>
      <label
        htmlFor="customRange1"
        className="mb-2 inline-block text-neutral-700 dark:text-neutral-200"
      >
        Prix
      </label>
      <input
        type="range"
        className="transparent h-1.5 w-full cursor-pointer appearance-none rounded-lg border-transparent bg-neutral-200"
        id="customRange1"
      />
    </div>
  );
};
export default CursorFilter;
