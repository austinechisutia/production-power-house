import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-200 text-black">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Alfred</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Building innovative solutions for a better tomorrow. Your trusted partner in digital transformation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-700 hover:text-black transition-colors text-sm">About Us</a></li>
              <li><a href="#services" className="text-gray-700 hover:text-black transition-colors text-sm">Services</a></li>
              <li><a href="#portfolio" className="text-gray-700 hover:text-black transition-colors text-sm">Portfolio</a></li>
              <li><a href="#careers" className="text-gray-700 hover:text-black transition-colors text-sm">Careers</a></li>
              <li><a href="#blog" className="text-gray-700 hover:text-black transition-colors text-sm">Blog</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#help" className="text-gray-700 hover:text-black transition-colors text-sm">Help Center</a></li>
              <li><a href="#faq" className="text-gray-700 hover:text-black transition-colors text-sm">FAQ</a></li>
              <li><a href="#terms" className="text-gray-700 hover:text-black transition-colors text-sm">Terms of Service</a></li>
              <li><a href="#privacy" className="text-gray-700 hover:text-black transition-colors text-sm">Privacy Policy</a></li>
              <li><a href="#contact" className="text-gray-700 hover:text-black transition-colors text-sm">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gray-700" />
                <span className="text-gray-700 text-sm">contact@company.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gray-700" />
                <span className="text-gray-700 text-sm">+254 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-gray-700" />
                <span className="text-gray-700 text-sm">Nairobi, Kenya 10001</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex gap-3 mt-6">
              <a href="#facebook" className="w-9 h-9 bg-white hover:bg-black hover:text-white transition-colors rounded-full flex items-center justify-center">
                <Facebook size={18} />
              </a>
              <a href="#twitter" className="w-9 h-9 bg-white hover:bg-black hover:text-white transition-colors rounded-full flex items-center justify-center">
                <Twitter size={18} />
              </a>
              <a href="#instagram" className="w-9 h-9 bg-white hover:bg-black hover:text-white transition-colors rounded-full flex items-center justify-center">
                <Instagram size={18} />
              </a>
              <a href="#linkedin" className="w-9 h-9 bg-white hover:bg-black hover:text-white transition-colors rounded-full flex items-center justify-center">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-400 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-700 text-sm">© 2025 Company. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#privacy" className="text-gray-700 hover:text-black transition-colors text-sm">Privacy</a>
            <a href="#terms" className="text-gray-700 hover:text-black transition-colors text-sm">Terms</a>
            <a href="#cookies" className="text-gray-700 hover:text-black transition-colors text-sm">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}