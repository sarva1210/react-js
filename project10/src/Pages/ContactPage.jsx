import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const ContactPage = () => {
  const [data, setData] = useState({ name: "", email: "", message: "" });
  const [msg, setMsg] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!data.name || !data.email || !data.message) {
      setMsg("❌ Please fill all fields");
      return;
    }
    setMsg("✅ Message sent successfully!");
    setData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <Navbar />
      <div className="containerx py-16">
        <h1 className="text-4xl font-extrabold text-[#0b2f44]">Contact Us</h1>
        <p className="mt-4 text-slate-500 max-w-2xl text-sm">
          Send us a message and we’ll contact you soon.
        </p>

        <form
          onSubmit={submit}
          className="mt-10 max-w-xl bg-white border border-slate-200 shadowPro rounded-2xl p-6"
        >
          <input
            className="w-full border border-slate-200 rounded-xl px-4 py-2 outline-none focus:ring-2 focus:ring-[#607188]"
            placeholder="Name"
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />

          <input
            className="w-full mt-3 border border-slate-200 rounded-xl px-4 py-2 outline-none focus:ring-2 focus:ring-[#607188]"
            placeholder="Email"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />

          <textarea
            className="w-full mt-3 border border-slate-200 rounded-xl px-4 py-2 outline-none focus:ring-2 focus:ring-[#607188]"
            placeholder="Message"
            rows="4"
            value={data.message}
            onChange={(e) => setData({ ...data, message: e.target.value })}
          />

          <button className="mt-4 w-full btnPrimary rounded-xl">
            Send Message
          </button>

          {msg && <p className="mt-3 text-sm text-slate-500">{msg}</p>}
        </form>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
