import { useState } from "react"

const projects = [
    {
    "id": 1,
    "name": "Task_hive",
    "description": "TaskHive – A smart task management platform with collaboration, tracking, and automation features for increased productivity. 🚀✅.",
    "tools": ["MongoDB", "Express", "React", "Node.js", ],
    "github": "https://github.com/Garvit-Trivedi/TaskHive"
  },
  {
    "id": 2,
    "name": "expense-tracker",
    "description": "Expense Tracker – A simple app to track expenses, manage budgets, and analyze spending. 💰📊",
    "tools": [ "React", ],
    "github": "https://github.com/Garvit-Trivedi/dashborad",
    "deployed": "https://dashboard-garvit.netlify.app/",
  },
  {
    "id": 3,
    "name": "tab-manager-extension",
    "description": "Tab Manager Extension – Organize, group, and manage browser tabs efficiently. 🚀📑",
    "tools": ["HTML", "CSS"],
    "github": "https://github.com/Garvit-Trivedi/tab-manager-extension"
  },
  {
    "id": 4,
    "name": "YouTube Clone",
    "description": "A simplified YouTube clone that fetches videos using an API and displays them with a modern React UI.",
    "tools": ["React", "API"],
    "github": "https://github.com/Garvit-Trivedi/youtube-clone-react",
    "deployed": "https://youtube-frontend-ch16.onrender.com",
  },
  {
    "id": 5,
    "name": "spotify-react",
    "description": "A front-end clone of PodBean, a podcast hosting platform, developed using HTML and CSS.",
    "tools": ["React", ],
    "github": "Spotify React – A React-based Spotify clone for music streaming. 🎵🚀",
    "deployed": "https://spontaneous-dolphin-d0dcb9.netlify.app/",
  },
  {
    "id": 6,
    "name": "IdeaForge-website",
    "description": "IdeaForge Website – Showcase innovations, products, and company insights. 🚀💡",
    "tools": ["HTML", "CSS"],
    "github": "https://github.com/Garvit-Trivedi/IdeaForge-website",
    "deployed": "https://starlit-tiramisu-9c9a78.netlify.app/",
  },
  {
    "id": 7,
    "name": "Fashion-websites ",
    "description": "Fashion Website – Explore trends, shop styles, and stay stylish! 👗✨",
    "tools": ["HTML", "CSS"],
    "github": "https://github.com/Garvit-Trivedi/Fashion-websites",
    "deployed": "https://adorable-longma-9f4ec9.netlify.app/",
  },
  {
    "id": 8,
    "name": "simple clone projects ",
    "description": "Simple Clone Projects – Basic replicas of popular apps for learning and practice. 🚀💻",
    "tools": ["HTML", "CSS"],
    "github": "https://github.com/Garvit-Trivedi/clone-projects"
  },
  {
    "id": 9,
    "name": "practice projects ",
    "description": "Simple  Projects – Basics  for learning and practice. 🚀💻",
    "tools": ["HTML", "CSS","react"],
    "github": "https://github.com/Garvit-Trivedi/projects"
  },
  {
    "id": 10,
    "name": "API ",
    "description": "using the API to fetch data ",
    "tools": ["HTML", "CSS","react"],
    "github": "https://github.com/Garvit-Trivedi/API"
  }
]

const figmaProjects = [
  {
    id: 1,
    name: " AI tools",
    technologies: ["Figma", "Simple UI"],
   
    figmaLink: "https://www.figma.com/design/8zqyeZdfFhgcqgEz7HpKef/Untitled?node-id=0-1&t=DoTyWOJwnCNKJY2p-1",
  },
  {
    id: 2,
    name: " real state dashboard",
    technologies: ["Figma", " Simple UI", "Prototyping"],
  
    figmaLink:
      "https://www.figma.com/design/my3qmaqWd0sNeQRa4s5Zdz/Untitled?node-id=0-1&t=Y6xfSx1cVIx8Ltz2-1",
  },
  {
    id: 3,
    name: " codinggita ",
    technologies: ["Figma", "Prototyping"],
  
    figmaLink:
      "https://www.figma.com/design/su9XjcTZ1NOE0wagXaBQ3Y/Untitled?node-id=0-1&t=vZWLyzipZrCqOLN4-1",
  },
  {
    id: 4,
    name: " instagram ",
    technologies: ["Figma", "Prototyping"],
   
    figmaLink:
      "https://www.figma.com/proto/9tFxecNpUhwc9yXIunCS2P/something-like-cloning?node-id=43-87&t=uwCXGdlQ3AxLspQy-1",
  },
  {
    id: 5,
    name: " one page  uniqe design template",
    technologies: ["Figma"],
    
    figmaLink:
      "https://www.figma.com/design/O0jcEe4ngsIBq7cSOnpePt/Untitled?node-id=0-1&t=5bjwJBhqu9cHS11L-1",
  },
]

