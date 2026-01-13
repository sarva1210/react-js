import React from "react";

export default function ContactPage() {
  return (
    <section className="max-w-[1280px] mx-auto px-6 md:px-16 py-20">
      <h1 className="text-4xl font-medium mb-6">Contact Us</h1>

      <div className="bg-white rounded-[28px] p-10 shadow-sm max-w-xl">
        <p className="text-gray-600 mb-6"> Let’s build something magical together ✨</p>

        <div className="flex flex-col gap-4">
          <input className="border p-3 rounded-xl" placeholder="Your Name" />
          <input className="border p-3 rounded-xl" placeholder="Your Email" />
          <textarea className="border p-3 rounded-xl" placeholder="Message" rows="4"></textarea>

          <button className="bg-purple-600 text-white py-3 rounded-xl hover:scale-[1.02] transition"> Send Message</button>
        </div>
      </div>
    </section>
  )
}
