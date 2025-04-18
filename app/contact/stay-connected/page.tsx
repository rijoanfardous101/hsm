"use client";
const StayConnectePage = () => {
  return (
    <>
      <div className="relative w-full h-[80px] border-t-2 border-[#FFCE00] ">
        <div className="absolute inset-0 bg-gradient-to-b from-[#2D8CBB]/90 to-[#2D8CBB]/30 flex items-center px-16">
          <div className="max-w-screen-xl mx-auto flex justify-center items-center w-full px-8 flex-wrap gap-6">
            <h1 className="text-4xl font-bold text-gray-800">Stay Connected</h1>
            <p className="text-2xl max-w-3xl text-gray-800 font-semibold my-8 text-justify w-full md:w-auto"></p>
          </div>
        </div>
      </div>
      <div className="border-t-2 pt-10 pb-24 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold">Hello 👋</h2>
        <p className="mt-4 text-lg">
          Thank you for your interest. Whether you have a question, are eager to
          collaborate, or simply want to connect, I&apos;m always happy to hear
          from you. Even, any kind of feedback is also highly appreciated. Feel
          free to leave a message, and I&apos;ll get back to you as soon as
          possible.
        </p>
        <p className="text-blue-500 font-bold mt-4 text-xl">
          Your feedback helps us better!
        </p>
        <ContactForm />
      </div>
    </>
  );
};

export default StayConnectePage;

import React, { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add API or validation logic here
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-md mt-10">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-gray-700">
            Your Name:
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-700">
            Your Email:
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-gray-700">
            Your Message:
          </label>
          <textarea
            name="message"
            id="message"
            rows={4}
            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-[#2D8CBB] text-white p-2 rounded-md hover:bg-blue-600 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
