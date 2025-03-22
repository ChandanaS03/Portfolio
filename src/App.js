import { motion } from "framer-motion";
import "./App.css"; 


const technologies = [
  {
    category: "Backend",
    items: [
      { label: "Python", icon: "https://cdn.simpleicons.org/python" },
      //{ label: "Django", icon: "https://cdn.simpleicons.org/django" },
      { label: "Flask", icon: "https://cdn.simpleicons.org/flask" },
      { label: "Tensorflow", icon: "https://camo.githubusercontent.com/ab7cc86b1732285ea35c5b555b5f958f063d9215f5ce0afc85743c646bb716e6/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f54656e736f72466c6f772d2532334646364630302e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d54656e736f72466c6f77266c6f676f436f6c6f723d7768697465" },
      { label: "Sci-kit learn", icon: "https://camo.githubusercontent.com/0ad18fa0ec11eec42003562b40a61f4d8643454535b4f3b167bdde4a308b8491/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f7363696b69742d2d6c6561726e2d2532334637393331452e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d7363696b69742d6c6561726e266c6f676f436f6c6f723d7768697465" },
      
      { label: "MySQL", icon: "https://cdn.simpleicons.org/mysql" },
      { label: "PHP", icon: "https://cdn.simpleicons.org/php" },
      { label: "R", icon: "https://cdn.simpleicons.org/r" },
      
    ],
  },
  {
    category: "Frontend",
    items: [
      { label: "React", icon: "https://cdn.simpleicons.org/react" },
      { label: "JavaScript", icon: "https://cdn.simpleicons.org/javascript" },
      { label: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss" },
      { label: "HTML", icon: "https://cdn.simpleicons.org/html5" },
      { label: "CSS", icon: "https://cdn.simpleicons.org/css3" },
    ],
  },
  {
    category: "Tools",
items: [
  { label: "VS Code", icon: "https://cdn.simpleicons.org/visualstudiocode" },
  { label: "GitHub", icon: "https://cdn.simpleicons.org/github" },
  { label: "NPM", icon: "https://cdn.simpleicons.org/npm" },
  { label: "Figma", icon: "https://cdn.simpleicons.org/figma" },
  { label: "Firebase", icon: "https://cdn.simpleicons.org/firebase" },
  { label: "AWS", icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/amazonaws.svg" },
  { label: "Docker", icon: "https://cdn.simpleicons.org/docker" },
  { label: "Jupyter", icon: "https://cdn.simpleicons.org/jupyter" },
  { label: "Git", icon: "https://cdn.simpleicons.org/git" },
  { label: "Postman", icon: "https://cdn.simpleicons.org/postman" },
  { label: "Google App Script", icon: "https://upload.wikimedia.org/wikipedia/commons/2/20/Google_Apps_Script.svg" }, 
  { label: "Google Cloud", icon: "https://cdn.simpleicons.org/googlecloud" },
  { label: "Netlify", icon: "https://cdn.simpleicons.org/netlify" },
  { label: "Replit", icon: "https://cdn.simpleicons.org/replit" },
  { label: "Colab", icon: "https://cdn.simpleicons.org/googlecolab" },
  { label: "Hugging Face", icon: "https://cdn.simpleicons.org/huggingface" },
  { label: "Kaggle", icon: "https://cdn.simpleicons.org/kaggle" },
  { label: "Adobe Lightroom", icon: "https://cdn.simpleicons.org/adobelightroom" },
  { label: "Power BI", icon: "https://cdn.simpleicons.org/powerbi" },
  { label: "Linux", icon: "https://cdn.simpleicons.org/linux" },
],

  },
];





export default function App() {
  return (
    <div className="dark">
    <div className="bg-gradient-to-br from-pink-50 via-blue-50 to-purple-100 text-gray-900 min-h-screen flex flex-col items-center px-6 py-12">
{/* 
    <motion.div
  initial={{ opacity: 0, y: -30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  className="w-full mb-12"
>
  <img
    src="/Chandana Shastri.png"  // or wherever your image is placed
    alt="Banner"
    className="w-full h-auto object-cover rounded-lg shadow-xl"
  />
</motion.div> */}

      <motion.h1
        className="text-5xl font-extrabold mb-4 text-center leading-tight"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Chandana Shastri
      </motion.h1>

      <motion.p
        className="text-xl text-gray-600 mb-12 text-center max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Blending AI, mindfulness, and creativity into impactful solutions.
      </motion.p>

      <section className="w-full max-w-3xl space-y-16">
        {/* About Me Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="bg-white shadow-xl rounded-lg p-8"
        >
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            I am passionate about AI/ML, tech, yoga, and music. I enjoy building
            intelligent solutions that merge creativity with innovation. An AI
            enthusiast and engineering student, I love exploring the frontiers
            of technology. With a keen interest in Machine Learning, Generative
            AI, Python, web development, and problem-solving, I'm building a
            robust skill set. Beyond coding, you'll find me expressing myself
            through music as a vocalist and practicing yoga for mindfulness.
          </p>
        </motion.div>

        {/* Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "AutoVision",
                desc: "AI-powered system that can detect car damage and estimate repair costs.",
                link: "https://huggingface.co/spaces/ChandanaShastri/AutoVision",
              },
              {
                title: "Gizzz101",
                desc: "An AI Summarizer built on Replit.",
                link: "https://replit.com/@ChandanaS03/Gizzz101",
              },
              {
                title: "AWS Cloud Webapp",
                desc: "A mini cloud project deployed on AWS S3.",
                link: "https://ccldemo.s3.eu-north-1.amazonaws.com/mini+project/index.html",
              },
              {
                title: "DeepFake Text Detection",
                desc: "Detects Fake News using DL",
                link: "https://github.com/ChandanaS03/ML-e2e",
              },
            ].map((project, idx) => (
              <a
                key={idx}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition transform hover:-translate-y-1"
              >
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm">{project.desc}</p>
              </a>
            ))}
          </div>
        </motion.div>

        {/* Tech Stack Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <h2 className="text-3xl font-bold mb-6 text-center">Tech Stack</h2>
          <div className="space-y-8">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-4">{tech.category}</h3>
                <div className="flex flex-wrap gap-4">
                  {tech.items.map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <img src={item.icon} alt={item.label} className="w-8 h-8" />
                      <span className="text-gray-800">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Hobbies Section */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 1.8, duration: 1 }}
  className="bg-white p-6 shadow-xl rounded-lg p-6"
>
  <h2 className="text-gray-800 text-3xl font-bold mb-6 text-gray-800">Hobbies</h2>
  <p className="text-gray-800 leading-relaxed text-lg mb-4">
    Beyond tech, I love exploring my creative and mindful side.
  </p>
  <ul className="flex flex-wrap gap-4 list-inside text-gray-800 text-lg space-y-2">
    <li>🎤 Singing & Music </li>
    <li>🧘‍♀️ Yoga & Mindfulness</li>
    <li>📚 Reading tech & self-help blogs/books</li>
    <li>🎨 Occasionally Photography, painting & clay art</li>
    <li>🌿 Connecting with nature and Trekking</li>
  </ul>
</motion.div>

        {/* Contact Section */}
       
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 2, duration: 1 }}
  className="bg-black text-green-400 font-mono p-8 rounded-lg shadow-xl mt-16 w-full max-w-3xl"
>
  <h2 className="text-2xl mb-4">Social Media Handles:~$</h2>
  <p className="mb-4">Feel free to connect or drop a message! 📨</p>
  
  <div className="flex flex-col gap-3">
    <a
      href="https://www.linkedin.com/in/chandanashastri/"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center hover:underline gap-2"
    >
      <img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" className="w-5 h-5" />
      linkedin.com/in/chandanashastri
    </a>
    
    <a
      href="https://github.com/ChandanaS03"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center hover:underline gap-2"
    >
      <img src="https://cdn.simpleicons.org/github/white" alt="GitHub" className="w-5 h-5" />
      github.com/ChandanaS03
    </a>
    <a        
    href="https://twitter.com/ShastriChandana"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center hover:underline gap-2"
    >
      <img src="https://img.shields.io/badge/-Twitter-%231DA1F2?style=for-the-badge&logo=twitter&logoColor=whiteons.org/twitter" alt="Twitter" className="w-5 h-5" />
      twitter.com/ChandanaShastri
    </a> 

    <a
      href="https://orcid.org/0009-0000-6080-7429"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center hover:underline gap-2"
    > 
      <img src="https://cdn.simpleicons.org/orcid" alt="orcid" className="w-5 h-5" />
      orcid.org/chandana.shastri
    </a>
    <a
      href="https://g.dev/chandanashastri"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center hover:underline gap-2"
    > 
      <img src="https://cdn.simpleicons.org/google" alt="Google" className="w-5 h-5" />
      g.dev/chandana.shastri
    </a>  
  
    <a
      href="https://learn.microsoft.com/en-us/users/me/achievements#badges-section"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center hover:underline gap-2"
    >

      <img src="https://img.shields.io/badge/-Microsoft-%237A7A7A?style=for-the-badge&logo=microsoft&logoColor=white" alt="Microsoft" className="w-5 h-5" />
      microsoft.com/chandanashastri
    </a>            
     
    
    <a
      href="mailto:chandanashastri12@gmail.com"
      className="flex items-center hover:underline gap-2"
    >
      <img src="https://cdn.simpleicons.org/gmail/EA4335" alt="Email" className="w-5 h-5" />
      chandanashastri12@gmail.com
    </a>
  </div>
</motion.div>

      </section>
    </div>
    </div>
  );
}
