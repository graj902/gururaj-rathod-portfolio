import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Left Side: Name/Logo */}
        <div className="text-2xl font-bold text-gray-800">
          {/* Refinement: Apply classes directly to Link */}
          <Link href="/" className="hover:text-blue-600 transition-colors">
            Gururaj Rathod
          </Link>
        </div>

        {/* Right Side: Navigation Links */}
        <nav>
          <ul className="flex space-x-6 text-lg">
            <li>
              {/* Refinement: Apply classes directly to Link */}
              <Link href="#about" className="hover:text-blue-600 transition-colors">About</Link>
            </li>
            <li>
              <Link href="#experience" className="hover:text-blue-600 transition-colors">Experience</Link>
            </li>
            <li>
              <Link href="#projects" className="hover:text-blue-600 transition-colors">Projects</Link>
            </li>
            <li>
              <Link href="#contact" className="hover:text-blue-600 transition-colors">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}