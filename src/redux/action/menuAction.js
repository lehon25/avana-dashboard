import { GET_MENU, AUTH_ERROR } from "./actionType";
import store from "../store/index";
import { SidebarData } from "../../data/data";

export const loadMenu = () => async (dispatch) => {
  try {
    store.dispatch({
      type: GET_MENU,
      payload: SidebarData,
    });
  } catch (error) {
    console.log("ERROR CASE");
    store.dispatch({
      type: AUTH_ERROR,
      payload: error,
    });
  }
};
