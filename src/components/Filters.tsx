import { FC } from "react";
import "../style/Filters.css"


type SetActiveCategories = (categories: string[]) => void;


const Filters: FC<{ setActiveCategories: SetActiveCategories }> = ({setActiveCategories}) => {


  return (
    <>
    <div className='tags-categories-container'>
      <button className="tag-filter" onClick={() => setActiveCategories(["Mécanique"])}>Mécanique</button>
      <button className="tag-filter">Menuiserie</button>
      <button className="tag-filter">Couture/maroquinerie</button>
      <button className="tag-filter">Général</button>
      <button className="tag-filter">Sculpture</button>
      <button className="tag-filter">Peinture</button>
      <button className="tag-filter">Métallerie</button>
      <button className="tag-filter">Poterie</button>
    </div>
    </>
  )
}

export default Filters;
