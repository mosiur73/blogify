"use client";
import { useState } from "react";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* 🔹 Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/contact.jpg" 
            alt="Contact Flavory"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#2C4A52]/80" />
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex items-center">
          <div className="max-w-3xl">
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight">
              Contact Flavory
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Get in touch for collaborations, food stories, or just say hello!
            </p>
          </div>
        </div>
      </section>

      {/* 🔹 Contact Content */}
      <div className="py-16 px-6">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-3">
            Let&apos;s <span className="text-orange-600">Connect</span>
          </h2>
          <p className="text-gray-600">
            Have a question, feedback, or partnership idea? We&apos;d love to hear from you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="bg-white shadow-lg rounded-2xl p-8 text-left">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Get in Touch</h3>

            <div className="flex items-start gap-4 mb-6">
              <MapPin className="w-6 h-6 text-orange-600 mt-1" />
              <div>
                <p className="font-medium text-gray-700">Our Location</p>
                <p className="text-gray-600">Dhaka, Bangladesh</p>
              </div>
            </div>

            <div className="flex items-start gap-4 mb-6">
              <Mail className="w-6 h-6 text-orange-600 mt-1" />
              <div>
                <p className="font-medium text-gray-700">Email</p>
                <p className="text-gray-600">contact@foodblog.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4 mb-6">
              <Phone className="w-6 h-6 text-orange-600 mt-1" />
              <div>
                <p className="font-medium text-gray-700">Phone</p>
                <p className="text-gray-600">+880 1234-567890</p>
              </div>
            </div>

            <p className="text-gray-600 mt-8">
              Follow us on social media for daily recipes, foodie inspiration, and tasty updates 🍽️
            </p>
          </div>

          {/* Contact Form */}
          <div className="bg-white shadow-lg rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Send a Message</h3>

            {submitted ? (
              <div className="p-6 text-green-700 bg-green-50 rounded-lg">
                ✅ Thank you for your message! We&apos;ll get back to you soon.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-orange-400 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-orange-400 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-orange-400 outline-none resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-600 text-white font-medium py-3 rounded-lg hover:bg-orange-700 transition"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
