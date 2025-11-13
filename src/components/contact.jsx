import React, { useState } from 'react';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div id="contact" className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-7xl w-full">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left Side - Contact Info */}
          <div className="py-12">
            <h2 className="text-5xl lg:text-7xl sm:text-3xl leading-relaxed text-left text-gray-900 mb-8">Let's <br /> team up</h2>
            
            <div className="space-y-10">
              {/* Email */}
              <div className="flex items-center gap-5">
                <div className="bg-gray-200 p-4 rounded-full flex-shrink-0">
                  <Mail className="w-4 h-4 text-gray-600" />
                </div>
                <div>
                  <p className="text-gray-900">contact@company.com</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-5">
                <div className="bg-gray-200 p-4 rounded-full flex-shrink-0">
                  <Phone className="w-4 h-4 text-gray-600" />
                </div>
                <div>
                  <p className="text-gray-900">+254 (555) 123-4567</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-5">
                <div className="bg-gray-200 p-4 rounded-full flex-shrink-0">
                  <MapPin className="w-4 h-4 text-gray-600" />
                </div>
                <div>
                  <p className="text-gray-900">Kenya<br />Nairobi, 100</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white mt-10 p-10  rounded-2xl shadow-lg">
            
            <div className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-200 rounded-full focus:ring-2 focus:ring-black focus:border-transparent outline-none transition"
                  placeholder="Alfred Kamau"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-200 rounded-full focus:ring-2 focus:ring-black focus:border-transparent outline-none transition"
                  placeholder="alfredkamau@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-200 rounded-full focus:ring-2 focus:ring-black focus:border-transparent outline-none transition"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-3 bg-gray-200 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent outline-none transition resize-none"
                  placeholder="Tell us more about your inquiry..."
                ></textarea>
              </div>

             <div className="flex flex-row items-center justify-center mt-4">
  <div className='w-10 h-10 bg-gray-200 flex justify-center hover:bg-black hover:text-white transition-colors items-center rounded-full text-slate-900'>
    <ArrowRight size={20} />
  </div>
  <div className="w-full h-10 px-4 bg-gray-200 hover:bg-black hover:text-white transition-colors rounded-full flex items-center justify-center">
    <p className="text-sm text-black hover:text-white">Book your slot</p>
  </div>
</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}