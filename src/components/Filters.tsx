import { FC, useState } from "react";
import "../style/Filters.css";

interface categoriesProps {
  setActiveCategories: React.Dispatch<React.SetStateAction<string[]>>;
  activeCategories: string[];
}

const Filters: FC<categoriesProps> = ({
  setActiveCategories,
  activeCategories,
}) => {
  function addCategory(categ: string) {
    if (activeCategories.includes(categ)) {
      setActiveCategories(activeCategories.filter((cat) => cat !== categ));
    } else {
      setActiveCategories([...activeCategories, categ]);
    }
  }

  const [isToggled, setIsToggled] = useState(false);

  const handleClick = () => {
    setIsToggled(prevState => !prevState);
  };


  return (
    <>
      <div className="tags-categories-container">
        <button className={isToggled? 'toggled-class': 'tag-filter'} onClick={() => {addCategory("Mécanique"); handleClick()}}>
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
