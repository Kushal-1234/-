import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IconButton, Menu, MenuItem, styled } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Close } from "@mui/icons-material";
import "./Header.scss";

const menuItem = [
  "Home",
  "News",
  "Research",
  "Publications",
  "Software",
  "Teaching",
  "People",
  "Positions",
];

const StyledMenu = styled((props) => (
  <Menu
    disableScrollLock={true}
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    minWidth: "12rem",
    backgroundColor: "rgba(0,0,0,0.9)",
    color: "#fff",
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
      color: "#fff",
    },
    "& .Mui-selected": {
      backgroundColor: "#fff !important",
      color: "#000",
    },
  },
}));

const Header = ({ activeNav, setActiveNav }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [isRotate, setIsRotate] = useState(false);
  const [changeMenuIcon, setChangeMenuIcon] = useState(null);
  const open = Boolean(anchorEl);

  useEffect(() => {
    const pathname = location.pathname === "/" ? "home" : location.pathname;
    setActiveNav(pathname);
  }, [location]);

  useEffect(() => {
    setTimeout(() => {
      setChangeMenuIcon(() => !changeMenuIcon);
    }, 600);
  }, [isRotate]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setIsRotate(false);
  };

  return (
    <div
      className={
        activeNav === "home" ? "header-main header-main__home" : `header-main`
      }
    >
      <IconButton
        id="basic-button"
        className="header-main__iconContainer"
        style={{
          animation: isRotate
            ? "rotateRight ease 0.5s"
            : "rotateLeft ease 0.5s",
        }}
        onClick={(e) => {
          setIsRotate(!isRotate);
          changeMenuIcon ? handleClick(e) : handleClose();
        }}
      >
        {changeMenuIcon || changeMenuIcon === null ? (
          <MenuIcon htmlColor="#fff" style={{ fontSize: "1.2rem" }} />
        ) : (
          <Close htmlColor="#fff" style={{ fontSize: "1.2rem" }} />
        )}
      </IconButton>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {menuItem?.map((item, i) => (
          <MenuItem
            key={i}
            selected={activeNav.includes(item.toLowerCase()) ? true : false}
            onClick={() => {
              handleClose();
              navigate(item.toLowerCase());
            }}
            href={item}
          >
            {item}
          </MenuItem>
        ))}
      </StyledMenu>
      <div
        className={
          activeNav === "home"
            ? "header-main__textContainer header-main__textContainer__home"
            : "header-main__textContainer"
        }
      >
        <div
          className="header-main__textContainer__main"
          style={{ marginBottom: activeNav === "home" ? "50px" : 0 }}
        >
          <div className="header-main__textContainer__main__text1">
            Dr. Letu Qingge Lab
          </div>
          <div className="header-main__textContainer__main__text2">
            Research Group at North Carolina A&T State University
          </div>
        </div>
      </div>
      <div
        className={
          activeNav === "home"
            ? "header-main__linksContainer header-main__linksContainer__home"
            : "header-main__linksContainer"
        }
      >
        <Link
          to="/"
          className={
            location.pathname === "/"
              ? "header-main__linksContainer__link header-main__linksContainer__activeLink"
              : "header-main__linksContainer__link"
          }
        >
          ABOUT
        </Link>
        <Link
          to="/news"
          className={
            location.pathname === "/news"
              ? "header-main__linksContainer__link header-main__linksContainer__activeLink"
              : "header-main__linksContainer__link"
          }
        >
          NEWS
        </Link>
        <Link
          to="/research"
          className={
            location.pathname === "/research"
              ? "header-main__linksContainer__link header-main__linksContainer__activeLink"
              : "header-main__linksContainer__link"
          }
        >
          RESEARCH
        </Link>
        <Link
          to="/publications"
          className={
            location.pathname === "/publications"
              ? "header-main__linksContainer__link header-main__linksContainer__activeLink"
              : "header-main__linksContainer__link"
          }
        >
          PUBLICATIONS
        </Link>
        <Link
          to="/software"
          className={
            location.pathname === "/software"
              ? "header-main__linksContainer__link header-main__linksContainer__activeLink"
              : "header-main__linksContainer__link"
          }
        >
          SOFTWARE
        </Link>
        <Link
          to="/teaching"
          className={
            location.pathname === "/teaching"
              ? "header-main__linksContainer__link header-main__linksContainer__activeLink"
              : "header-main__linksContainer__link"
          }
        >
          TEACHING
        </Link>
        <Link
          to="/people"
          className={
            location.pathname === "/people"
              ? "header-main__linksContainer__link header-main__linksContainer__activeLink"
              : "header-main__linksContainer__link"
          }
        >
          PEOPLE
        </Link>
        <Link
          to="/positions"
          className={
            location.pathname === "/positions"
              ? "header-main__linksContainer__link header-main__linksContainer__activeLink"
              : "header-main__linksContainer__link"
          }
        >
          POSITIONS
        </Link>
      </div>
    </div>
  );
};

export default Header;
