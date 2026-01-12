type Program = {
  name: string;
  accreditation: string;
  emi: string;
  badge?: string;
  accent?: "blue" | "indigo" | "cyan" | "violet";
};

const programs: Program[] = [
  {
    name: "NMIMS CDOE",
    accreditation: "UGC",
    emi: "₹8-10k/Mo",
    badge: "UGC-ready",
    accent: "blue",
  },
  {
    name: "DY Patil Online",
    accreditation: "UGC, NAAC A++, AICTE",
    emi: "₹8-10k/Mo",
    badge: "UGC-ready",
    accent: "indigo",
  },
  {
    name: "Manipal Online",
    accreditation: "UGC, AICTE, WES, NAAC A+, ACU",
    emi: "₹8-10k/Mo",
    badge: "UGC-ready",
    accent: "cyan",
  },
  {
    name: "DY Patil Vidyapeeth",
    accreditation: "UGC, AIU, NAAC A++, WES",
    emi: "₹8-10k/Mo",
    badge: "UGC-ready",
    accent: "violet",
  },
  {
    name: "Amity University",
    accreditation: "UGC, NAAC A",
    emi: "₹8-10k/Mo",
    badge: "UGC-ready",
    accent: "blue",
  },
  {
    name: "UMass",
    accreditation: "AACSB",
    emi: "₹8-10k/Mo",
    badge: "Global",
    accent: "indigo",
  },
  {
    name: "VIT",
    accreditation: "UGC, NAAC A+",
    emi: "₹8-10k/Mo",
    badge: "UGC-ready",
    accent: "cyan",
  },
];

function getInitials(name: string) {
  const parts = name
    .split(/\s+/)
    .filter(Boolean)
    .map((p) => p.replace(/[^A-Za-z]/g, ""))
    .filter(Boolean);

  const initials = parts
    .slice(0, 3)
    .map((p) => p[0]!.toUpperCase())
    .join("");

  return initials || name.slice(0, 2).toUpperCase();
}

function getAccentClasses(accent: Program["accent"]) {
  switch (accent) {
    case "indigo":
      return {
        bar: "from-indigo-600 to-blue-600",
        icon: "bg-indigo-600/10 text-indigo-700 ring-indigo-600/15",
      };
    case "cyan":
      return {
        bar: "from-cyan-600 to-blue-600",
        icon: "bg-cyan-600/10 text-cyan-700 ring-cyan-600/15",
      };
    case "violet":
      return {
        bar: "from-violet-600 to-indigo-600",
        icon: "bg-violet-600/10 text-violet-700 ring-violet-600/15",
      };
    case "blue":
    default:
      return {
        bar: "from-blue-600 to-indigo-600",
        icon: "bg-blue-600/10 text-blue-700 ring-blue-600/15",
      };
  }
}

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

        {/* All cards: centered grid with equal card widths so final row centers */}
        <div className="mt-10 flex justify-center">
          <div className="grid w-full max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 justify-items-center auto-rows-fr">
            {programs.map((program, idx) => {
              const isLastSingle = programs.length % 3 === 1 && idx === programs.length - 1;
              return (
                <div
                  key={program.name}
                  className={
                    isLastSingle
                      ? "w-full max-w-[360px] lg:col-span-3 flex justify-center mx-auto"
                      : "w-full max-w-[360px]"
                  }
                >
                  <Card program={program} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({ program }: { program: Program }) {
  const initials = getInitials(program.name);
  const accent = getAccentClasses(program.accent);
  const tags = program.accreditation
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean);

  return (
    <div className="group relative flex h-full min-h-[280px] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg">
      <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${accent.bar}`} />

      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-3">
          <div className={`grid h-10 w-10 place-items-center rounded-xl text-sm font-bold ring-1 ${accent.icon}`} aria-hidden>
            {initials}
          </div>
          <div>
            <h3 className="text-base font-semibold tracking-tight text-slate-900">{program.name}</h3>
            <p className="mt-0.5 text-xs text-slate-500">Online MBA • Fast enquiry</p>
          </div>
        </div>

        <span className="badge">{program.badge ?? "UGC-ready"}</span>
      </div>

      <div className="mt-4">
        <div className="text-sm text-slate-700">
          <span className="font-medium text-slate-800">EMI:</span>{" "}
          <span className="font-semibold text-blue-700">{program.emi}</span>
        </div>

        <div className="mt-3">
          <div className="text-xs font-medium text-slate-600">Accreditation</div>
          <div className="mt-2 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={`${program.name}-${tag}`} className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-700">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 flex-1" />
      <a href="#enquire" className="btn btn-primary w-full">
        Enquire
      </a>
    </div>
  );
}
