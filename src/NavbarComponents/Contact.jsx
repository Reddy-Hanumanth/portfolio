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
    setNotification({ show: false, message });
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
    const requiredSuffix = "@gmail.com" ;
    if (!formData.email.endsWith(requiredSuffix)  ) {
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
      <div className={`fixed top-5 left-1/2 transform -translate-x-1/2 bg-green-500 text-white  py-4 rounded-lg shadow-2xl z-50 flex items-center space-x-2 animate-bounce`} >
        <span className={`font-semibold`}>{notification.message}</span>
      </div>
      <div className="font-extralight flex flex-col justify-center items-center text-black space-y-10 pt-40 max-w-[700px]">
        <div className="flex flex-col justify-center items-center space-y-6 ">
          <div className="">
            <p className="text-3xl ">Let's Connect</p>
          </div>
          <div>
            <p className="text-center ">
              Have a project in mind or just want to say hi? Feel free to send
              me a message. I'm always open to discuss new ideas and
              opportunities.
            </p>
          </div>
        </div>
        <div className="py-10 flex justify-center items-start ">
          <form action="" className="flex flex-col" onSubmit={handleSubmit}>
            <label htmlFor="" className="flex max-[600px]:justify-center ">
              name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="enter your name"
              className="w-[700px] h-[50px] rounded border-2 border-gray-300 focus:outline-none text-black px-3 mb-8 my-2"
            />

            <label htmlFor="" className="flex max-[600px]:justify-center ">
              email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="abcd@gmail.com"
              className="w-[700px] h-[50px] rounded border-2 border-gray-300 focus:outline-none text-black px-3 mb-8 my-2"
            />

            <label htmlFor="" className="flex max-[600px]:justify-center ">
              message
            </label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="message"
              className="w-[700px] h-[50px] rounded border-2 border-gray-300 focus:outline-none text-black p-2 mb-8 my-2"
            ></textarea>

            {error && <p>{error}</p>}

            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="w-[150px] h-10 cursor-pointer overflow-hidden rounded-lg  px-3 bg-purple-500  hover:bg-opacity-90 my-4 text-white"
              >
                send message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
