export function About() {
  return (
    <div className="flex-1 bg-[#FAFAFA] text-gray-900 pt-20 md:pt-24 pb-32">
      {/* Header */}
      <header className="py-24 px-6 sm:px-10 max-w-4xl mx-auto text-center">
        <h1 className="font-serif text-5xl md:text-7xl font-semibold tracking-tight text-gray-900 mb-6">
          Our Story
        </h1>
        <p className="font-sans text-xl text-gray-500 font-light leading-relaxed max-w-2xl mx-auto">
          We believe that a single book can cast a light that changes how an entire generation sees the world.
        </p>
      </header>

      {/* Mission & Vision */}
      <section className="max-w-5xl mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-12 rounded-3xl shadow-xl shadow-gray-200/40 border border-gray-100 transform hover:-translate-y-1 transition-all duration-300">
            <h3 className="font-serif text-3xl font-semibold text-gray-900 mb-6">Mission</h3>
            <p className="font-sans text-base text-gray-600 leading-relaxed font-light mt-4">
              Curation of quiet voices and loud ideas. We believe in the physical permanence of the printed word in an ephemeral digital age. To publish works of supreme literary merit that challenge existing paradigms, foster radical empathy, and push the boundaries of narrative form.
            </p>
          </div>
          <div className="bg-gray-900 p-12 rounded-3xl shadow-xl shadow-gray-900/20 transform hover:-translate-y-1 transition-all duration-300">
            <h3 className="font-serif text-3xl font-semibold text-white mb-6">Vision</h3>
            <p className="font-sans text-base text-gray-300 leading-relaxed font-light mt-4">
              To cultivate a global community of readers and writers dedicated to thoughtful discourse. We envision a future where independent publishing leads the conversation in solving the intellectual and emotional challenges of our time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
