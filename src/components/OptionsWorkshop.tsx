import { FC } from "react";
import { Workshop } from "../pages/Workshops";
import { IoMdFlash } from "react-icons/io";
import { IoMdFlashOff } from "react-icons/io";
import { BsLightbulb } from "react-icons/bs";
import { BsLightbulbOff } from "react-icons/bs";
import { FaTools } from "react-icons/fa";
import { LuParkingCircle } from "react-icons/lu";
import { LuParkingCircleOff } from "react-icons/lu";
import { FaDog } from "react-icons/fa";
import { BiWifi } from "react-icons/bi";
import { BiWifiOff } from "react-icons/bi";
import { TbWind } from "react-icons/tb";
import { TbWindOff } from "react-icons/tb";
import { GiSoundOn } from "react-icons/gi";
import { GiSoundOff } from "react-icons/gi";


interface optionsWorkshopProps {
  workshopTargeted: Workshop[];
}

const OptionsWorkshop: FC<optionsWorkshopProps> = ({ workshopTargeted }) => {
  return (
    <>
      <p>Caratéristiques :</p>
      <div className="options-container">
        {workshopTargeted.map((workshop: Workshop) => (
          <>
            <div>{workshop.squareMeter}</div>
            <div>
              {workshop.electricity ? (
                <IoMdFlash className="elec-icon" />
              ) : (
                <IoMdFlashOff className="no-elec-icon" />
              )}
            </div>
            <div>
              {workshop.light ? (
                <BsLightbulb className="light-icon" />
              ) : (
                <BsLightbulbOff className="no-light-icon" />
              )}
            </div>
            <div>
              {workshop.maintools ? (
                <>
                  <FaTools className="maintools-icon" />
                  <p>
                    Principaux outils <b>fournies</b>
                  </p>
                </>
              ) : (
                <>
                  <FaTools className="maintools-icon" />
                  <p>
                    Principaux outils <b>non fournies</b>
                  </p>
                </>
              )}
            </div>
            <div>
              {workshop.parking ? (
                <LuParkingCircle className="parking-icon" />
              ) : (
                <LuParkingCircleOff className="no-parking-icon" />
              )}
            </div>
            <div>
              {workshop.animals ? (
                <>
                  <FaDog className="dog-icon" />
                  <p>
                    Animaux de compagnies <b>acceptés</b>
                  </p>
                </>
              ) : (
                <>
                  <FaDog className="dog-icon" />
                  <p>
                  Animaux de compagnies <b>interdits</b>
                  </p>
                </>
              )}
            </div>
            <div>
              {workshop.parking ? (
                <BiWifi className="wifi-icon" />
              ) : (
                <BiWifiOff className="no-wifi-icon" />
              )}
            </div>
            <div>
              {workshop.pressurizedair ? (
                <TbWind className="air-icon" />
              ) : (
                <TbWindOff className="no-air-icon" />
              )}
            </div>
            <div>
              {workshop.soundproof ? (
                <GiSoundOn className="soundproof-icon" />
              ) : (
                <GiSoundOff className="no-soundproof-icon" />
              )}
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default OptionsWorkshop;
