export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 shadow-md">
      <h1 className="text-2xl font-bold text-blue-600">
        Accredian
      </h1>

      <div className="hidden md:flex gap-8 text-gray-700">
        <p className="cursor-pointer hover:text-blue-600">Home</p>
        <p className="cursor-pointer hover:text-blue-600">Features</p>
        <p className="cursor-pointer hover:text-blue-600">Contact</p>
      </div>

      <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
        Login
      </button>
    </nav>
  );
}