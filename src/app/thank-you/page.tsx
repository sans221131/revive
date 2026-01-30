import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Thank You!
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Your enquiry has been submitted successfully. We will get back to you soon.
          </p>
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <div className="flex items-center justify-center mb-4">
              <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-green-800 font-medium">
              Submission Confirmed
            </p>
            <p className="text-green-600 text-sm mt-2">
              Your information has been received and is being processed.
            </p>
          </div>
          <Link
            href="/"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Return to Home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}