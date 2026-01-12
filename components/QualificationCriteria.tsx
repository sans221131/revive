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
    <section className="section bg-white">
      <div className="container-app">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="section-title">Qualification Criteria</h2>
          <p className="section-subtitle">Quick eligibility summary for admissions.</p>
        </div>

        <div className="mx-auto mt-10 grid max-w-4xl gap-5 md:grid-cols-2">
          {criteria.map((item, index) => (
            <div 
              key={index}
              className="card card-hover p-6 sm:p-8"
            >
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-slate-100 text-xl">
                  {item.icon}
                </div>
                <h3 className="text-base font-semibold tracking-tight text-slate-900">{item.title}</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
