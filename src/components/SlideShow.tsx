import { FC } from "react";
import { Slide } from "react-slideshow-image";
import "../style/Slide.css";
import "react-slideshow-image/dist/styles.css";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";

const proprietes = {
  autoplay: false,
  indicators: true,
  transitionDuration: 500,
};

const SlideShow: FC = () => {

  const cld = new Cloudinary({
    cloud: {
      cloudName: "dhc7v7ktf",
    },
  });

  const menuiserie1 = cld.image("dit/menuiserie");
  const menuiserie2 = cld.image("dit/menuiserie-2");
  const menuiserie3 = cld.image("dit/menuiserie-3");

  return (
    <div className="slide-container">
      <Slide {...proprietes}>
        <div className="each-slide">
          <div>
            <AdvancedImage cldImg={menuiserie1} className="img-slide" />
          </div>
        </div>
        <div className="each-slide">
          <div>
            <AdvancedImage cldImg={menuiserie2} className="img-slide" />
          </div>
        </div>
        <div className="each-slide">
          <div>
            <AdvancedImage cldImg={menuiserie3} className="img-slide" />
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default SlideShow;
