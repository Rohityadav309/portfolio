function Contact() {
  return (
    <section id="ContactMe" className="py-20 px-6 bg-white max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-10">Contact Me</h2>
      <p className="text-center text-gray-700 mb-8">
        Have a question, idea, or opportunity? reach out!
      </p>

      <div className="text-center space-y-4 text-lg text-gray-800">
        <p>
          📧 Email:{" "}
          <a
            href="mailto:rohitbihari309@gmail.com"
            className="text-blue-600 hover:underline"
          >
            rohitbihari309@gmail.com
          </a>
        </p>
        <p>
          💼 LinkedIn:{" "}
          <a
            href="https://linkedin.com/in/rohit-yadav-903558250"
            target="_blank"
            className="text-blue-600 hover:underline"
          >
         linkedin.com/in/rohit-yadav-903558250
          </a>
        </p>
        <p>
          🛠️ GitHub:{" "}
          <a
            href="https://github.com/Rohityadav309"
            target="_blank"
            className="text-blue-600 hover:underline"
          >
           github.com/Rohityadav309
          </a>
        </p>
      </div>
    </section>
  );
}

export default Contact;
