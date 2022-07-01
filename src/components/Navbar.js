import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SidebarData } from "../data/data";
import "./Navbar.css";
import { IconContext } from "react-icons";
import * as IoIcons from "react-icons/io";
import * as BIcons from "react-icons/bi";
import { capitalizeFirstLetter } from "../components/Hoc/Capitalize";
import { useDispatch, useSelector } from "react-redux";
import { GetLayout, loadMenu } from "../redux/action/menuAction";

function Navbar() {
  const dispatch = useDispatch();
  const [sidebar, setSidebar] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [data, setData] = useState([]);
  const [show, setShow] = useState(true);
  const [dashboard, setDashboard] = useState([]);
  const menuList = useSelector((state) => state.menu.menu);
  useEffect(() => {
    setDashboard(menuList);
    dispatch(loadMenu());
  }, []);

  const handleDropDown = (value) => {
    setDropdown(!dropdown);
    setData(value);
  };
  const handleShow = (value) => {
    setShow(!show);
  };
  console.log("menu", menuList);
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <nav className={sidebar ? "nav-menu" : "nav-menu"}>
          <ul className="nav-menu-items">
            <img
              id="logo"
              src="https://avana.id/wp-content/themes/avana-id/assets/images/logo.webp"
            />

            <img id="avatar" src="http://placekitten.com/500/500" />
            <div className="name">
              <h3>Avriza Bramantyo</h3>
            </div>

            {menuList.map((item, index) => {
              return (
                <div>
                  <li key={index} className="nav-text">
                    <Link to={item.id}>
                      <span>{capitalizeFirstLetter(item.id)}</span>
                    </Link>

                    {!item.childs ? (
                      ""
                    ) : (
                      <div className="dropDown-right">
                        <IoIcons.IoIosArrowDropdown
                          onClick={() => handleDropDown(item.id)}
                        />
                      </div>
                    )}
                  </li>
                  {!item.childs ? null : dropdown ? (
                    <div>
                      {item.childs.map((dt, index) => {
                        return data == item.id ? (
                          <li key={index} className="nav-text">
                            <Link to={dt.id}>
                              <span>{dt.id}</span>
                            </Link>
                            <div className="hide">
                              <BIcons.BiHide
                                onClick={() => handleShow(item.isShowed)}
                              />
                            </div>
                          </li>
                        ) : (
                          ""
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}
export default Navbar;
