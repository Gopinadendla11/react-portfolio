import "./App.css";
import NavigationBar from "./Components/NavigationBar";
import bannerImage from "./assets/images/Home_Banner.png";
import TypeWriterEffect from "react-typewriter-effect";
import studentImage from "./assets/images/man-posing.png";
import MyButton from "./Components/MyButton";

function App() {
  return (
    <div className="App font-Poppins ">
      <NavigationBar></NavigationBar>
      <section
        id="Home"
        className="md:p-24  h-screen text-white overflow-hidden"
      >
        <div className="flex flex-row h-full ">
          <div className=" h-full flex flex-col items-start justify-center ml-6 md:basis-1/2 basis-full shrink-0">
            <p className="sm:text-5xl text-3xl mb-5">Hi, I'm</p>
            <p className="sm:text-8xl text-5xl mb-5">Gopi Krishna</p>
            <TypeWriterEffect
              textStyle={{
                color: "#ff004f",
                fontWeight: 500,
                fontSize: "2.5em",
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
        className="md:p-24 flex lg:flex-row flex-col h-screen text-white overflow-hidden"
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
    </div>
  );
}

export default App;
