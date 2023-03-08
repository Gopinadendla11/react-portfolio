import "./App.css";
import bannerImage from "./assets/images/Home_Banner.png";
import TypeWriterEffect from "react-typewriter-effect";
import studentImage from "./assets/images/man-posing.png";
import RoundButton from "./Components/RoundButton";
import { FaTools } from "react-icons/fa";
import { MdWeb, MdEmail, MdWork, MdCall, MdFacebook } from "react-icons/md";
import { ImAndroid, ImLinkedin } from "react-icons/im";
import SkillCard from "./Components/SkillCard";
import { Chrono } from "react-chrono";
import { FaUniversity, FaInstagram, FaTwitterSquare } from "react-icons/fa";
import MyNavigationBar from "./Components/MyNavigationBar";
import SquareButton from "./Components/SquareButton";

function App() {
  const items = [
    {
      title: "January 2022 - May 2023",
      cardTitle: "Masters of Science",
      cardSubtitle: "University of North Carolina at Charlotte",
      cardDetailedText: "Major: Information Technology",
    },
    {
      title: "September 2019 - December 2021",
      cardTitle: "CADVision Engineers Pvt Ltd",
      cardSubtitle: "Job Role: Software Engineer, Location: Hyderabad,India ",

      cardDetailedText:
        "I Developed smart software products that are of high quality and effectively addressed the business challenges of our customers.Developed beautiful and responsive web interfaces using HTML, CSS, JavaScript, Angular and built reusable components using React js for future use.Worked on developing android applications for a badminton academy using Java, Android studio and Firebase.Designed and developed custom applications for automating the tasks in different CAD Software using C++ and .Net.Gathered and defined customer requirements to develop clear specifications for project plans.Discussed the project progress with customers, collected feedback in different stages of development and directly addressed their concerns.Documented all software development methodologies in technical manuals to be used by developers in future projects.",
    },
    {
      title: "June 2019 - August 2019",
      cardTitle: "Amazon",
      cardSubtitle: "Job Role: Qulaity Specialist, Location: Hyderabad,India ",
      cardDetailedText:
        "I worked on analyzing the basic case level inputs to identify the cause of business-related problems and improve the quality of customer experience.I have collaborated with multiple resources as per need to ensure the efficiency and effectiveness of the program.",
    },
    {
      title: "June 2015 - July 2019",
      cardTitle: "Bachelor of Technology",
      cardSubtitle: "National Institute of Technology, AndhraPradesh, India",
      cardDetailedText: "Major: Mechanical Engineering",
    },
  ];

  return (
    <div className="App font-Poppins">
      <MyNavigationBar></MyNavigationBar>
      <section id="Home" className="md:p-24 w-screen h-screen text-white ">
        <div className="flex flex-row h-full ">
          <div className=" h-full flex flex-col items-start justify-center ml-6 md:basis-1/2 basis-full shrink-0">
            <p className="sm:text-5xl text-3xl mb-5">Hi, I'm</p>
            <p className="sm:text-8xl text-5xl mb-5">Gopi Krishna</p>
            <TypeWriterEffect
              textStyle={{
                color: "#ff004f",
                fontWeight: 500,
                fontSize: "32px",
              }}
              startDelay={200}
              cursorColor="#ff004f"
              text="and I'm a Full Stack Developer"
              typeSpeed={100}
              hideCursorAfterText={true}
            />
            <RoundButton className="mt-2" btnText="Contact Me"></RoundButton>
          </div>
          <div className="md:visible invisible flex  justify-center md:basis-1/2 basis-0">
            <img src={bannerImage} alt="banner"></img>
          </div>
        </div>
      </section>

      <section
        id="About"
        className="md:p-24 flex lg:flex-row w-screen flex-col h-full text-white "
      >
        <div className="flex justify-center items-center xl:items-start basis-1/3 flex-1 rounded-md p-10 xl:p-20 ">
          <img
            src={studentImage}
            className="object-contain bg-pink-400 rounded-lg aspect-square md:aspect-auto"
            alt="profile"
          ></img>
        </div>
        <div className="h-full basis-2/3 p-10 md:p-20">
          <p className="sm:text-5xl text-3xl mb-10">About me</p>
          <p className="mb-5 text-[12px] sm:text-[16px]">
            I'm a Graduate Student at UNC Charlotte, innovative software
            developer offering 2.5 years of expertise in software customization
            and automation. Seasoned professional with background in full
            software development life cycle. Quickly learns and masters new
            technologies while working in both team and self-directed settings.
            I'm a Graduate Student at UNC Charlotte, innovative software
            developer offering 2.5 years of expertise in software customization
            and automation. Seasoned professional with background in full
            software development life cycle. Quickly learns and masters new
            technologies while working in both team and self-directed settings.
          </p>
          <p className=" mb-5  text-[12px] sm:text-[16px]">
            Quickly learns and masters new technologies while working in both
            team and self-directed settings. I'm a Graduate Student at UNC
            Charlotte, innovative software developer offering 2.5 years of
            expertise in software customization and automation. Seasoned
            professional with background in full software development life
            cycle. Quickly learns and masters new technologies while working in
            both team and self-directed settings.
          </p>
          <RoundButton btnText="Download Resume"></RoundButton>
        </div>
      </section>

      <section
        id="Skills"
        className="lg:p-24 py-12 flex flex-col h-full w-screen text-white justify-center "
      >
        <p className="sm:text-5xl text-3xl mb-10 px-10 font-bold">My Skills</p>
        <div class="grid gap-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-5 lg:p-10">
          <SkillCard
            icon={<FaTools className="w-16 h-16"></FaTools>}
            title="Application Development"
            content="During my time at CADVision Engineers Pvt Ltd, I developed smart software
    products that addressed the business challenges of our customers."
            langs="C++, .Net and C#"
            tools="Visual Studio, CAD"
          ></SkillCard>
          <SkillCard
            icon={<MdWeb className="w-16 h-16"></MdWeb>}
            title="Web Development"
            content="I have developed multiple web applications and as part of an academic project i developed a telemedicine webapp"
            langs="HTML, CSS, Javascript"
            tools="VS Code, Git, React, Node JS,Tailwind CSS"
          ></SkillCard>
          <SkillCard
            icon={<ImAndroid className="w-16 h-16"></ImAndroid>}
            title="Mobile App Development"
            content="As part of my masters degree, I enrolled in  the course Mobile App development where i learned how to create mobile applications efficiently."
            langs="Java"
            tools="Android Studio"
          ></SkillCard>
        </div>
      </section>

      <section
        id="Experience"
        className="lg:p-24 py-12 flex flex-col h-full w-screen text-white justify-center z-0"
      >
        <p className="sm:text-5xl text-3xl mb-20 px-10 font-bold text-center">
          Education & Work Experience
        </p>
        <Chrono
          items={items}
          slideShow
          mode="VERTICAL_ALTERNATING"
          cardHeight={100}
          cardWidth={600}
          hideControls={true}
          theme={{
            primary: "white",
            secondary: "black",
            cardBgColor: "#28282b",
            cardForeColor: "#ffffff",
            titleColor: "white",
            titleColorActive: "#ff004f",
          }}
        >
          <div className="chrono-icons">
            <FaUniversity className="bg-black"></FaUniversity>
            <MdWork className=" bg-black  "></MdWork>
            <MdWork className=" bg-black  "></MdWork>
            <FaUniversity className="bg-black"></FaUniversity>
          </div>
        </Chrono>
      </section>

      {/* <section
        id="projects"
        className="lg:p-24 flex flex-col h-screen w-screen text-white justify-center z-0"
      ></section> */}

      <section
        id="Contact"
        className="lg:p-24 py-12 flex flex-col md:flex-row   w-screen text-white"
      >
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
        </div>
        <div className="h-full flex flex-col basis-2/3 items-center md:items-start ">
          <input
            placeholder="Your Name"
            className="w-2/3 p-3 my-5 rounded-lg bg-matt"
          ></input>
          <input
            placeholder="Your Email"
            className="w-2/3 p-3 my-5 rounded-lg bg-matt"
          ></input>
          <textarea
            placeholder="Your Message"
            className="w-2/3 h-48 p-3 my-5 rounded-lg bg-matt focus:border-white"
          ></textarea>
          <SquareButton btnText="Submit" rounded="md"></SquareButton>
        </div>
      </section>
    </div>
  );
}

export default App;
