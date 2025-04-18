"use client";
import { CircleArrowLeft } from "lucide-react";
import React, { useState } from "react";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
}

export default function NewsletterForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      `First Name: ${formData.firstName}\nLast Name: ${formData.lastName}\nEmail: ${formData.email}`
    );
  };

  const floatingLabelClass = (value: string) =>
    value ? "text-xs -top-2 left-1 text-white" : "top-2 left-2 text-white";

  return (
    <div className="bg-[#CDEDEC]">
      <div className="bg-destructive p-4 max-w-5xl mx-auto flex justify-center relative z-30 -mb-10">
        <form
          onSubmit={handleSubmit}
          className="flex flex-wrap items-center gap-2"
        >
          <span className="text-white font-semibold mr-6">
            Sign up for our Newsletter
          </span>

          {["firstName", "lastName", "email"].map((field, index) => (
            <div key={index} className="relative">
              <input
                type="text"
                name={field}
                value={formData[field as keyof FormData]}
                onChange={handleChange}
                className="peer w-48 h-12 px-2 pt-4 text-white bg-[#a3353b]/40 focus:outline-none text-sm font-roboto "
              />
              <label
                className={`absolute pointer-events-none transition-all duration-200 ease-in-out font-bold mt-1 top-0.5 opacity-80 ${floatingLabelClass(
                  formData[field as keyof FormData]
                )} peer-focus:text-xs peer-focus:top-0 peer-focus:left-2`}
              >
                {field.replace(/([A-Z])/, " $1").toUpperCase()}
              </label>
            </div>
          ))}

          <button
            type="submit"
            className="flex items-center gap-1 text-white font-semibold  px-3 py-2"
          >
            <span>
              <CircleArrowLeft className="rotate-180" />
            </span>{" "}
            SIGN ME UP
          </button>
        </form>
      </div>
    </div>
  );
}
