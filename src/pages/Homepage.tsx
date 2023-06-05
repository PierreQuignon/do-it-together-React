import { Link } from "react-router-dom";
import "../style/Homepage.css";

import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";
import { fill } from "@cloudinary/url-gen/actions/resize";

function Homepage() {
  const cld = new Cloudinary({
    cloud: {
      cloudName: "dhc7v7ktf",
    },
  });

  // Instantiate a CloudinaryImage object for the image with the public ID, 'docs/models'.
  const myImage = cld.image("docs/models");

  // Resize to 250 x 250 pixels using the 'fill' crop mode.
  myImage.resize(fill().width(250).height(250));

  return (
    <div className="homepage-container">
      <Link to="/workshops">Découvrir les ateliers</Link>
      <div>
        <AdvancedImage cldImg={myImage} />
      </div>
    </div>
  );
}

export default Homepage;
