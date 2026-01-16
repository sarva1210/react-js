import React, { useState } from "react";

const CTAForm = () => {
  const [form, setForm] = useState({ email: "", select: "", message: "" });
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.email || !form.select || !form.message) {
      setSuccess("❌ Please fill all fields");
      return;
    }
    setSuccess("✅ Submitted successfully!");
    setForm({ email: "", select: "", message: "" });
  };

  return (
    <section className="w-full py-16">
      <div className="containerx">
        <div className="relative overflow-hidden rounded-3xl bg-[#607188] text-white p-8 md:p-12 shadowPro">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left */}
            <div>
              <h2 className="text-3xl font-extrabold leading-tight">
                Monitor the <br /> Workplace From <br /> your Phone
              </h2>
              <p className="mt-4 text-white/80 text-sm max-w-md">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
                nobis.
              </p>

              <button className="mt-6 btnPrimary">Learn More</button>
            </div>

            {/* Right Form */}
            <form
              onSubmit={handleSubmit}
              className="bg-white text-slate-900 rounded-2xl p-6 shadowPro max-w-md w-full"
            >
              <h3 className="font-bold text-[#0b2f44]">Latest Innovation</h3>

              <input
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="mt-4 w-full border border-slate-200 rounded-xl px-4 py-2 outline-none focus:ring-2 focus:ring-[#607188]"
                placeholder="Email"
              />

              <select
                value={form.select}
                onChange={(e) => setForm({ ...form, select: e.target.value })}
                className="mt-3 w-full border border-slate-200 rounded-xl px-4 py-2 outline-none focus:ring-2 focus:ring-[#607188]"
              >
                <option value="">Select</option>
                <option value="Home Security">Home Security</option>
                <option value="Office Security">Office Security</option>
                <option value="CCTV System">CCTV System</option>
              </select>

              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="mt-3 w-full border border-slate-200 rounded-xl px-4 py-2 outline-none focus:ring-2 focus:ring-[#607188]"
                placeholder="Message"
                rows="3"
              />

              <button className="mt-4 w-full btnPrimary rounded-xl">
                Submit Now
              </button>

              {success && (
                <p className="mt-3 text-xs text-slate-600 font-medium">
                  {success}
                </p>
              )}
            </form>
          </div>

          {/* Camera Image */}
          <img
            className="hidden lg:block absolute left-1/2 -translate-x-1/2 bottom-0 w-[250px] opacity-95"
            src="https://pngimg.com/uploads/security_camera/security_camera_PNG99.png"
            alt="camera"
          />
        </div>
      </div>
    </section>
  );
};

export default CTAForm;
