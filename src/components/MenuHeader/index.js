import { useState } from "react";
import Menu from "./Menu";
import NavBar from "./Navbar";

const MenuHeader = ({bgActive}) => {

  const [isOpen, setOpen] = useState(null);

  const handleClickHamburger = () => {
    setOpen(prevState => !prevState)
  }

  return (
    <div className="header">
      <Menu active={isOpen}/>
      <NavBar active={isOpen} click={handleClickHamburger} bgActive={bgActive}/>
    </div>
  )
}

export default MenuHeader;