import { useSelector } from "react-redux";
import lang from "../Constants/lang";
import uzbek from "./uzbek";
import russian from "./russian";
import english from "./english";


const { UZBEK, RUSSIAN,ENGLISH } = lang;

function Text({ id }) {
  const lang = useSelector((state) => state.lang);
  switch (lang) {
    case RUSSIAN:
      return russian[id] ? russian[id] : id;
    case UZBEK:
      return uzbek[id] ? uzbek[id] : id;
    case ENGLISH:
      return english[id] ? english[id] : id;
    default:
      return id;
  }
}


export const text = ({ id, lang }) => {
  switch (lang) {
    case RUSSIAN:
      return russian[id] ? russian[id] : id;
    case UZBEK:
      return uzbek[id] ? uzbek[id] : id;
    case ENGLISH:
        return english[id] ? english[id] : id;
    default:
      return id;
  }
};

export default Text;
