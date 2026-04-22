export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        <h2 className="text-xl font-semibold mb-2">
          Accredian
        </h2>

        <p className="text-gray-400 mb-4">
          Empowering careers through quality education
        </p>

        <div className="flex justify-center gap-6 text-sm mb-4">
          <p className="hover:text-blue-400 cursor-pointer">Home</p>
          <p className="hover:text-blue-400 cursor-pointer">Features</p>
          <p className="hover:text-blue-400 cursor-pointer">Contact</p>
        </div>

        <p className="text-gray-500 text-sm">
          © 2026 Accredian. All rights reserved.
        </p>

      </div>
    </footer>
  );
}