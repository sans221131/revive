import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container-app py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-slate-900 text-lg font-semibold mb-3">Coursewala</h3>
            <p className="text-sm leading-relaxed text-slate-600">
              Compare Online MBA Programs, Accredited Online MBA Degrees, Low Cost Online MBA,
              Compare Online MBA Universities, Executive MBA Vs Online MBA, Difference
              Between Online MBA & Distance MBA
            </p>
          </div>
          
          <div>
            <h4 className="text-slate-900 font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>
                <a href="#programs" className="hover:text-slate-900 transition">
                  Compare Programs
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-slate-900 transition">
                  MBA Courses
                </a>
              </li>
              <li>
                <a href="#benefits" className="hover:text-slate-900 transition">
                  Benefits
                </a>
              </li>
              <li>
                <Link href="/policy" prefetch={false} className="hover:text-slate-900 transition">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-slate-900 font-semibold mb-3">Contact</h4>
            <div className="space-y-2 text-sm text-slate-600">
              <p>
                <a 
                  href="tel:+918976422397" 
                  className="hover:text-slate-900 transition flex items-center gap-2"
                >
                  <span>📞</span>
                  +91 8976422397
                </a>
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-200 pt-8">
          <p className="text-xs text-center text-slate-500">
            <strong>Disclaimer:</strong> We act as a marketing service partner only. All the above
            universities hold full right to request the change or removal of any non-relevant content.
            Images used are for illustrative purposes and do not directly represent the
            respective colleges or universities.
          </p>
          <p className="text-center text-xs mt-4 text-slate-500">
            © {new Date().getFullYear()} Coursewala. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
