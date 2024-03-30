import React, { useState } from "react";
import Section from "./Section";
import Slider from "./Slider"; // Import your slider component
import Heading from "./Heading";
import './slider.css'

const Feedback = () => {
  const [feedback, setFeedback] = useState([]);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [email, setEmail] = useState("");
  const presetFeedback = [
    { name: "John Doe", email: "john@example.com", comment: "Great product!" },
    { name: "Jane Smith", email: "jane@example.com", comment: "Excellent service!" }
  ];


  const handleSubmit = (e) => {
    e.preventDefault();
    const newFeedback = {
      name: name,
      email: email, // Include email in the new feedback object
      comment: comment,
    };
    setFeedback([...feedback, newFeedback]);
    setName("");
    setComment("");
    setEmail("");
  };

  return (
    <Section crosses id='feedback' className="px-20">
      <div className="w-full h-full ">
      <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Feedback"
        />
        <div className="slider flex ">
          <Slider presetFeedback={presetFeedback} feedback={feedback} />
          <form
            onSubmit={handleSubmit}
            className=" w-[50rem] h-[100%] flex flex-col items-center justify-center bg-color-1 rounded-md"
          >
            <label>
              <input
                className="p-2 m-7"
                placeholder="Full Name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label>
              <input
                className="p-2 m-7"
                placeholder="Email Address"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label>
              <textarea
                className="p-2 m-7"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
            </label>
            <button
              className=" w-[50%] m-4 capitalize p-2 font-mono bg-transparent border rounded-xl hover:bg-white/60 hover:text-black text-slate-300"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default Feedback;
