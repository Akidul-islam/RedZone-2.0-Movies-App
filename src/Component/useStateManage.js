import { useState, useEffect } from "react";
const useStateManage = () => {
  const [scroll, setScroll] = useState(false);
  const [inputAnimite, setInputAnimite] = useState(false);

  const scrollAnimite = () => {
    let scrollHeight = window.scrollY;
    if (scrollHeight > 150) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  const SignUpBtn = () => {
    setScroll(true);
  };
  // clean fun
  useEffect(() => {
    window.addEventListener("scroll", scrollAnimite);
    return () => {
      window.addEventListener("scroll", scrollAnimite);
    };
  }, []);

  // input animition
  const inputAnimitFun = (index) => {
    setInputAnimite(index);
  };

  return { scroll, inputAnimite, inputAnimitFun, SignUpBtn };
};
export default useStateManage;
