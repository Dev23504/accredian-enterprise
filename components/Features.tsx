export default function Features() {
  return (
    <section className="py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">
        Our Features
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        
        <div className="p-6 shadow-lg rounded-xl">
          <h3 className="text-xl font-semibold mb-2">
            Industry Programs
          </h3>
          <p className="text-gray-600">
            Learn from real-world experts and gain practical skills.
          </p>
        </div>

        <div className="p-6 shadow-lg rounded-xl">
          <h3 className="text-xl font-semibold mb-2">
            Expert Mentors
          </h3>
          <p className="text-gray-600">
            Get guidance from top professionals in the field.
          </p>
        </div>

        <div className="p-6 shadow-lg rounded-xl">
          <h3 className="text-xl font-semibold mb-2">
            Career Growth
          </h3>
          <p className="text-gray-600">
            Boost your career with industry-recognized programs.
          </p>
        </div>

      </div>
    </section>
  );
}