import { FC, useState } from "react";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { HiArrowsExpand } from "react-icons/hi";
import "../style/Gallery.css";

const Gallery: FC = () => {
  const cld = new Cloudinary({
    cloud: {
      cloudName: "dhc7v7ktf",
    },
  });

  const menuiserie1 = cld.image("dit/menuiserie");
  const menuiserie2 = cld.image("dit/menuiserie-2");
  const menuiserie3 = cld.image("dit/menuiserie-3");

  menuiserie1.resize(fill().width(750).height(450));
  menuiserie2.resize(fill().width(750).height(450));
  menuiserie3.resize(fill().width(750).height(450));

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
      <AdvancedImage cldImg={picture1} className="workshop-image1"/>
      <div>
        <button onClick={switchPicture2}>
          <AdvancedImage cldImg={picture2} className="workshop-image2"/>
          <HiArrowsExpand className="arrow-icon-image2"/>
        </button>
        <button onClick={switchPicture3}>
          <AdvancedImage cldImg={picture3} className="workshop-image3"/>
          <HiArrowsExpand className="arrow-icon-image3"/>
        </button>
      </div>
    </div>
  );
};

export default Gallery;
