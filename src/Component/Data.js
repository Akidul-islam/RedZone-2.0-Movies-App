import { AiFillHome } from "react-icons/ai";
import { RiSlideshow3Line } from "react-icons/ri";
import { IoLogoFreebsdDevil } from "react-icons/io";
import { IoIosSettings } from "react-icons/io";

const BaseURL = "http://www.omdbapi.com/?i=tt3896198&apikey=72273234&s";
// unnessary API
const MoviesApi = {
  Thor: "http://www.omdbapi.com/?i=tt3896198&apikey=72273234&s=Thor",
  Marvels: "http://www.omdbapi.com/?i=tt3896198&apikey=72273234&s=marvels",
  Action: "http://www.omdbapi.com/?i=tt3896198&apikey=72273234&s=action",
};

// NAVBER DATA
const NavData = [
  {
    id: 1,
    icon: <AiFillHome />,
    toolTip: "Home",
    right: "-5rem",
    link: "/",
  },
  {
    id: 2,
    icon: <RiSlideshow3Line />,
    toolTip: "TV Show",
    right: "-7rem",
    link: "/tvshow",
  },
  {
    id: 3,
    icon: <IoLogoFreebsdDevil />,
    toolTip: "Web SERISE",
    right: "-8.5rem",
    link: "/webseries",
  },
  {
    id: 4,
    icon: <IoIosSettings />,
    toolTip: "Setting",
    right: "-5.5rem",
    link: "/setting",
  },
];

// moive IcoN ICOON

export { BaseURL, MoviesApi, NavData };
