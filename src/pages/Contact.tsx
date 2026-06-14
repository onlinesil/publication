import { Clock, Mail, MapPin, MessageCircle, Phone, ShieldCheck, Star } from 'lucide-react';

const whatsappUrl = 'https://wa.me/917908076547?text=Hello%20Mullick%20Library%2C%20I%20want%20to%20discuss%20publishing%20my%20book.';
const mailtoUrl = 'mailto:mullicklibrary@gmail.com?subject=Publishing%20Inquiry%20-%20Mullick%20Library&body=Hello%20Mullick%20Library%2C%0A%0AI%20would%20like%20to%20discuss%20publishing%20my%20book.%0A%0AName%3A%0APhone%3A%0AMessage%3A';

export function Contact() {
  return (
    <div className="flex-1 bg-[#FAFAFA] text-gray-900 pt-20 pb-32">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 py-12">
        <div className="text-center mb-16">
          <p className="font-sans text-xs font-semibold tracking-[0.35em] uppercase text-gray-500 mb-5">
            Publishing Consultation
          </p>
          <h1 className="font-serif text-5xl md:text-7xl font-semibold tracking-tight text-gray-900 mb-6">
            Ready to publish your book?
          </h1>
          <p className="font-sans text-xl text-gray-500 font-light max-w-3xl mx-auto leading-relaxed">
            Contact the Mullick Library publishing team today for a free consultation on book publishing, distribution, ISBN guidance, and author support.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-gray-900 text-white rounded-full text-sm font-semibold hover:bg-gray-800 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp Publishing Team
            </a>
            <a
              href="tel:+917908076547"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-gray-900 border border-gray-200 rounded-full text-sm font-semibold hover:border-gray-900 hover:shadow-md transition-all duration-300"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </a>
          </div>
          <p className="mt-4 font-sans text-sm text-gray-500">
            We usually respond within 24 business hours.
          </p>
        </div>

        <section className="mb-10 rounded-3xl bg-white border border-gray-100 shadow-xl shadow-gray-200/40 p-8 sm:p-10">
          <p className="font-sans text-base text-gray-600 leading-relaxed text-center max-w-4xl mx-auto">
            Mullick Library is an independent book publisher based in India, helping authors publish, distribute, and market books across multiple platforms. We work with writers, educators, and readers who value thoughtful editing, meaningful presentation, and books built for long-term impact.
          </p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
          <div className="bg-white rounded-3xl border border-gray-100 shadow-lg shadow-gray-200/30 p-8 text-center">
            <ShieldCheck className="h-8 w-8 mx-auto mb-4 text-gray-900" strokeWidth={1.5} />
            <h3 className="font-serif text-2xl font-semibold mb-2">Independent Publisher</h3>
            <p className="font-sans text-sm text-gray-500 leading-relaxed">Focused on literary value, educational works, modern classics, and author-first publishing support.</p>
          </div>
          <div className="bg-white rounded-3xl border border-gray-100 shadow-lg shadow-gray-200/30 p-8 text-center">
            <Star className="h-8 w-8 mx-auto mb-4 text-gray-900" strokeWidth={1.5} />
            <h3 className="font-serif text-2xl font-semibold mb-2">Curated Publications</h3>
            <p className="font-sans text-sm text-gray-500 leading-relaxed">Every title is presented with careful attention to readability, cover quality, and reader trust.</p>
          </div>
          <div className="bg-white rounded-3xl border border-gray-100 shadow-lg shadow-gray-200/30 p-8 text-center">
            <Clock className="h-8 w-8 mx-auto mb-4 text-gray-900" strokeWidth={1.5} />
            <h3 className="font-serif text-2xl font-semibold mb-2">Quick Response</h3>
            <p className="font-sans text-sm text-gray-500 leading-relaxed">Publishing and book order inquiries are usually answered within 24 business hours.</p>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl shadow-gray-200/50 border border-gray-100 overflow-hidden mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Contact Details */}
            <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
              <h2 className="font-serif text-3xl font-semibold text-gray-900 mb-8">Contact Information</h2>
              
              <div className="space-y-7">
                <div className="flex items-start group">
                  <div className="bg-gray-50 p-3 rounded-full mr-5 group-hover:bg-gray-900 group-hover:text-white transition-colors duration-300">
                    <MapPin strokeWidth={1.5} className="h-5 w-5 text-gray-600 group-hover:text-white" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-1">Visit Us</h3>
                    <p className="text-base text-gray-500 leading-relaxed">
                      Presidency College Wall Stall No. 37<br />Kolkata, West Bengal, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="bg-gray-50 p-3 rounded-full mr-5 group-hover:bg-gray-900 group-hover:text-white transition-colors duration-300">
                    <Mail strokeWidth={1.5} className="h-5 w-5 text-gray-600 group-hover:text-white" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-base text-gray-500 leading-relaxed">
                      <a href="mailto:mullicklibrary@gmail.com" className="hover:text-gray-900 transition-colors">mullicklibrary@gmail.com</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="bg-gray-50 p-3 rounded-full mr-5 group-hover:bg-gray-900 group-hover:text-white transition-colors duration-300">
                    <Phone strokeWidth={1.5} className="h-5 w-5 text-gray-600 group-hover:text-white" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-1">Call</h3>
                    <p className="text-base text-gray-500 leading-relaxed space-x-2">
                      <a href="tel:+918145627727" className="hover:text-gray-900 transition-colors">8145627727</a>
                      <span>/</span>
                      <a href="tel:+917908076547" className="hover:text-gray-900 transition-colors">7908076547</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="bg-gray-50 p-3 rounded-full mr-5 group-hover:bg-gray-900 group-hover:text-white transition-colors duration-300">
                    <Clock strokeWidth={1.5} className="h-5 w-5 text-gray-600 group-hover:text-white" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-1">Business Hours</h3>
                    <p className="text-base text-gray-500 leading-relaxed">
                      Monday–Friday: 10:00 AM – 8:00 PM<br />
                      Saturday: 10:00 AM – 6:00 PM<br />
                      Sunday &amp; holidays: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 p-8 sm:p-12 lg:p-16">
              <h2 className="font-serif text-3xl font-semibold text-gray-900 mb-3">Send an Inquiry</h2>
              <p className="font-sans text-sm text-gray-500 mb-8 leading-relaxed">
                Share your basic details and message. Your email app will open with the inquiry ready to send.
              </p>
              <form action={mailtoUrl} method="post" encType="text/plain" className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input id="name" name="Name" type="text" className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-gray-900 transition-colors" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input id="email" name="Email" type="email" className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-gray-900 transition-colors" placeholder="your@email.com" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input id="phone" name="Phone" type="tel" className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-gray-900 transition-colors" placeholder="Your phone number" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea id="message" name="Message" rows={5} className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-gray-900 transition-colors resize-none" placeholder="Tell us about your book or inquiry" />
                </div>
                <button type="submit" className="w-full inline-flex items-center justify-center px-6 py-3.5 bg-gray-900 text-white rounded-full text-sm font-semibold hover:bg-gray-800 hover:shadow-lg transition-all duration-300">
                  Send Publishing Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>

        <section className="mb-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/40 p-8 sm:p-10">
            <h2 className="font-serif text-3xl font-semibold text-gray-900 mb-6">Publishing FAQ</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-sans text-sm font-semibold text-gray-900 mb-2">How can I publish my book?</h3>
                <p className="font-sans text-sm text-gray-500 leading-relaxed">Send your manuscript details through WhatsApp, phone, or email. Our team will guide you through the next steps.</p>
              </div>
              <div>
                <h3 className="font-sans text-sm font-semibold text-gray-900 mb-2">What publishing packages do you offer?</h3>
                <p className="font-sans text-sm text-gray-500 leading-relaxed">Publishing support may include editing guidance, cover presentation, ISBN guidance, printing support, and distribution planning depending on the project.</p>
              </div>
              <div>
                <h3 className="font-sans text-sm font-semibold text-gray-900 mb-2">How long does publishing take?</h3>
                <p className="font-sans text-sm text-gray-500 leading-relaxed">The timeline depends on editing, design, printing, and approval requirements. Contact us with your manuscript details for a practical estimate.</p>
              </div>
              <div>
                <h3 className="font-sans text-sm font-semibold text-gray-900 mb-2">Do you provide ISBN services?</h3>
                <p className="font-sans text-sm text-gray-500 leading-relaxed">We can guide authors on ISBN-related requirements and publishing documentation during the consultation process.</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-200 rounded-3xl overflow-hidden min-h-[420px] relative">
            <iframe 
              src="https://maps.google.com/maps?q=22.5764084,88.3638382&z=17&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Mullick Library Location Map"
              className="absolute inset-0 grayscale opacity-80 mix-blend-multiply"
            ></iframe>
          </div>
        </section>
      </div>
    </div>
  );
}