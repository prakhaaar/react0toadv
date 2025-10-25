import React, { useState } from "react";

const Contacts = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    console.log("Name:", name);
    console.log("Email:", email);

    setName("");
    setEmail("");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-100 p-4">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg border border-gray-200">
        <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-4">
          Contact Us
        </h2>
        <p className="text-green-600 text-center mb-6 font-semibold">
          Drop your details and we'll connect!
        </p>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-sky-400"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-sky-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className="bg-sky-600 text-white font-bold py-3 rounded-lg hover:bg-sky-700 transition-colors"
          >
            Send Message
          </button>
       </form>
      </div>
    </div>
  );
};

export default Contacts;
