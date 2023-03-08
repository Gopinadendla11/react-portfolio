import React from "react";

const SquareButton = (props) => {
  return (
    <button
      className={`bg-transparent px-6 py-3 my-3 rounded-md border-solid border-2 border-secondary  hover:bg-secondary text-sm {props.extrastyles}`}
    >
      {props.btnText}
    </button>
  );
};

SquareButton.defaultProps = {
  rounded: "xl",
  extrastyles: "",
};

export default SquareButton;
