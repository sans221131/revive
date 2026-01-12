const criteria = [
  {
    title: "Undergraduate courses",
    description: "For application to undergraduate programs, a 10 +2 or comparable level with a minimum of 50% marks or equivalent CGPA is required.",
    icon: "📚"
  },
  {
    title: "Postgraduate courses",
    description: "For application to PG courses. 10 +2 +3 or graduation or equal level with a minimum of 50% marks or equal CGPA is required.",
    icon: "🎓"
  }
];

export default function QualificationCriteria() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Qualification Criteria
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {criteria.map((item, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-100"
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {item.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
