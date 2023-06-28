import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = (props) => {
  return (
    <div className="rounded-lg hover:scale-110 transition-transform duration-500 relative group w-120 h-120">
      <img
        src={props.image}
        className="object-contain rounded-lg "
        alt="profile"
      ></img>
      <div className="w-full  h-0  flex flex-col justify-center text-white-700 items-center text-center px-16 transition-[height] duration-500 group-hover:h-full invisible group-hover:visible absolute bottom-0 rounded-lg bg-gradient-to-t from-secondary">
        <p className="text-md xl:text-lg mb-5">{props.title}</p>
        <p className="text-sm">{props.content}</p>
        <a href={props.projectLink} target="_blank" rel="noreferrer">
          <FaExternalLinkAlt className="lg:m-8 m-3  lg:w-10  lg:h-10 "></FaExternalLinkAlt>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
