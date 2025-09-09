import React from "react";

const FormFill = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-gray-800 p-6 rounded-lg max-w-md w-full relative shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white hover:text-red-500 text-xl font-bold"
        >
          &times;
        </button>

        <h3 className="text-2xl font-bold mb-4 text-white">Contact Us</h3>

        <form onSubmit={(e) => e.preventDefault()}>
          <div className="mb-4">
            <label className="block text-sm mb-1 text-gray-300">Name</label>
            <input
              type="text"
              required
              className="w-full border border-gray-600 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm mb-1 text-gray-300">Email</label>
            <input
              type="email"
              required
              className="w-full border border-gray-600 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              placeholder="you@example.com"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm mb-1 text-gray-300">
              Contact Number
            </label>
            <input
              type="number"
              required
              className="w-full border border-gray-600 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              placeholder="10-digit mobile number"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm mb-1 text-gray-300">Message</label>
            <textarea
              required
              rows="4"
              className="w-full border border-gray-600 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              placeholder="How can we help you?"
            />
          </div>
          <button
            onClick={onClose}
            type="submit"
            className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormFill;
