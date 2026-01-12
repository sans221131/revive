const programs = [
  {
    name: "NMIMS CDOE",
    accreditation: "UGC",
    emi: "₹8-10k/Mo"
  },
  {
    name: "DY Patil Online",
    accreditation: "UGC, NAAC A++, AICTE",
    emi: "₹8-10k/Mo"
  },
  {
    name: "Manipal Online",
    accreditation: "UGC, AICTE, WES, NAAC A+, ACU",
    emi: "₹8-10k/Mo"
  },
  {
    name: "DY Patil Vidyapeeth",
    accreditation: "UGC, AIU, NAAC A++, WES",
    emi: "₹8-10k/Mo"
  }
];

export default function ComparePrograms() {
  return (
    <section id="programs" className="section bg-white">
      <div className="container-app">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="section-title">Compare Online MBA</h2>
          <p className="section-subtitle">
            Shortlist universities side-by-side and enquire in one click.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((program, index) => (
            <div 
              key={index}
              className="card card-hover flex h-full flex-col p-6"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-base font-semibold tracking-tight text-slate-900">
                {program.name}
                </h3>
                <span className="badge">UGC-ready</span>
              </div>
              <div className="mt-4 space-y-2 text-sm text-slate-600">
                <div>
                  <span className="font-medium text-slate-700">Accreditation:</span> {program.accreditation}
                </div>
                <div>
                  <span className="font-medium text-slate-700">EMI:</span> {program.emi}
                </div>
              </div>
              <div className="mt-5 flex-1" />
              <a href="#enquire" className="btn btn-primary w-full">
                Enquire
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
