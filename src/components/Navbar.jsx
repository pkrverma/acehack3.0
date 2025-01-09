import { useState } from "react";
import FancyButton from "./FancyButton";
import AceHackSm from "/assets/images/website-v2.svg";
// import AceHackSm from "/assets/images/acehack-nordek.svg";
import { IconContext } from "react-icons";
import { FaBars } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";

export const Navbar = () => {
  const [disp, set] = useState("hidden");
  const [closed, setClosed] = useState(true);
  const [scale, setScale] = useState("scale-0");
  const [height, setHeight] = useState("h-0");

  const clickHandler = () => {
    if (height == "h-0") setHeight("min-h-screen");
    else if (height == "min-h-screen") setHeight("h-0");
    if (scale === "scale-0") setScale("scale-100");
    else if (scale === "scale-100") setScale("scale-0");
    if (disp === "hidden") set("flex");
    else if (disp === "flex") set("hidden");
    setClosed(!closed);
  };

  return (
    <div
      className={`bg-gray-900/30 w-full sticky top-0 z-30 backdrop-blur-md md:h-auto ${height}`}
    >
      <IconContext.Provider
        value={{
          style: { fontSize: "2rem", position: "absolute", color: "white", marginTop: "1rem", marginLeft: "0.5rem"},
        }}
      >
        <div onClick={clickHandler}>
          {(closed && <FaBars className="md:hidden w-10 h-10 pl-4 py-1" />) ||
            (!closed && (
              <MdOutlineClose className="md:hidden w-10 h-10 pl-4 py-1" />
            ))}
        </div>
        <div>
          <div className="flex justify-between items-center">
            <a href="/">
              <img
                src={AceHackSm}
                alt="AceHack3.0"
                className="hidden lg:block object-contain h-20 ml-5"
              />
            </a>
            <div className="hidden space-x-6 md:flex flex-row items-center justify-center lg:justify-end w-full px-6 py-4">
              <FancyButton data="Register" id="register" />
              <FancyButton id={"about"} data={"About"} />
              {/* <FancyButton id={"live"} data={<a href="/live">Live</a>} /> */}
              <FancyButton id={"timeline"} data={"Timeline"} />
              <FancyButton id={"digitalswags"} data={"Digital Swags"} />
              <FancyButton id={"themes"} data={"Tracks"} />
              <FancyButton id={"speaker"} data={"Guests"} />
              {/* <FancyButton id={"team"} data={<a href="/team">Team</a>} /> */}
              {/* <FancyButton id={"getInvolved"} data={"Get Involved"} /> */}
              <FancyButton id={"faq"} data={"FAQ"} />
            </div>

            {/* mobile nav below */}
            <div
              className={`${scale} md:hidden py-24 gap-8 ${disp} flex-col m-24 w-[80%] ml-[20%] transition ease-in delay-100 duration-200`}
            >
              <FancyButton data="Register" id="register" />
              <FancyButton id={"about"} data={"About"} />
              {/* <FancyButton id={"live"} data={<a href="/live">Live</a>} /> */}
              <FancyButton id={"timeline"} data={"Timeline"} />
              <FancyButton id={"digitalswags"} data={"Digital Swags"} />
              <FancyButton id={"themes"} data={"Tracks"} />
              <FancyButton id={"speaker"} data={"Guests"} />
              {/* <FancyButton id={"team"} data={<a href="/team">Team</a>} /> */}
              {/* <FancyButton id={"getInvolved"} data={"Get Involved"} /> */}
              <FancyButton id={"faq"} data={"FAQ"} />
            </div>
          </div>
        </div>
      </IconContext.Provider>
    </div>
  );
};

export default Navbar;
