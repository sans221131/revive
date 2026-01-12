import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <div className="text-2xl font-bold text-blue-600">
            Knowledge ACAD
          </div>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#programs" className="text-gray-700 hover:text-blue-600 transition">
            Programs
          </Link>
          <Link href="#courses" className="text-gray-700 hover:text-blue-600 transition">
            Courses
          </Link>
          <Link href="#benefits" className="text-gray-700 hover:text-blue-600 transition">
            Benefits
          </Link>
          <a 
            href="tel:+918976422397" 
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Call: +91 8976422397
          </a>
        </nav>

        <button className="md:hidden p-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}
