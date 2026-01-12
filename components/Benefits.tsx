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
    <section id="benefits" className="section bg-slate-50">
      <div className="container-app">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="section-title">Benefits of Online Courses</h2>
          <p className="section-subtitle">Flexible learning with real career advantages.</p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="card card-hover p-6"
            >
              <div className="flex items-start gap-3">
                <span className="grid h-8 w-8 place-items-center rounded-xl bg-blue-600 text-sm font-bold text-white">
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-base font-semibold tracking-tight text-slate-900">{benefit.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="card mt-10 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-center text-white">
            <p className="text-lg font-semibold">
            Make the Right Choice: Compare Colleges & Universities Side by Side!
            </p>
            <div className="mt-4 flex justify-center">
              <a href="#enquire" className="btn bg-white text-slate-900 hover:bg-slate-100">
                Enquire Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
