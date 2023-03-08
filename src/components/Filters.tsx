import { FC, useEffect, useState } from "react";
import "../style/Filters.css";

interface categoriesProps {
  setActiveCategories: React.Dispatch<React.SetStateAction<string[]>>;
}

const Filters: FC<categoriesProps> = ({ setActiveCategories }) => {
  const [isToggled, setIsToggled] = useState<boolean>(false);

  function addCategory(categ: string) {
    setActiveCategories((currentCategories: string[]): string[] => [
      ...currentCategories,
      categ,
    ]);
  }

  useEffect(() => {
    let timeout;

    if (isToggled) {
      timeout = setTimeout(() => {
        setIsToggled(false);
      }, 1000);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [isToggled]);

  const handleClick = () => {
    setIsToggled(!isToggled);
  };

  return (
    <>
      <div className="tags-categories-container">
        <button className="tag-filter" onClick={() =>
        {addCategory("Mécanique")
        handleClick()}
      }>
          Mécanique
        </button>
        <button
          className="tag-filter"
          onClick={() => addCategory("Menuiserie")}
        >
          Menuiserie
        </button>
        <button
          className="tag-filter"
          onClick={() => addCategory("Couture/Maroquinerie")}
        >
          Couture/Maroquinerie
        </button>
        <button className="tag-filter" onClick={() => addCategory("Général")}>
          Général
        </button>
        <button className="tag-filter" onClick={() => addCategory("Sculpture")}>
          Sculpture
        </button>
        <button className="tag-filter" onClick={() => addCategory("Peinture")}>
          Peinture
        </button>
        <button
          className="tag-filter"
          onClick={() => addCategory("Métallerie")}
        >
          Métallerie
        </button>
        <button className="tag-filter" onClick={() => addCategory("Poterie")}>
          Poterie
        </button>
        <button
          className="reinitialized-btn"
          onClick={() => setActiveCategories([])}
        >
          Réinitialiser
        </button>
      </div>
    </>
  );
};

export default Filters;
