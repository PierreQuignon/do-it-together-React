import { FC, useState } from "react";
import menuiserie1 from "../assets/menuiserie/menuiserie1.jpg";
import menuiserie2 from "../assets/menuiserie/menuiserie2.jpg";
import menuiserie3 from "../assets/menuiserie/menuiserie3.jpeg";
import "../style/Gallery.css";

const Gallery: FC = () => {
  const [picture1, setPicture1] = useState(menuiserie1);
  const [picture2, setPicture2] = useState(menuiserie2);
  const [picture3, setPicture3] = useState(menuiserie3);

  function switchPicture2() {
    setPicture1(picture2);
    setPicture2(picture1);
  }

  function switchPicture3() {
    setPicture1(picture3);
    setPicture3(picture1);
  }

  return (
    <div className="images-worshop-container">
      <img src={picture1} className="workshop-image1"/>
      <div>
        <button onClick={switchPicture2}>
          <img src={picture2} alt="image2" className="workshop-image2"/>
        </button>
        <button onClick={switchPicture3}>
          <img src={picture3} alt="image3" className="workshop-image3"/>
        </button>
      </div>
    </div>
  );
};

export default Gallery;
