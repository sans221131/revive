const courses = [
  {
    title: "Digital Marketing",
    description: "MBA in Digital Marketing teaches how to sell products online using ads, social media, SEO, and data.",
    icon: "📱"
  },
  {
    title: "Finance",
    description: "MBA in Finance teaches how money works in businesses, budgeting, investing, risk, and financial planning.",
    icon: "💰"
  },
  {
    title: "Human Resource",
    description: "MBA in Human Resources teaches how to hire, manage, and grow people inside a company.",
    icon: "👥"
  },
  {
    title: "Information Technology",
    description: "MBA in Information Technology teaches how to manage technology, systems, and IT teams for business growth.",
    icon: "💻"
  },
  {
    title: "International Business",
    description: "MBA in International Business teaches how companies operate across countries, global trade, exports, imports, and foreign markets.",
    icon: "🌍"
  },
  {
    title: "Entrepreneurship",
    description: "MBA in Entrepreneurship teaches how to start, run, and scale your own business.",
    icon: "🚀"
  }
];

export default function MBACourses() {
  return (
    <section id="courses" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Online MBA Courses
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow"
            >
              <div className="text-5xl mb-4">{course.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {course.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {course.description}
              </p>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                Enquire Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
