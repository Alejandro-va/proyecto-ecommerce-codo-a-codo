import React from "react";
import Navbar from "./Navbar/Navbar";
import ScrollButton from "./ScrollButton/ScrollButton";

export const Header = () => {
  const [scrollHeight, setScrollHeight] = React.useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset; //obtiene el scroll en y
    setScrollHeight(position);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Navbar />
      <ScrollButton isScrolling={scrollHeight} />
    </>
  )
}

export default Header;