import { Mail, MapPin, Phone } from 'lucide-react';

export function Contact() {
  return (
    <div className="flex-1 bg-[#FAFAFA] text-gray-900 pt-20 pb-32">
      <div className="max-w-5xl mx-auto px-6 sm:px-10 py-12">
        <div className="text-center mb-20">
          <h1 className="font-serif text-5xl md:text-7xl font-semibold tracking-tight text-gray-900 mb-6">
            Get in Touch
          </h1>
          <p className="font-sans text-xl text-gray-500 font-light max-w-2xl mx-auto">
            Whether you have a manuscript inquiry, a press request, or just want to say hello, we&apos;d love to hear from you.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl shadow-gray-200/50 border border-gray-100 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Contact Details */}
            <div className="p-12 lg:p-16 flex flex-col justify-center">
              <h2 className="font-serif text-3xl font-semibold text-gray-900 mb-10">Contact Info</h2>
              
              <div className="space-y-8">
                <div className="flex items-start group">
                  <div className="bg-gray-50 p-3 rounded-full mr-5 group-hover:bg-gray-900 group-hover:text-white transition-colors duration-300">
                    <MapPin strokeWidth={1.5} className="h-5 w-5 text-gray-600 group-hover:text-white" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-1">Our Shop</h3>
                    <p className="text-base text-gray-500 leading-relaxed">
                      Presidency College Wall Stall No. 37<br />
                    </p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="bg-gray-50 p-3 rounded-full mr-5 group-hover:bg-gray-900 group-hover:text-white transition-colors duration-300">
                    <Mail strokeWidth={1.5} className="h-5 w-5 text-gray-600 group-hover:text-white" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-1">Email Us</h3>
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
                    <h3 className="text-sm font-semibold text-gray-900 mb-1">Call Us</h3>
                    <p className="text-base text-gray-500 leading-relaxed">
                     8145627727 / 7908076547<br />
                      <span className="text-sm text-gray-400">Mon-Sat, 9am - 9pm GMT</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Embed */}
            <div className="bg-gray-200 h-80 lg:h-auto w-full relative">
              <iframe 
                src="https://maps.google.com/maps?q=22.5764084,88.3638382&z=17&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location Map"
                className="absolute inset-0 grayscale opacity-80 mix-blend-multiply"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
