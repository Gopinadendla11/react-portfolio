import "./App.css";
import NavigationBar from "./Components/NavigationBar";
import bannerImage from "./assets/images/Home_Banner.png";
import TypeWriterEffect from "react-typewriter-effect";
import studentImage from "./assets/images/man-posing.png";
import MyButton from "./Components/MyButton";
import { FaTools } from "react-icons/fa";
import { MdWeb } from "react-icons/md";
import { ImAndroid } from "react-icons/im";
import SkillCard from "./Components/SkillCard";

function App() {
  return (
    <div className="App font-Poppins">
      <NavigationBar></NavigationBar>
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
            <MyButton className="mt-2" btnText="Contact Me"></MyButton>
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
          <MyButton btnText="Download Resume"></MyButton>
        </div>
      </section>

      <section
        id="Skills"
        className="lg:p-24 flex flex-col h-full w-screen text-white justify-center "
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
    </div>
  );
}

export default App;
