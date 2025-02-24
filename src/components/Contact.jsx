import { FaGithub, FaLinkedin, FaTwitter, FaPhone, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
<div className="w-full p-6 bg-black text-white text-center rounded-lg shadow-lg">

      <h1 className="text-4xl font-bold mb-6">Connect with Me</h1>
      
      <div className="flex justify-center gap-6 mb-6">
        <a
          target="_blank"
          href="https://x.com/Garvit_cg26"
          className="text-gray-400 hover:text-blue-400 transition-transform transform hover:scale-110"
        >
          <FaTwitter className="text-3xl w-10 h-10" />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/garvit-trivedi/"
          className="text-gray-400 hover:text-blue-600 transition-transform transform hover:scale-110"
        >
          <FaLinkedin className="text-3xl w-10 h-10" />
        </a>
        <a
          target="_blank"
          href="https://github.com/Garvit-Trivedi"
          className="text-gray-400 hover:text-white transition-transform transform hover:scale-110"
        >
          <FaGithub className="text-3xl w-10 h-10" />
        </a>
      </div>
      
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center gap-3 text-gray-400">
          <FaPhone className="text-2xl" />
          <span className="text-lg">+91 98765 43210</span>
        </div>
        <div className="flex items-center gap-3 text-gray-400">
          <FaEnvelope className="text-2xl" />
          <span className="text-lg">garvittrivedi26@gmail.com</span>
        </div>
      </div>
    </div>
  );
}
