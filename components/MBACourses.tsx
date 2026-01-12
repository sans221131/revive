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
    <section id="courses" className="section bg-slate-50">
      <div className="container-app">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="section-title">Online MBA Courses</h2>
          <p className="section-subtitle">Choose a specialization aligned with your goals.</p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, index) => (
            <div 
              key={index}
              className="card card-hover p-6"
            >
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-slate-100 text-xl">
                  {course.icon}
                </div>
                <h3 className="text-base font-semibold tracking-tight text-slate-900">
                {course.title}
                </h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {course.description}
              </p>
              <div className="mt-5">
                <a href="#enquire" className="btn btn-outline w-full">
                  Enquire
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
