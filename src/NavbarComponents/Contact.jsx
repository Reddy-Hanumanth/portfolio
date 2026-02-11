import React from "react";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState("");


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const handleSubmit = async (e) => {
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
      return;
    }
    setError("");
    setFormData({ name: "", email: "", message: "" });




const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("message", formData.message);
    data.append("access_key", "c68b3aa7-b187-4a98-a10e-ac96c7cc6adb");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });

      const result = await response.json();

      if (result.success) {
        toast.success("✓ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error(result.message || "Submission failed.");
      }
    } catch (err) {
      toast.error(err.message || "Something went wrong!");
    }
  };

  return (
    <div className=" flex justify-center items-center mb-20 mt-[100px] rounded-2xl">


       <Toaster position="top-center" />


      <section className="w-full h-[700px] rounded-xl max-w-7xl flex flex-col items-center justify-center px-4 bg-[#f6f8f6]  shadow-lg hover:shadow-xl">
        <h2 className="text-3xl font-semibold mb-2">Let's Connect</h2>
        <p className="text-center max-w-md mb-8  text-lg  leading-relaxed text-gray-800/50">
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
              placeholder="your@email.com"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm mb-1 text-gray-700">Message</label>
            <textarea
              rows="4"
              placeholder="Message"
              id="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md resize-none focus:ring-2 focus:ring-purple-500 outline-none"
            ></textarea>
          </div>


          {error && <p className="text-red-500">{error}</p>}


          <button type="submit" className="w-full bg-purple-500 text-white py-2 rounded-md hover:bg-purple-600 transition">
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default Contact;






