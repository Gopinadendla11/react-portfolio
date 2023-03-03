import React from "react";

const SkillCard = (options) => {
  return (
    <div className="bg-matt rounded-lg h-auto p-5 lg:p-10 hover:bg-secondary transition hover:-translate-y-3 duration-200">
      {/* <FaTools className="w-16 h-16"></FaTools> */}
      {options.icon}
      <p className="my-10 text-3xl">{options.title}</p>
      <p className="text-sm">{options.content}</p>
      <p className="text-md my-5 mt-10 mr-2">
        Programming Languages : {options.langs}
      </p>
      <p className="text-md my-5 mr-2">
        Tools and Frameworks : {options.tools}
      </p>
    </div>
  );
};

export default SkillCard;
