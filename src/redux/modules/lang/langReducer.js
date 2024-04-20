import actionTypes from "./../../../Constants/actionTypes";

import lang from "../../../Constants/lang";

const { UZBEK, RUSSIAN ,ENGLISH} = lang;
const { SWITCH_TO_UZBEK, SWITCH_TO_RUSSIAN,SWITCH_TO_ENGLISH, SWITCH_LANG } = actionTypes;

export const langReducer = (state = RUSSIAN, { type }) => {
  switch (type) {
    case SWITCH_TO_RUSSIAN:
      return RUSSIAN;
    case SWITCH_TO_UZBEK:
      return UZBEK;
    case SWITCH_TO_ENGLISH:
        return ENGLISH;  

    case SWITCH_LANG:
      if (state === RUSSIAN) {
        return UZBEK;
      } else if (state === UZBEK) {
        return RUSSIAN;
      }  else if(state === ENGLISH){
        return ENGLISH
      }
      else {
        return state;
      }
    default:
      return state;
  }
};
