import { FC, useState } from "react";
import "../style/App.css";
import "../style/Filters.css";

interface categoriesProps {
  setActiveCategories: React.Dispatch<React.SetStateAction<string[]>>;
  activeCategories: string[];
}

const TagsFilters: FC<categoriesProps> = ({
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

  const [mecaToggled, setMecaToggled] = useState<boolean>(false);
  const [menuiToggled, setMenuiToggled] = useState<boolean>(false);
  const [geneToggled, setGeneToggled] = useState<boolean>(false);
  const [sculToggled, setSculToggled] = useState<boolean>(false)


  return (
    <>
      <div className="tags-categories-container">
        <button className={mecaToggled? 'toggled-class': 'btn-style-1'} onClick={() => {addCategory("Mécanique"); setMecaToggled(prevState => !prevState)}}>
          Mécanique
        </button>
        <button className={menuiToggled? 'toggled-class': 'btn-style-1'} onClick={() => {addCategory("Menuiserie"); setMenuiToggled(prevState => !prevState)}}>
          Menuiserie
        </button>
        <button className={geneToggled? 'toggled-class': 'btn-style-1'} onClick={() => {addCategory("Général"); setGeneToggled(prevState => !prevState)}}>
          Général
        </button>
        <button className={sculToggled? 'toggled-class': 'btn-style-1'} onClick={() => {addCategory("Sculpture"); setSculToggled(prevState => !prevState)}}>
          Scupture
        </button>
        <button
          className="btn-style-1"
          onClick={() => {setMecaToggled(false); setMenuiToggled(false); setGeneToggled(false); setSculToggled(false); setActiveCategories([])}}
        >
          Réinitialiser
        </button>
      </div>
    </>
  );
};

export default TagsFilters;
