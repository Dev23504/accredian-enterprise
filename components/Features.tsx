export default function Features() {
  return (
    <section className="py-20 px-6 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Why Choose Us
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        
        <div className="p-6 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300">
          <h3 className="text-xl font-semibold mb-3">
            Industry Programs
          </h3>
          <p className="text-gray-600">
            Learn with real-world projects and expert-designed curriculum.
          </p>
        </div>

        <div className="p-6 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300">
          <h3 className="text-xl font-semibold mb-3">
            Expert Mentorship
          </h3>
          <p className="text-gray-600">
            Get guidance from professionals working in top companies.
          </p>
        </div>

        <div className="p-6 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300">
          <h3 className="text-xl font-semibold mb-3">
            Career Growth
          </h3>
          <p className="text-gray-600">
            Enhance your career with industry-recognized certifications.
          </p>
        </div>

      </div>
    </section>
  );
}