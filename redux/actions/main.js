import * as types from "../types";

export const setInfo = (name) => {
  return {
    type: types.SET_NAME,
    payload: name,
  };
};
