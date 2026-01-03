import React from "react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState("");

  const [notification, setNotification] = useState({
    show: false,
    message: " ",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    if (error) {
      setError("");
    }
  };

  const showToast = (message) => {
    setNotification({ show: true, message });
    setTimeout(() => {
      setNotification({ show: false, message: "" });
    }, 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      setError("Name is required!");
      return;
    }
    if (!formData.email.trim()) {
      setError("Email is required!");
      return;
    }
    const requiredSuffix = "@gmail.com";
    if (!formData.email.endsWith(requiredSuffix)) {
      const errorMessage = `Enter The currect email ${requiredSuffix}`;
      setError(errorMessage);
      console.error(errorMessage);
      return;
    }
    setError("");
    showToast("✓ Mssage sent succesfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="flex justify-center items-center">
      {notification.show && (<div
        className={` fixed top-5 left-1/2 -translate-x-1/2 z-50 bg-green-500 p-2 rounded-md text-white`}
      >
        <span className={`font-semibold`}>{notification.message}</span>
      </div>)}
      
      <section className="min-h-screen flex flex-col items-center justify-center px-4">
        <h2 className="text-3xl font-semibold mb-2">Let's Connect</h2>
        <p className="text-center text-gray-500 max-w-md mb-8">
          Have a project in mind or just want to say hi? Feel free to send me a
          message. I'm always open to discuss new ideas and opportunities.
        </p>
        <form
          className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl space-y-5"
          onSubmit={handleSubmit}
        >
          <div>
            <label className="block text-sm mb-1 text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm mb-1 text-gray-700">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={handleChange}
              id="email"
              name="email"
              placeholder="abcd@gmail.com"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm mb-1 text-gray-700">Message</label>
            <textarea
              rows="4"
              placeholder="Message"
              id="Message"
              name="Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md resize-none focus:ring-2 focus:ring-purple-500 outline-none"
            ></textarea>
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <button className="w-full bg-purple-500 text-white py-2 rounded-md hover:bg-purple-600 transition">
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default Contact;

