import React, { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!email) return setMsg("❌ Enter your email");
    setMsg("✅ Subscribed successfully!");
    setEmail("");
  };

  return (
    <section className="w-full py-16">
      <div className="containerx">
        <div className="bg-[#0b2f44] rounded-3xl p-8 md:p-10 shadowPro flex flex-col md:flex-row items-center justify-between gap-6">
          <h2 className="text-2xl font-extrabold text-white">Our Newsletters</h2>

          <form onSubmit={submit} className="w-full md:w-auto flex flex-col sm:flex-row gap-3">
            <input value={email} onChange={(e) => setEmail(e.target.value)} className="w-full text-white sm:w-100 px-4 py-3 rounded-2xl outline" placeholder="Enter your email"/>
            <button className="px-6 py-3 rounded-2xl bg-white text-[#0b2f44] font-bold hover:bg-slate-200 transition active:scale-95">Submit</button>
          </form>
        </div>

        {msg && <p className="mt-3 text-center text-sm text-slate-500">{msg}</p>}
      </div>
    </section>
  )
}

export default Newsletter;
