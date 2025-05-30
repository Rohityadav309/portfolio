const projects = [
  {
    title: "Softcrafter",
    description:
      "Visualizes classic sorting algorithms (Selection, Bubble, Insertion) with smooth animations and interactive controls.",
    tech: ["JavaScript", "React", "CSS"],
    image: "/images/softcrafter.png", // add your image here
     // update with your real repo
  },
  {
    title: "Keep Notes",
    description:
      "A full-stack note-taking app to create, edit, and organize notes with user authentication and cloud storage.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    image: "/images/keepnotes.png", // add your image here
     // update with your real repo
  },
  // Optional third project placeholder, can remove if you want
  {
    title: "Coming Soon",
    description:
      "More projects coming soon! Stay tuned.",
    tech: [],
    image: "/images/comingsoon.png",
  
  },
];

function MyWork() {
  return (
    <section id="MyWork" className="py-20 px-6 bg-white max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12">My Work</h2>
      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-xl shadow-md p-6 hover:shadow-lg transition"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-blue-600 mb-2">{project.title}</h3>
            <p className="text-gray-700 mb-3">{project.description}</p>
            <div className="flex flex-wrap gap-2 text-sm mb-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
           
            
          </div>
        ))}
      </div>
    </section>
  );
}

export default MyWork;
