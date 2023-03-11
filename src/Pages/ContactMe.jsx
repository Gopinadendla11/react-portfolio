import React, { useRef, useState } from "react";
import { FaInstagram, FaTwitterSquare } from "react-icons/fa";
import { MdEmail, MdCall, MdFacebook } from "react-icons/md";
import { ImLinkedin } from "react-icons/im";
import SquareButton from "../Components/SquareButton";
import emailjs from "@emailjs/browser";

const ContactMe = () => {
  const form = useRef();

  const [isSentMsgVisible, setSentMsgVisibility] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pi4sv5p",
        "template_li40227",
        form.current,
        "L0kC_zKdvA2D5U8u3"
      )
      .then(
        (result) => {
          //console.log(result.text);
          form.current.reset();
          setSentMsgVisibility(true);
          setTimeout(() => {
            setSentMsgVisibility(false);
          }, 3000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="py-12 flex flex-col md:flex-row w-screen text-white">
      <div className="h-full basis-1/3 flex flex-col lg:ml-16 items-center justify-center">
        <p className="sm:text-5xl text-3xl my-5 font-bold">Contact Me</p>
        <div className="flex m-3 items-center">
          <MdEmail className="w-5 h-5 fill-secondary mx-3"></MdEmail>
          <p>gopinadendla1@gmail.com</p>
        </div>
        <div className="flex m-3 items-center">
          <MdCall className="w-5 h-5 fill-secondary mx-3"></MdCall>
          <p>+1 (704) 906 1872</p>
        </div>

        <div className="flex">
          <MdFacebook className="w-5 h-5 fill-secondary m-3"></MdFacebook>
          <FaTwitterSquare className="w-5 h-5 fill-secondary m-3"></FaTwitterSquare>
          <FaInstagram className="w-5 h-5 fill-secondary m-3"></FaInstagram>
          <a
            href="https://www.linkedin.com/in/gopinadendla/"
            target="_blank"
            rel="noreferrer"
          >
            <ImLinkedin className="w-5 h-5 fill-secondary m-3"></ImLinkedin>
          </a>
        </div>
        <a href="./Gopi Nadendla Resume.pdf" target="_blank">
          <SquareButton btnText="Download Resume"></SquareButton>
        </a>
      </div>
      <form
        className="h-full flex flex-col basis-2/3 items-center md:items-start"
        ref={form}
        onSubmit={sendEmail}
      >
        <input
          placeholder="Your Name"
          className="w-2/3 p-3 my-5 rounded-lg bg-matt"
          type="text"
          name="from_name"
          required
        ></input>
        <input
          placeholder="Your Email"
          className="w-2/3 p-3 my-5 rounded-lg bg-matt"
          type="email"
          name="from_email"
          required
        ></input>
        <textarea
          placeholder="Your Message"
          className="w-2/3 h-48 p-3 my-5 rounded-lg bg-matt focus:border-white"
          name="message"
        ></textarea>
        <SquareButton
          btnText="Submit"
          rounded="md"
          type="submit"
        ></SquareButton>
        {isSentMsgVisible ? (
          <p className="text-[14px] text-secondary">
            Your message is sent. I will get back to you Soon. Thank you.
          </p>
        ) : null}
      </form>
      {/* <div></div> */}
    </div>
  );
};

export default ContactMe;
