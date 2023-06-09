import { FC } from "react";
import { Slide } from "react-slideshow-image";
import "../style/Slide.css";
import "react-slideshow-image/dist/styles.css";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";
import { Workshop as workshopType } from "../pages/Workshops";

const proprietes = {
  autoplay: false,
  indicators: true,
  transitionDuration: 500,
};

interface WorkshopProps {
  workshop: workshopType;
}

const SlideShow: FC<WorkshopProps> = ({workshop}) => {

  const cld = new Cloudinary({
    cloud: {
      cloudName: "dhc7v7ktf",
    },
  });

  const imageSlide1 = cld.image(workshop.image1);
  const imageSlide2 = cld.image(workshop.image2);
  const imageSlide3 = cld.image(workshop.image3);

  return (
    <div className="slide-container">
      <Slide {...proprietes}>
        <div className="each-slide">
          <div>
            <AdvancedImage cldImg={imageSlide1} className="img-slide" />
          </div>
        </div>
        <div className="each-slide">
          <div>
            <AdvancedImage cldImg={imageSlide2} className="img-slide" />
          </div>
        </div>
        <div className="each-slide">
          <div>
            <AdvancedImage cldImg={imageSlide3} className="img-slide" />
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default SlideShow;
