import Lanyard from "./assets/components/Lanyard.jsx";
import {
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import TypingEffect from "./assets/components/Split-text.jsx";
import Pattern from "./assets/components/Square.jsx";
import profile from "./assets/Img/profile.jpg";
import TiltedCard from "./assets/components/Tilted-Card.jsx";
import TechStack from "./assets/components/TechStack.jsx";
import ProjectList from "./assets/components/Project-list.jsx";
import ContactForm from "./assets/components/ContactForm.jsx";
import DownloadCVButton from "./assets/components/DownloadCV-Button.jsx";
import { motion } from "framer-motion";

function App() {
  return (
    <div className="flex flex-col min-w-full min-h-screen overflow-x-hidden">
      {/* Landing page section */}
      <section id="home" className="flex w-full min-h-screen ">
        <motion.div
          className="w-full lg:w-3/5 bg-[#242124] text-white relative pl-5 lg:px-20 py-35 lg:py-12 flex flex-col lg:justify-center rounded-r-3xl"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <div
            className="absolute inset-0"
            style={{
              maskImage:
                "linear-gradient(to top right, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 80%)",
              WebkitMaskImage:
                "linear-gradient(to top right, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 80%)",
              opacity: "0.2",
            }}
          >
            <Pattern />
          </div>

          {/* Small Lanyard (Only on Small Screens) */}
          <span className=" lg:hidden absolute top-20  left-0 pl-32  pt-24   right-0 w-full z-30 h-12 sm:w-16 sm:h-16 ">
            <Lanyard
              position={[0, 0, 10]}
              fov={45}
              scale={2}
              groupPosition={0}
              lineWidth={0.5}
              ropeJoint={0.2}
            />
          </span>

          <div className="relative z-40 lg:z-10 max-w-3xl lg:text-left">
            <div className="lg:space-y-4">
              <h1 className="text-2xl lg:text-4xl font-bold leading-tight lg:mt-0  ">
                Hey there! I'm
                <span className="block my-1 lg:my-0 text-3xl lg:text-5xl text-cyan-400 animate-glow drop-shadow-[0_0_15px_rgba(34,211,238,0.7)]">
                  JustindotDev
                </span>
              </h1>
              <h2 className="text-2xl lg:text-4xl font-bold flex  items-center gap-x-2 ">
                And I'm a<TypingEffect />
              </h2>
            </div>

            <div className=" mt-7 space-y-8">
              <div className="hidden lg:flex gap-6">
                <a
                  href="https://www.instagram.com/_justiiiinn?igsh=MW5xbW9jM2ZuYjZ5Ng=="
                  target="_blank"
                  className="w-11 h-11 rounded-full bg-gradient-to-br from-gray-600 to-gray-800 hover:from-cyan-500 hover:to-cyan-700 flex items-center justify-center transition-all duration-300 group"
                >
                  <FaInstagram className="text-xl group-hover:scale-111 transition-transform" />
                </a>
                <a
                  href="https://www.linkedin.com/in/justin-acebedo-820815320/"
                  target="_blank"
                  className="w-11 h-11 rounded-full bg-gradient-to-br from-gray-600 to-gray-800 hover:from-cyan-500 hover:to-cyan-700 flex items-center justify-center transition-all duration-300 group"
                >
                  <FaLinkedin className="text-xl group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="https://www.upwork.com/freelancers/~014732ff5f31158432"
                  target="_blank"
                  className="w-11 h-11 rounded-full bg-gradient-to-br from-gray-600 to-gray-800 hover:from-cyan-500 hover:to-cyan-700 flex items-center justify-center transition-all duration-300 group"
                >
                  <SiUpwork className="text-xl group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="https://github.com/justindotdev"
                  target="_blank"
                  className="w-11 h-11 rounded-full bg-gradient-to-br from-gray-600 to-gray-800 hover:from-cyan-500 hover:to-cyan-700 flex items-center justify-center transition-all duration-300 group"
                >
                  <FaGithub className="text-xl group-hover:scale-110 transition-transform" />
                </a>
              </div>

              <DownloadCVButton />
            </div>
          </div>
        </motion.div>

        <div className="hidden w-2/5 bg-[#f4f4f2] lg:flex justify-center items-center p-8">
          <div className="w-full max-w-md">
            <Lanyard />
          </div>
        </div>
      </section>

      {/* About me section */}
      <section
        id="about"
        className="w-full h-screen flex flex-col pt-5 scroll-mt-24"
      >
        <div className="flex spt-10 h-full">
          <motion.div
            className="w-2/5 bg-[#f4f4f2] flex flex-col"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }} // Triggers animation when 30% is visible
          >
            <h1 className="text-cyan-900 text-3xl font-bold ml-22 mt-10">
              About me
            </h1>
            <div className="  flex justify-center items-center mx-22 mt-10">
              <TiltedCard
                imageSrc={profile}
                altText="Cover picture"
                containerHeight="300px"
                containerWidth="300px"
                imageHeight="300px"
                imageWidth="300px"
                rotateAmplitude={5}
                scaleOnHover={1}
                showMobileWarning={false}
                showTooltip={true}
                captionText="That's me! 👋"
                displayOverlayContent={true}
                overlayContent={
                  <div className="w-50 h-8 flex items-center justify-center bg-cyan-900 rounded-lg">
                    <span className="text-white text-lg font-medium">
                      Full Stack Developer
                    </span>
                  </div>
                }
              />
            </div>
            <div className="flex gap-4 justify-center mt-2">
              <div className="text-center">
                <span className="text-2xl font-bold text-cyan-900 ">3+</span>
                <p className="text-xs text-gray-600">Months Experience</p>
              </div>
              <div className="text-center">
                <span className="text-2xl font-bold text-cyan-900 ">1+</span>
                <p className="text-xs text-gray-600">Projects Completed</p>
              </div>
              <div className="text-center">
                <span className="text-2xl font-bold text-cyan-900 ">100%</span>
                <p className="text-xs text-gray-600">Client Satisfaction</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="w-3/5 bg-[#242124] flex flex-col text-white justify-center pl-20 rounded-l-3xl pt-10"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }} // Triggers animation when 30% is visible
          >
            <h1 className="text-3xl font-bold">Hey, I'm Justin Acebedo</h1>
            <p className="text-lg pt-5 w-130">
              I build modern, secure, and user-friendly web applications that
              enhance digital experiences. With a passion for clean code and
              innovative solutions, I specialize in creating responsive and
              performant applications using modern technologies.
            </p>
            <div className="flex gap-4 mt-4">
              <a
                href="https://www.facebook.com/justin.acebedo.96"
                target="_blank"
                className="group inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
              >
                <span className="text-md font-medium">Learn more about me</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300"
                  viewBox="0 -1 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
            <div className="mt-5">
              <h1 className="text-3xl font-bold flex items-center gap-3">
                Tech Stack
                <span className="text-cyan-400 text-xl">{"</>"}</span>
              </h1>
              <p className="text-gray-400 text-md">Technologies I work with</p>
              <TechStack autoplay={true} pauseOnHover={true} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* My Works section */}
      <section
        id="works"
        className="w-full max-h-[1200px] flex flex-col mt-10 item-center scroll-mt-24"
      >
        <motion.div
          className="flex justify-center items-center pt-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }} // Triggers animation when 30% is visible
        >
          <h1 className="text-3xl font-bold text-cyan-900 border-b-5 border-cyan-900 w-5xl text-center pb-5">
            My Works
          </h1>
        </motion.div>
        <ProjectList />
      </section>

      {/* Contact me section */}
      <section
        id="contact"
        className="w-full h-screen flex flex-col mt-20 scroll-mt-24"
      >
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }} // Triggers animation when 30% is visible
        >
          <h1 className="text-3xl font-bold text-cyan-900 ">Contact me</h1>
        </motion.div>

        <div className=" flex justify-center items-center mt-5">
          {/* Contacts */}
          <motion.div
            className="w-2/5 max-h-full flex flex-col justify-center items-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }} // Triggers animation when 30% is visible
          >
            <h1 className="text-cyan-900 text-md font-semibold mr-40">
              GET IN TOUCH
            </h1>
            <div className="flex flex-col justify-center items-center  bg-[#242124] w-70 h-30 rounded-b-3xl rounded-tr-3xl  mt-2 shadow-lg shadow-gray-900/30 ">
              <FaPhone className="text-cyan-400 text-4xl rounded-full mb-1" />
              <p className="text-[#f4f4f2] text-lg font-semibold mb-2">
                Call me
              </p>
              <p className="text-gray-400 text-sm">09651744527</p>
            </div>
            <div className="flex flex-col justify-center items-center  bg-[#242124] w-70 h-30 rounded-b-3xl rounded-tr-3xl  mt-5 shadow-lg shadow-gray-900/30 ">
              <FaEnvelope className="text-cyan-400 text-4xl rounded-full mb-1" />
              <p className="text-[#f4f4f2] text-lg font-semibold mb-2">
                E-mail
              </p>
              <p className="text-gray-400 text-sm">
                acebedojustin.ranagan@gmail.com
              </p>
            </div>
            <div className="flex flex-col justify-center items-center  bg-[#242124] w-70 h-30 rounded-b-3xl rounded-tr-3xl  mt-5 shadow-lg shadow-gray-900/30 ">
              <FaMapMarkerAlt className="text-cyan-400 text-4xl rounded-full mb-1" />
              <p className="text-[#f4f4f2] text-lg font-semibold mb-2">
                Address
              </p>
              <p className="text-gray-400 text-sm">
                Mercedes, Eastern Samar, Philippines
              </p>
            </div>
          </motion.div>

          {/* Message Section */}
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
export default App;
