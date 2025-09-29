import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section id="home" className="bg-gray-100 py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        
        {/* Left Side: Text Content */}
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Gururaj Rathod
          </h1>
          <p className="text-2xl text-blue-600 font-semibold mb-6">
            DevOps & Cloud Engineer
          </p>
          <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto md:mx-0">
            Building scalable infrastructure and automating deployments to improve efficiency, reliability, and speed.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <Link 
              href="#projects" 
              className="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
            >
              View My Projects
            </Link>
            <a 
              href="/gururaj-rathod-resume.pdf" // We will add this PDF later
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-700 text-white font-bold py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/profile-photo.jpg" // This path works because the image is in the 'public' folder
            alt="Gururaj Rathod"
            width={350}
            height={350}
            className="rounded-full shadow-2xl object-cover"
          />
        </div>

      </div>
    </section>
  );
}