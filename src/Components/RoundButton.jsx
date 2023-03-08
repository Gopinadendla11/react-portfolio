import React from "react";

const MyButton = (props) => {
  return (
    <button
      className={`bg-transparent px-6 py-3 my-3 rounded-3xl border-solid border-2 border-secondary  hover:bg-secondary text-sm {props.extrastyles}`}
    >
      {props.btnText}
    </button>
  );
};

// MyButton.defaultProps = {
//   rounded: "xl",
//   extrastyles: "",
// };

export default MyButton;
