function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-100 via-white to-purple-100 px-4 text-center">
      <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 mb-4">
        Hi, I'm <span className="text-blue-600">Rohit Yadav </span>
      </h1>
      <h2 className="text-2xl md:text-3xl text-gray-700 mb-6">
        Full Stack Developer & Problem Solver
      </h2>
      <p className="max-w-xl text-gray-600 text-lg mb-8">
        I build clean, scalable web applications and love solving real-world problems with code.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href="#MyWork"
          className="px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition"
        >
          View My Work
        </a>
        <a
          href="#ContactMe"
          className="px-6 py-3 border border-blue-600 text-blue-600 rounded-full font-semibold hover:bg-blue-50 transition"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}

export default Hero;
