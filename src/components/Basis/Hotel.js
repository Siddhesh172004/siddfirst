import React, { useState } from "react";
// import "./hotel.css";
import Menu from "./Menuapi";
import Menucart from "./Menucart";
import Navbarfilter from "./Navbarfilter";

// creating unquie category  
const uniquelist = [
  ...new Set(
    Menu.map((cou) => {
      return cou.category;
    })
  ),
  "All",
];

console.log(uniquelist);
// Filter for Element code

const Hotel = () => {
  const [menuData, setMenuData] = useState(Menu);
//   const [menulist, setmenulist] = useState(uniquelist);
  const menulist=uniquelist;

  const filterit = (category) => {
    if (category === "All") {
      // If user wants to see full data
      return setMenuData(Menu);
    }
    const updatelist = Menu.filter((curr) => {
      return curr.category === category;
    });

    setMenuData(updatelist);
  };
  return (
    <>
      <Navbarfilter filterit={filterit} uniquelist={menulist} />
      <Menucart Menudata={menuData} />
    </>
  );
};

export default Hotel;
