import { FC } from "react";
import { Workshop } from "../pages/Workshops";
import { IoMdFlash } from "react-icons/io";
import { BsLightbulb } from "react-icons/bs";
import { FaTools } from "react-icons/fa";
import { LuParkingCircle } from "react-icons/lu";
import { FaDog } from "react-icons/fa";
import { BiWifi } from "react-icons/bi";
import { TbWind } from "react-icons/tb";
import { GiSoundOn } from "react-icons/gi";
import "../style/OptionsWorkshop.css";
import { BiArea } from "react-icons/bi";
import { IoIosWater } from "react-icons/io";

interface optionsWorkshopProps {
  workshopTargeted: Workshop[];
}

const OptionsWorkshop: FC<optionsWorkshopProps> = ({ workshopTargeted }) => {
  return (
    <>
      <p className="options-title">Ce que propose cet atelier</p>
      <div className="options-container">
        {workshopTargeted.map((workshop: Workshop) => (
          <>
            <div className="icon-text-container">
              <BiArea className="icon-option" />
              {workshop.squareMeter} m2
            </div>
            <div>
              {workshop.electricity ? (
                <>
                  <div className="icon-text-container">
                    <IoMdFlash className="icon-option" />
                    <p>Prises électriques</p>
                  </div>
                </>
              ) : null}
            </div>
            <div>
              {workshop.water ? (
                <>
                  <div className="icon-text-container">
                    <IoIosWater className="icon-option" />
                    <p>Point d'eau</p>
                  </div>
                </>
              ) : null}
            </div>
            <div>
              {workshop.light ? (
                <>
                  <div className="icon-text-container">
                    <BsLightbulb className="icon-option" />
                    <p>Eclairage adapté au bricolage</p>
                  </div>
                </>
              ) : null}
            </div>
            <div>
              {workshop.maintools ? (
                <>
                  <div className="icon-text-container">
                    <FaTools className="icon-option" />
                    <p>Principaux outils mis à disposition</p>
                  </div>
                </>
              ) : null}
            </div>
            <div>
              {workshop.parking ? (
                <>
                  <div className="icon-text-container">
                    <LuParkingCircle className="icon-option" />
                    <p>Parking à proximité</p>
                  </div>
                </>
              ) : null}
            </div>
            <div>
              {workshop.animals ? (
                <>
                  <div className="icon-text-container">
                    <FaDog className="icon-option" />
                    <p>Animaux de compagnies acceptés</p>
                  </div>
                </>
              ) : null}
            </div>
            <div>
              {workshop.parking ? (
                <>
                  <div className="icon-text-container">
                    <BiWifi className="icon-option" />
                    <p>Wifi à disposition</p>
                  </div>
                </>
              ) : null}
            </div>
            <div>
              {workshop.pressurizedair ? (
                <>
                  <div className="icon-text-container">
                    <TbWind className="icon-option" />
                    <p>Air comprimé à disposition</p>
                  </div>
                </>
              ) : null}
            </div>
            <div>
              {workshop.soundproof ? (
                <>
                  <div className="icon-text-container">
                    <GiSoundOn className="icon-option" />
                    <p>Pièce insonorisé</p>
                  </div>
                </>
              ) : null}
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default OptionsWorkshop;
