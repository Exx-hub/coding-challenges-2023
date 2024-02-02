/* eslint-disable react/prop-types */
import ArrowDown from "../../icons/ArrowDown";
import ArrowRight from "../../icons/ArrowRight";

function ArrowIcon({ open }) {
  return open ? <ArrowDown /> : <ArrowRight />;
}

export default ArrowIcon;
