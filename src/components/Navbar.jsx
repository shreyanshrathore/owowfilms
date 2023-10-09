import React, { useState } from "react";

import icon1 from "../assets/social media icons/facebook (1).svg";
import icon2 from "../assets/social media icons/instagram (1).svg";
import icon3 from "../assets/social media icons/twitter.svg";
import icon4 from "../assets/social media icons/youtube.svg";
import { Link } from "react-scroll";
import DragHandleIcon from "@mui/icons-material/DragHandle";

import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";


// import {
//   Drawer,
//   Button,
//   Typography,
//   IconButton,
// } from "@material-tailwind/react";

const logo =
  "https://owowfilmsbucket.s3.ap-south-1.amazonaws.com/owow-final-logo-white.png";
const icons = [
  {
    icon: icon1,
    link: "https://www.facebook.com/profile.php?id=100085407064108",
  },

  {
    icon: icon2,
    link: "https://www.instagram.com/owow_films/?igshid=NmNmNjAwNzg%3D&__coig_restricted=1",
  },

  {
    icon: icon3,
    link: "https://twitter.com/FilmsOwow",
  },

  {
    icon: icon4,
    link: "https://www.youtube.com/channel/UC2X4gonZ8fcaFb8MbepuMkQ",
  },
];
const Navbar = () => {
  const [open, setOpen] = useState(false);

  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ right: open });
  };

  const links = [
    { title: "HOME", send: "home" },
    { title: "ABOUT US", send: "about-us" },
    { title: "PORTFOLIO", send: "portfolio" },
    { title: "CAREERS", send: "careers" },
    { title: "CONTACT US", send: "contact-us" },
  ];
  const list = () => (
    <div className="bg-black h-full">
      <Box
        sx={{ width: 250 }}
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        <List>
          {links.map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <Link
                  to={text.send}
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="cursor-pointer"
                >
                  <div className="text-lg font-semibold text-white">{text.title}</div>
                </Link>
                <Divider />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </div>
  );

  return (
    <div>
      <div className="flex absolute z-30 justify-between w-full p-2 top-0 px-12 ">
        <img className="h-28 md:h-32 mt-[-40px] ml-[-70px]" src={logo} alt="" />
        <div className="hidden md:flex">
          <Options />
        </div>
        <div
          className="text-white md:hidden cursor-pointer mr-[-30px] h-min ml-32"
          onClick={toggleDrawer(true)}
        >
          <DragHandleIcon />
        </div>

        <div>
          <SwipeableDrawer
            anchor="right"
            open={state.right}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
          >
            {list()}
          </SwipeableDrawer>
        </div>

        <div className="gap-6 hidden md:flex">
          {icons.map((item) => (
            <div>
              <a href={item.link} target="blank">
                <img
                  className="h-8 text-red-200 cursor-pointer"
                  src={item.icon}
                  alt=""
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Options = () => {
  return (
    <div className="text-white flex font-extrabold gap-8 py ">
      <Link
        to="home"
        spy={true}
        smooth={true}
        duration={500}
        className="cursor-pointer"
      >
        HOME
      </Link>
      <Link
        to="about-us"
        spy={true}
        smooth={true}
        duration={500}
        className="cursor-pointer"
      >
        ABOUT US
      </Link>
      <Link
        to="portfolio"
        spy={true}
        smooth={true}
        duration={500}
        className="cursor-pointer"
      >
        PORTFOLIO
      </Link>
      <Link
        to="careers"
        spy={true}
        smooth={true}
        duration={500}
        className="cursor-pointer"
      >
        CAREERS
      </Link>
      <Link
        to="contact-us"
        spy={true}
        smooth={true}
        duration={500}
        className="cursor-pointer"
      >
        CONTACT US
      </Link>
    </div>
  );
};

export default Navbar;
