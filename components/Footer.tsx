import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white text-xl font-bold mb-4">Knowledge ACAD</h3>
            <p className="text-sm leading-relaxed">
              Compare Online MBA Programs, Accredited Online MBA Degrees, Low Cost Online MBA,
              Compare Online MBA Universities, Executive MBA Vs Online MBA, Difference
              Between Online MBA & Distance MBA
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#programs" className="hover:text-white transition">
                  Compare Programs
                </Link>
              </li>
              <li>
                <Link href="#courses" className="hover:text-white transition">
                  MBA Courses
                </Link>
              </li>
              <li>
                <Link href="#benefits" className="hover:text-white transition">
                  Benefits
                </Link>
              </li>
              <li>
                <Link href="/policy" className="hover:text-white transition">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <div className="space-y-2 text-sm">
              <p>
                <a 
                  href="tel:+918976422397" 
                  className="hover:text-white transition flex items-center gap-2"
                >
                  <span>📞</span>
                  +91 8976422397
                </a>
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <p className="text-sm text-center text-gray-500">
            <strong>Disclaimer:</strong> We act as a marketing service partner only. All the above
            universities hold full right to request the change or removal of any non-relevant content.
            Images used are for illustrative purposes and do not directly represent the
            respective colleges or universities.
          </p>
          <p className="text-center text-sm mt-4 text-gray-600">
            © {new Date().getFullYear()} Knowledge ACAD. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
