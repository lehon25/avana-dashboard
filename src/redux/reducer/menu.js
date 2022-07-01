import { GET_MENU, AUTH_ERROR } from "../action/actionType";

const initialState = { menu: [] };

function menuReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_MENU:
      return {
        ...state,
        menu: [...payload],
      };

    case AUTH_ERROR:
      return {
        ...state,
        error: {
          status: payload.response.status.toString(),
          errorText: payload.response.statusText,
        },
      };

    default:
      return state;
  }
}

export default menuReducer;
