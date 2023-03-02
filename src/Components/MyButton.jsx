import React from "react";

const MyButton = (props) => {
  return (
    <button className="bg-transparent px-6 py-3 my-3 rounded-3xl border-solid border-2 border-secondary1  hover:bg-secondary1 text-sm">
      {props.btnText}
    </button>
  );
};

export default MyButton;
