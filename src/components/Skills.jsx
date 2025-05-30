function Skills() {
  const frontend = ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS'];
  const backend = ['Node.js','Express','MongoDB'];
  const languages = ['C++', 'Java','python'];
  const others = ['Git', 'GitHub', 'VS Code'];

  const renderSkillBlock = (title, skills) => (
    <div className="bg-white shadow-md rounded-xl p-6 border hover:shadow-lg transition">
      <h3 className="text-xl font-semibold mb-4 text-blue-600">{title}</h3>
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <li key={index} className="text-gray-700 font-medium">
            • {skill}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <section
      id="Skills"
      className="py-20 px-6 bg-gray-50 text-gray-800 max-w-6xl mx-auto"
    >
      <h2 className="text-4xl font-bold text-center mb-10">Skills</h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
        {renderSkillBlock('Frontend', frontend)}
        {renderSkillBlock('Backend', backend)}
        {renderSkillBlock('Languages', languages)}
        {renderSkillBlock('Tools & Others', others)}
      </div>
    </section>
  );
}

export default Skills;
