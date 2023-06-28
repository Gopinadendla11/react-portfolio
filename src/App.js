import "./App.css";
import bannerImage from "./assets/images/Home_Banner.png";
import TypeWriterEffect from "react-typewriter-effect";
import studentImage from "./assets/images/DP.jpg";
import PwdManagerAppImg from "./assets/images/PasswordManager.jpg";
import VisualAnalyticsImg from "./assets/images/VisualAnalytics.jpg";
import TrackMyJobImg from "./assets/images/TMJProject.png";
import RoundButton from "./Components/RoundButton";
import { FaTools } from "react-icons/fa";
import { MdWeb, MdWork } from "react-icons/md";
import { ImAndroid } from "react-icons/im";
import SkillCard from "./Components/SkillCard";
import { Chrono } from "react-chrono";
import { FaUniversity } from "react-icons/fa";
import MyNavigationBar from "./Components/MyNavigationBar";
import SquareButton from "./Components/SquareButton";
import ProjectCard from "./Components/ProjectCard";
import ContactMe from "./Pages/ContactMe";

function App() {
  const items = [
    {
      title: "January 2022 - May 2023",
      cardTitle: "Masters of Science",
      cardSubtitle: "University of North Carolina at Charlotte",
      cardDetailedText:
        "Developed a full stack web application using React for the front end and Java Spring Boot for the back end. The application utilized MongoDB as the database for data storage and retrieval, and incorporated user interface design with React components and server-side logic with Java Spring Boot.Deployed the application on an AWS EC2 instance, leveraging the scalability and reliability of the AWS infrastructure. The deployment involved setting up the EC2 instance, configuring security groups, installing Node.js and MongoDB, and ensuring the smooth operation of the full stack application within the AWS EC2 environment. Developed projects involving data visualization of Zillow Housing data trends in housing prices using Altair charts and deployed them in interactive web applications using Streamlit.Developed responsive user interfaces using React and Angular, two popular JavaScript frameworks, to ensure optimal user experience across various devices and screen sizes.",
    },
    {
      title: "March 2018 - December 2021",
      cardTitle: "CADVision Engineers Pvt Ltd",
      cardSubtitle: "Job Role: Software Engineer, Location: Hyderabad,India ",

      cardDetailedText:
        "Involved in the development of Microservices using spring boot framework and modules such as Spring Cloud.Developed backend REST APIs using Spring MVC, Spring Boot and Spring Data JPA frameworks.Involved in writing Test Suites and Test Cases for unit testing and implemented unit testing using JUnit.Extensively used Git for version controlling and regularly pushed code to GitHub.Involved in multiple stages of Software development life cycle like Application Design, Development and Testing.Worked on developing android applications for a badminton academy using Java, Android studio and Firebase.Designed and developed custom applications for automating the tasks in different CAD Software using C++ and .Net.Created technical documentation by documenting all software development methodologies in technical manuals to be used by developers in future projects.",
    },
    // {
    //   title: "June 2019 - August 2019",
    //   cardTitle: "Amazon",
    //   cardSubtitle: "Job Role: Qulaity Specialist, Location: Hyderabad,India ",
    //   cardDetailedText:
    //     "I worked on analyzing the basic case level inputs to identify the cause of business-related problems and improve the quality of customer experience.I have collaborated with multiple resources as per need to ensure the efficiency and effectiveness of the program.",
    // },
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
              text="and I'm a Full Stack Developer."
              typeSpeed={100}
              hideCursorAfterText={true}
            />
            <a href="/#Contact">
              <RoundButton className="mt-2" btnText="Contact Me"></RoundButton>
            </a>
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
            className="object-contain bg-gradient-to-t from-sky-100 to-sky-300 rounded-lg aspect-square md:aspect-auto"
            alt="profile"
          ></img>
        </div>
        <div className="h-full basis-2/3 p-10 md:p-20">
          <p className="sm:text-5xl text-3xl mb-10">About me</p>
          <p className="mb-5 text-[12px] sm:text-[16px]">
            I'm a Graduate Student at UNC Charlotte, innovative software
            developer offering 5 years of expertise in software development.
            Seasoned professional with background in full software development
            life cycle. Quickly learns and masters new technologies while
            working in both team and self-directed settings.
          </p>
          <p className=" mb-5  text-[12px] sm:text-[16px]">
            I have experience as a software developer with nearly 5 years of
            professional exposure in various technologies such as Java, Python,
            .NET, and JavaScript. I am proficient in core concepts like
            object-oriented programming, exception handling, multi-threading,
            and collections. Additionally, I have worked extensively with
            frameworks like Spring, Spring Boot, Spring Security, Spring Cloud,
            and have hands-on experience in developing microservices using these
            technologies. I have also worked on building web applications using
            MERN and MEAN stack JavaScript frameworks and have expertise in
            HTML5, CSS3, Bootstrap, React, Angular, and Tailwind CSS for
            frontend development. I have designed and implemented RESTful APIs
            and have experience with relational databases like MySQL and
            PostgreSQL, as well as NoSQL databases like MongoDB. I am
            well-versed in using version control systems like Git and have
            experience working with cloud platforms such as AWS. I have also
            worked with messaging systems like Kafka, JMS, and RabbitMQ. I have
            created Docker containers for managing application deployment and
            have experience with CI/CD pipelines using Jenkins and deployment on
            OpenShift platforms. Throughout my experience, I have worked with
            various IDEs such as VS code, IntelliJ, Visual Studio, and have
            strong problem-solving and analytical skills. I hold a Master of
            Science degree in Information Technology from the University of
            North Carolina at Charlotte and a Bachelor of Engineering degree in
            Mechanical Engineering from the National Institute of
            Technology–Andhra Pradesh, India.
          </p>
          <a href="./Gopi Nadendla Resume.pdf" target="_blank">
            <RoundButton btnText="Download Resume"></RoundButton>
          </a>
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
            langs="Java, C++, .Net and C#"
            tools="IntelliJ,Visual Studio"
          ></SkillCard>
          <SkillCard
            icon={<MdWeb className="w-16 h-16"></MdWeb>}
            title="Web Development"
            content="I have developed multiple web applications and as part of an academic project i developed a web application named TrackMyJob"
            langs="HTML, CSS, Javascript"
            tools="VS Code, Git, React, Node JS,Tailwind CSS,SpringBoot, Spring MVC"
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

      <section
        id="Projects"
        className="lg:p-24 flex flex-col h-auto w-screen text-white justify-center items-center"
      >
        <p className="sm:text-5xl text-3xl my-5 font-bold">My Projects</p>
        <div class="grid gap-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-5 my-10">
          <ProjectCard
            image={TrackMyJobImg}
            title="TrackMyJob Web App"
            content="This is a web application in which the user can store the job applications that he has applied for and Keep track of the status of the job applications."
            projectLink="https://github.com/Gopinadendla11/trackmyjob_api.git"
          ></ProjectCard>
          <ProjectCard
            image={PwdManagerAppImg}
            title="Password Manager App"
            content="This is an Android app for password management where users can
                store and manage their login credentials."
            projectLink="https://github.com/Gopinadendla11/password_manager.git"
          ></ProjectCard>

          {/* <ProjectCard
            image={TeleMedicineImg}
            title="TeleMedicine Web App"
            content="This is a web application for online appointment scheduling management and virtual consultation with doctors through video call."
            projectLink="https://github.com/Gopinadendla11/vitals7_app.git"
          ></ProjectCard> */}

          <ProjectCard
            image={VisualAnalyticsImg}
            title="Visual Analysis of Zillow Housing Data"
            content="This is a Streamlit web app which displays the analysis of the Housing sales prices based on the dataset from Zillow in the past 10 years."
            projectLink="https://github.com/Gopinadendla11/va-project-group7.git"
          ></ProjectCard>
        </div>
        <SquareButton className="w-10" btnText="See More"></SquareButton>
      </section>

      <section id="Contact" className="lg:p-24 ">
        <ContactMe></ContactMe>
      </section>
    </div>
  );
}

export default App;
