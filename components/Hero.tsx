"use client";
import { useEffect, useState } from "react";

export default function Hero() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <section className="text-center py-24 px-6 bg-gradient-to-r from-blue-50 to-blue-100">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">
        Transform Your Workforce with <span className="text-blue-600">Accredian</span>
      </h1>

      <p className="text-gray-600 mb-6">
        Upskill your employees with industry-relevant programs.
      </p>

      <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg shadow-lg">
        Get Started
      </button>

      {/* API Data */}
      {data && (
        <p className="mt-6 text-sm text-gray-500">
          API Data Loaded: {data.title}
        </p>
      )}
    </section>
  );
}