"use client";

import { useState } from 'react';

export default function Hero() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    university: '',
    agree: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Client-side validation
    if (!formData.name.trim()) {
      setSubmitStatus({ type: 'error', message: 'Name is required.' });
      return;
    }

    const phoneDigits = formData.phone.replace(/\D/g, '');
    if (phoneDigits.length < 10) {
      setSubmitStatus({ type: 'error', message: 'Please enter a valid 10-digit phone number.' });
      return;
    }

    if (formData.email && !/^\S+@\S+\.\S+$/.test(formData.email)) {
      setSubmitStatus({ type: 'error', message: 'Please enter a valid email address.' });
      return;
    }

    if (!formData.city.trim()) {
      setSubmitStatus({ type: 'error', message: 'City is required.' });
      return;
    }

    if (!formData.university) {
      setSubmitStatus({ type: 'error', message: 'Please select a university.' });
      return;
    }

    if (!formData.agree) {
      setSubmitStatus({ type: 'error', message: 'You must agree to the privacy policy.' });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          city: formData.city,
          university: formData.university,
        }),
      });

      const data = await response.json() as { error?: string };

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you! Your enquiry has been submitted successfully.',
        });
        // Reset form
        setFormData({
          name: '',
          phone: '',
          email: '',
          city: '',
          university: '',
          agree: false,
        });
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.error || 'Failed to submit enquiry. Please try again.',
        });
      }
    } catch (err) {
      console.error('Submit error:', err);
      setSubmitStatus({
        type: 'error',
        message: 'An error occurred. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 flex items-start">
      <div className="absolute -top-24 right-[-6rem] h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute -bottom-24 left-[-6rem] h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="container-app section pt-8 sm:pt-10">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14 min-h-full">
          <div className="pt-2 self-center">
            <div className="badge">Compare MBA programs • Fast enquiry</div>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              Compare top <span className="text-blue-700">Online MBA</span> programs
            </h1>
            <p className="mt-3 text-base font-medium text-slate-700 sm:text-lg">
              From inclination to acceleration.
            </p>
            <p className="section-subtitle max-w-prose">
              Why commute daily when you can pursue an Online MBA from home? Enrol in top programs across
              India and accelerate your career growth.
            </p>

            <ul className="mt-6 grid gap-3 text-sm text-slate-700 sm:text-base">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                  ✓
                </span>
                <span>UGC/NAAC accredited options</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                  ✓
                </span>
                <span>Compare fees, EMI & universities</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                  ✓
                </span>
                <span>Get a call back in minutes</span>
              </li>
            </ul>
          </div>

          <div id="enquire" className="card card-hover p-4 sm:p-6 scroll-mt-20 sm:scroll-mt-24">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">Enquire now</h2>
                <p className="mt-1 text-sm text-slate-600">Fill the form and we’ll reach out shortly.</p>
              </div>
              <span className="badge">Free</span>
            </div>

            <form onSubmit={handleSubmit} className="mt-4 space-y-3">
              <div>
                <label className="label">
                  Name *
                </label>
                <input
                  type="text"
                  required
                  className="input px-3 py-2"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div>
                <label className="label">
                  Phone *
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value="91"
                    disabled
                    className="w-14 rounded-lg border border-slate-300 bg-slate-100 px-2 py-2 text-sm text-slate-700"
                  />
                  <input
                    type="tel"
                    required
                    className="input px-3 py-2"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label className="label">
                  Email
                </label>
                <input
                  type="email"
                  className="input px-3 py-2"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div>
                <label className="label">
                  City *
                </label>
                <input
                  type="text"
                  required
                  className="input px-3 py-2"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                />
              </div>

              <div>
                <label className="label">
                  University *
                </label>
                <select
                  required
                  className="input px-3 py-2"
                  value={formData.university}
                  onChange={(e) => setFormData({ ...formData, university: e.target.value })}
                >
                  <option value="">Select university</option>
                  <option value="NMIMS CDOE">NMIMS CDOE</option>
                  <option value="DY Patil Online">DY Patil Online</option>
                  <option value="Manipal Online">Manipal Online</option>
                  <option value="DY Patil Vidyapeeth">DY Patil Vidyapeeth</option>
                  <option value="Amity University">Amity University</option>
                  <option value="University of Massachusetts">University of Massachusetts</option>
                  <option value="VIT">VIT</option>
                </select>
              </div>

              {submitStatus.type && (
                <div
                  className={`p-3 rounded-lg ${
                    submitStatus.type === 'success'
                      ? 'bg-green-50 text-green-800 border border-green-200'
                      : 'bg-red-50 text-red-800 border border-red-200'
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  required
                  className="mt-1 h-4 w-4 rounded border-slate-300 text-blue-600"
                  checked={formData.agree}
                  onChange={(e) => setFormData({ ...formData, agree: e.target.checked })}
                />
                <label className="text-xs leading-tight text-slate-600">
                  I Agree to Coursewala Privacy Policy and provide consent to be contacted 
                  for promotion via WhatsApp, SMS, Mail etc.
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary w-full py-2 text-sm disabled:cursor-not-allowed disabled:bg-slate-400"
              >
                {isSubmitting ? 'Submitting...' : 'Enquire Now'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
