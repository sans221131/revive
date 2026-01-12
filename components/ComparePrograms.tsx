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
    <section id="programs" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Compare Online MBA
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-blue-50 to-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {program.name}
              </h3>
              <div className="space-y-3 mb-6">
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Accreditation:</span> {program.accreditation}
                </p>
                <p className="text-lg font-bold text-blue-600">
                  EMI – {program.emi}
                </p>
              </div>
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                Enquire Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
