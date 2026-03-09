import { Mail, Linkedin, MapPin, Calendar } from 'lucide-react';

export default function Contact() {
  return (
    <div className="space-y-12 max-w-4xl mx-auto">
      <section className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">Get in Touch</h1>
        <p className="text-xl text-slate-600 font-light">
          Whether you want to discuss satellite communications, machine learning, or just say hi, my inbox is always open.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Email Card */}
        <a 
          href="mailto:muntasir.hossain007@gmail.com" 
          className="group bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:border-indigo-300 hover:shadow-md transition-all duration-300 flex flex-col items-center text-center gap-4"
        >
          <div className="p-4 bg-indigo-50 text-indigo-600 rounded-full group-hover:scale-110 transition-transform duration-300">
            <Mail className="w-8 h-8" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-900">Email Me</h3>
            <p className="text-slate-500 mt-1">muntasir.hossain007@gmail.com</p>
          </div>
        </a>

        {/* LinkedIn Card */}
        <a 
          href="https://linkedin.com/in/mdmuntasirhossain98" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:border-blue-300 hover:shadow-md transition-all duration-300 flex flex-col items-center text-center gap-4"
        >
          <div className="p-4 bg-blue-50 text-blue-600 rounded-full group-hover:scale-110 transition-transform duration-300">
            <Linkedin className="w-8 h-8" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-900">LinkedIn</h3>
            <p className="text-slate-500 mt-1">Connect professionally</p>
          </div>
        </a>
      </div>

      {/* Book a Chat Section */}
      <section className="bg-slate-50 border border-slate-200 rounded-2xl p-8 md:p-12 text-center space-y-6">
        <div className="mx-auto p-4 bg-emerald-100 text-emerald-600 rounded-full w-fit mb-4">
          <Calendar className="w-8 h-8" />
        </div>
        <h2 className="text-3xl font-bold text-slate-900">Book a Chat</h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Interested in a quick chat about research, collaboration, or career advice? 
          Feel free to schedule a time with me.
        </p>
        <a 
          href="mailto:muntasir.hossain007@gmail.com?subject=Booking%20a%20Chat"
          className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full font-medium hover:bg-slate-800 transition-colors shadow-sm hover:shadow-md"
        >
          <Calendar className="w-5 h-5" />
          Schedule a Meeting
        </a>
      </section>

      {/* Location */}
      <section className="flex items-center justify-center gap-2 text-slate-500 font-mono text-sm pt-8 border-t border-slate-200">
        <MapPin className="w-4 h-4" />
        <span>Beaumont, TX, United States</span>
      </section>
    </div>
  );
}
