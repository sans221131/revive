const benefits = [
  {
    title: "Flexibility",
    description: "Students can study anytime and from anywhere, making it easy to balance education with work or personal responsibilities."
  },
  {
    title: "Cost-effective",
    description: "Online courses usually have lower fees, and students save money on travel, accommodation, and other expenses."
  },
  {
    title: "Access to more options",
    description: "Learners can choose from a wide range of courses offered by institutions across the world."
  },
  {
    title: "Self-paced learning",
    description: "Many online programs allow students to learn at their own speed, revisiting lessons whenever needed."
  },
  {
    title: "Convenience",
    description: "No need to attend physical classes; all materials, lectures, and assignments are available online."
  },
  {
    title: "Skill development",
    description: "Students gain digital skills, time-management abilities, and self-discipline, which are valuable in professional life."
  }
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-16 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Benefits of Online Courses
        </h2>
        <p className="text-center text-blue-100 mb-12 text-lg">
          Here are the benefits of online courses:
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition"
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl font-bold text-blue-200">{index + 1}.</span>
                <div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-blue-100 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl p-8 text-center max-w-3xl mx-auto">
          <p className="text-gray-900 text-xl font-semibold mb-4">
            Make the Right Choice: Compare Colleges & Universities Side by Side!
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition">
            Enquire Now
          </button>
        </div>
      </div>
    </section>
  );
}
