import { useState } from "react";
import Menu from "./Menu";
import NavBar from "./Navbar";

const MenuHeader = () => {

  const [isActive, setActive] = useState(false);
  const handleActive = () => {
    setActive(!isActive)
  }

  return (
    <>
      <Menu active={isActive} click={handleActive}/>
      <NavBar active={isActive} click={handleActive}/>
    </>
  )
}

export default MenuHeader;