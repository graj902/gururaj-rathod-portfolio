export default function Contact() {
    return (
      <footer id="contact" className="bg-gray-800 text-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
          <p className="text-lg text-gray-300 mb-4">
            Feel free to reach out via email or connect with me on social media.
          </p>
          
          {/* Email Address */}
          <div className="mb-8">
            <a href="mailto:gururajrathod90@gmail.com" className="text-xl text-blue-400 hover:underline">
              gururajrathod90@gmail.com
            </a>
          </div>
  
          {/* START: Added Phone Number Block */}
          <div className="mb-8">
            <a href="tel:+918660767009" className="text-xl text-blue-400 hover:underline">
              +91 8660767009
            </a>
          </div>
          {/* END: Added Phone Number Block */}
  
          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8">
            <a href="https://www.linkedin.com/in/gururaj-rathod-/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
              LinkedIn
            </a>
            <a href="https://github.com/graj902" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
              GitHub
            </a>
          </div>
          
          {/* Copyright */}
          <div className="border-t border-gray-700 pt-6">
            <p>&copy; {new Date().getFullYear()} Gururaj Rathod. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    );
  }