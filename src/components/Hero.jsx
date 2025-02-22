import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  const navigate = useNavigate();

  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-12 pt-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Profile Image with Glow Effect */}
      <motion.img
        src="https://media-hosting.imagekit.io//3892fe25835f4242/IMG_20240125_175740.jpg?Expires=1834666774&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Obipoi~nI~0TPyxDePb133lj1N2fwaPLH9wT3LApk31vCHHbGV0pDPdmYdgMV7k3UlQQxR80GKxhQRXW183oObb72Ue6P6n932reHn2BGmf~hnLvIiG0hwSrnpZS5ZgGTyBWKCLA2-DcgKCcBERRpH6K5xWDECFucTsALorbjhukSHLeRAsUSi9ZJ4Ks89eoXOV35bzefZ0PXuKPzuR1-ztSj3G3jCG6ZZw1qQxhCl6imDBKxeAMNuZgDEdeYNkb2S4CiqhZ-b4uNQwi3SmPhqp688vkxTgiPNTqqSEAJXhV051RE4Co4Lp09zxSr9Wy~VQUA3TBQ31OBqoyiwFpeg__"
        alt="Profile"
        className="w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 object-cover rounded-2xl shadow-lg border-4 border-gray-700 transition-all duration-300 hover:scale-105"
        whileHover={{ scale: 1.1 }}
      />

      {/* Hero Content */}
      <div className="text-center md:text-left max-w-lg lg:max-w-2xl mt-8 md:mt-0 md:ml-12">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white">
          I'm{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
            Garvit Trivedi
          </span>
        </h1>

        <p className="mt-4 text-lg text-gray-300 leading-relaxed">
          I am a first-year B.Tech (CSE) student at Rai University, specializing
          in Full Stack Development. Passionate about coding, I focus on
          building modern, responsive, and user-friendly web applications.
        </p>

        <p className="mt-2 text-gray-400">
          Experienced in **MERN stack**, I have built replicas of platforms
          like **Spotify, Amazon, Netflix, YouTube, and Google**. Eager to
          **learn, innovate, and solve real-world problems** through technology.
        </p>

        {/* Buttons with Neon Effect */}
        <div className="mt-8 flex flex-col sm:flex-row items-center sm:space-x-6 space-y-4 sm:space-y-0">
          {/* Contact Me Button */}
          <motion.button
            onClick={handleScrollToContact}
            className="relative px-6 py-3 w-full sm:w-auto rounded-lg bg-gray-800 text-white text-lg font-semibold tracking-wide shadow-lg transition duration-300 hover:bg-gray-700 hover:shadow-xl"
            whileHover={{ scale: 1.1 }}
          >
            Contact Me
          </motion.button>

          {/* Resume Button */}
          <motion.button
            onClick={() => navigate("/resume")}
            className="relative px-6 py-3 w-full sm:w-auto rounded-lg bg-gradient-to-r from-green-500 to-blue-500 text-white text-lg font-semibold tracking-wide shadow-lg transition duration-300 hover:shadow-xl hover:brightness-110"
            whileHover={{ scale: 1.1 }}
          >
            View Resume
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
