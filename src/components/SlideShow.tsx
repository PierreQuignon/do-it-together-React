import { FC } from "react";
import { Slide } from "react-slideshow-image";
import "../style/Slide.css";
import "react-slideshow-image/dist/styles.css";

const proprietes = {
  autoplay: false,
  indicators: true,
  transitionDuration: 500,
};

const SlideShow: FC = () => {
  return (
    <div className="slide-container">
      <Slide {...proprietes}>
        <div className="each-slide">
          <div>
            {/* <img src={menuiserie1} alt="image1" className="img-slide" /> */}
          </div>
        </div>
        <div className="each-slide">
          <div>
            {/* <img src={menuiserie2} alt="image2" className="img-slide" /> */}
          </div>
        </div>
        <div className="each-slide">
          <div>
            {/* <img src={menuiserie3} alt="image3" className="img-slide" /> */}
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default SlideShow;
