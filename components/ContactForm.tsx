"use client";
import { useState } from "react";

export default function ContactForm() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert("Form Submitted: " + email);
    setEmail("");
  };

  return (
    <section className="py-16 text-center bg-gray-100">
      <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>

      <form onSubmit={handleSubmit} className="flex justify-center gap-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="p-3 border rounded-lg"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button className="bg-blue-600 text-white px-6 rounded-lg">
          Submit
        </button>
      </form>
    </section>
  );
}