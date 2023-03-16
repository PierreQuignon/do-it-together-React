import { FC } from 'react'
import { Slide } from 'react-slideshow-image'
import menuiserie1 from "../assets/menuiserie1.jpg"
import menuiserie2 from "../assets/menuiserie2.jpg"
import menuiserie3 from "../assets/menuiserie3.jpg"

const proprieties = {
 duration: 5000,
 transitionDuration: 500,
 infinite: true,
 indicators: true,
 arrows: true,
}

const SlideShow: FC = () => {

return (
  <div className='containerSlide'>
    <Slide {...proprieties}>
      <div className='each-slide'>
        <div>
          <img src={menuiserie1} alt="image1" />
        </div>
      </div>
      <div className='each-slide'>
        <div>
          <img src={menuiserie2} alt="image2" />
        </div>
      </div>
      <div className='each-slide'>
        <div>
          <img src={menuiserie3} alt="image3" />
        </div>
      </div>
    </Slide>
  </div>
)
};

export default SlideShow;