const placeholderImage = "https://via.placeholder.com/300x200?text=No+Image+Available"

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)
  const [activeTab, setActiveTab] = useState("development")

  const openModal = (project) => {
    setSelectedProject(project)
  }

  const closeModal = () => {
    setSelectedProject(null)
  }

  return (
    <div className="bg-black text-white py-20" id="project">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
        <h2 className="text-5xl font-bold text-center mb-10 text-gray-100">My Projects</h2>

        {/* Dropdown for Selecting Development or Figma Projects */}
        <div className="flex justify-center mb-8">
          <select
            className="px-4 py-2 bg-gray-900 border border-gray-700 text-white rounded-lg"
            onChange={(e) => setActiveTab(e.target.value)}
            value={activeTab}
          >
            <option value="development">Development Projects</option>
            <option value="figma">Figma Designs</option>
          </select>
        </div>

        {activeTab === "development" && (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 p-4">
    {projects.map((project) => (
      <div
        key={project.id}
        className="relative group bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-800 transform transition-all duration-500 hover:scale-105 cursor-pointer overflow-hidden min-h-[300px] sm:min-h-[350px] flex flex-col justify-center items-center"
      >
        {/* Project Name */}
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-100 mb-3 text-center transition-all duration-300 group-hover:opacity-50">
          {project.name}
        </h3>

        <p className="text-gray-400 text-base sm:text-lg text-center transition-all duration-300 group-hover:opacity-50">
          Hover to see details
        </p>

        {/* Hidden Details with Smooth Slide-in Animation */}
        <div className="absolute inset-0 bg-black bg-opacity-95 px-8 py-10 flex flex-col justify-center items-center text-center rounded-2xl opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transform translate-y-10 transition-all duration-500 ease-in-out min-h-[350px] sm:min-h-[400px]">
          <p className="text-gray-300 mb-4 text-lg leading-relaxed">
            {project.description}
          </p>
          <p className="text-gray-400 text-sm mb-5">Tools: {project.tools.join(", ")}</p>
          
          <a
            href={project.github}
            className="px-6 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold rounded-full shadow-md hover:scale-110 transition-transform duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>

          {/* Conditionally render Live Demo button */}
          {project.deployed && (
            <a
              href={project.deployed}
              className="mt-3 px-4 py-2 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-full shadow-md transition-transform transform hover:scale-105 text-center"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    ))}
  </div>
)}



        {/* Render Figma Projects */}
        {activeTab === "figma" && (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
    {figmaProjects.map((project) => (
      <div
        key={project.id}
        className="bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-800 hover:shadow-2xl transform transition-all duration-500 hover:scale-105 cursor-pointer"
        onClick={() => openModal(project)}
      >
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-100 mb-2 text-center">
          {project.name}
        </h3>
        <p className="text-gray-400 text-base sm:text-lg text-center">
          Click to view details
        </p>

        <div className="mt-4 sm:mt-6 flex justify-center">
          <a
            href={project.figmaLink}
            className="px-6 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold rounded-full shadow-md hover:scale-110 transition-transform duration-300"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            View Figma
          </a>
        </div>
      </div>
    ))}
  </div>
)}

      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
          <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 bg-opacity-90 backdrop-blur-lg border border-gray-700 text-white p-4 sm:p-6 md:p-8 rounded-2xl w-11/12 max-w-md shadow-2xl transform transition-all duration-300 scale-100">
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-300 hover:text-red-500 transition duration-300 text-2xl"
            >
              &times;
            </button>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center text-blue-400">
              {selectedProject.name}
            </h2>

            {/* Technologies or technologies */}
            {selectedProject.technologies ? (
              <>
                <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-300 text-center">Technologies Used:</p>
                <ul className="mt-4 space-y-3">
                  {selectedProject.technologies.map((tech, index) => (
                    <li
                      key={index}
                      className="bg-gray-700 px-3 py-1 sm:px-4 sm:py-2 rounded-lg text-center text-sm sm:text-base text-gray-100 shadow-md transition-transform transform hover:scale-105"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <p className="mt-4 text-lg text-center text-gray-300">Designed in Figma</p>
            )}

            <button
              onClick={closeModal}
              className="mt-5 px-4 py-2 bg-red-400 text-white font-bold rounded-lg shadow-lg w-full hover:bg-red-800 transition-all"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Projects