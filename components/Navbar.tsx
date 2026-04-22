"use client";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 shadow-md sticky top-0 bg-white z-50">
      
      {/* Logo */}
      <h1 className="text-2xl font-bold text-blue-600 cursor-pointer">
        Accredian
      </h1>

      {/* Menu */}
      <div className="hidden md:flex gap-8 text-gray-700 font-medium">
        <a href="#home" className="hover:text-blue-600 transition">Home</a>
        <a href="#features" className="hover:text-blue-600 transition">Features</a>
        <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
      </div>

      {/* Button */}
      <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition shadow-md"onClick={() => window.location.href = "#contact"}>
        Login
      </button>

    </nav>
  );
}