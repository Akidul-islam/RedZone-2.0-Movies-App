import React, { useState } from "react";
import "./sidebar.css";
import { NavData } from "../Data";
import { Link } from "react-router-dom";
import useStateManage from "../useStateManage";

const Sidebar = () => {
  const { scroll } = useStateManage();
  //eslint-disable-next-line
  const [state, setState] = useState(NavData);
  const [side, setSide] = useState(0);

  const changeValue = (index) => {
    setSide(index);
  };

  return (
    <aside
      className={`fixed py-2 left-0 top-1/4  z-[1000] rounded-md bg-darkOpa backdrop-blur-[2px] backdrop-brightness-[50%] 
      shadow-bShadow ease-linear duration-1000 ${
        scroll ? "-translate-x-full overflow-x-hidden" : null
      }`}
    >
      <ul style={{ display: "flex", gap: "0.5rem", flexDirection: "column" }}>
        {state.map((item, index) => {
          return (
            <li
              key={item.id}
              className='relative cursor-pointer list-none flex items-center text-lg py-2 px-[0.6rem] z-[1] group'
            >
              <Link to={item.link}>
                <span
                  onClick={() => changeValue(index)}
                  className={`group-hover:text-Red group-hover:opacity-100 text-white font-normal text-[1.6rem] opacity-50 ease-in duration-500 ${
                    side === index ? "text-Red opacity-100" : null
                  }`}
                >
                  {item.icon}
                </span>
              </Link>
              <span
                className='absolute text-white invisible py-1 px-3 -right-[5] top-0 ease-linear duration-200 rounded-sm boder border-solid border-r-gray-300 border-[1px] bg-black scale-50 group-hover:visible group-hover:scale-100'
                style={{ position: "absolute", right: `${item.right}` }}
              >
                {item.toolTip}
              </span>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
