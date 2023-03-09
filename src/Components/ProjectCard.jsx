import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = (props) => {
  return (
    <div className="rounded-lg h-auto hover:scale-110 transition-transform duration-500 relative group">
      <img
        src={props.image}
        className="object-contain rounded-lg aspect-3/2 "
        alt="profile"
      ></img>
      <div className="w-full  h-0  flex flex-col justify-center items-center text-center px-16 transition-[height] duration-500 group-hover:h-full invisible group-hover:visible absolute bottom-0 rounded-lg bg-gradient-to-t from-secondary">
        <p className="text-lg mb-5">{props.title}</p>
        <p className="text-sm">{props.content}</p>
        <a href={props.projectLink} target="_blank" rel="noreferrer">
          <FaExternalLinkAlt className="m-8  w-10  h-10 "></FaExternalLinkAlt>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
