import actionTypes from "../../../Constants/actionTypes";

const { SWITCH_TO_UZBEK, SWITCH_TO_RUSSIAN, SWITCH_TO_ENGLISH, SWITCH_LANG } =
  actionTypes;

export const switchToUzbek = () => ({
  type: SWITCH_TO_UZBEK,
});

export const switchToRussian = () => ({
  type: SWITCH_TO_RUSSIAN,
});

export const switchToEnglish = () => ({
  type: SWITCH_TO_ENGLISH,
});

export const switchLang = () => ({
  type: SWITCH_LANG,
});
