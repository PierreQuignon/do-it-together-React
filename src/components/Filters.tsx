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

  const [mecaToggled, setMecaToggled] = useState(false);
  const [menuiToggled, setMenuiToggled] = useState(false);
  const [geneToggled, setGeneToggled] = useState(false);
  const [sculToggled, setSculToggled] = useState(false)


  return (
    <>
      <div className="tags-categories-container">
        <button className={mecaToggled? 'toggled-class': 'tag-filter'} onClick={() => {addCategory("Mécanique"); setMecaToggled(prevState => !prevState)}}>
          Mécanique
        </button>
        <button className={menuiToggled? 'toggled-class': 'tag-filter'} onClick={() => {addCategory("Menuiserie"); setMenuiToggled(prevState => !prevState)}}>
          Menuiserie
        </button>
        <button className={geneToggled? 'toggled-class': 'tag-filter'} onClick={() => {addCategory("Général"); setGeneToggled(prevState => !prevState)}}>
          Général
        </button>
        <button className={sculToggled? 'toggled-class': 'tag-filter'} onClick={() => {addCategory("Sculpture"); setSculToggled(prevState => !prevState)}}>
          Scupture
        </button>
        <button
          className="reinitialized-btn"
          onClick={() => {setMecaToggled(false); setMenuiToggled(false); setGeneToggled(false); setSculToggled(false); setActiveCategories([])}}
        >
          Réinitialiser
        </button>
      </div>
    </>
  );
};

export default Filters;
