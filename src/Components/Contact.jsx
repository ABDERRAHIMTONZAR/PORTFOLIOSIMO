import React, { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      alert("📧 Email envoyé avec succès !");
    }, 2000);
  };

  return (
    <section
      id="contact"
      className="py-20 px-6 md:px-20 bg-gradient-to-r from-blue-50 to-blue-100"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 mb-12">
          Me <span className="text-blue-600">Contacter</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 bg-white p-10 rounded-2xl shadow-xl">
          
          {/* Infos */}
          <div className="space-y-6">
            <p className="text-lg text-gray-600">
              Une question, un projet ou une opportunité ?  
              N’hésitez pas à me contacter.
            </p>

            <div className="flex items-center gap-4 text-gray-700">
              <FaEnvelope className="text-blue-600" />
              <span>mohammed.tonzar@email.com</span>
            </div>

            <div className="flex items-center gap-4 text-gray-700">
              <FaPhoneAlt className="text-blue-600" />
              <span>+33 6 00 00 00 00</span>
            </div>

            <div className="flex items-center gap-4 text-gray-700">
              <FaMapMarkerAlt className="text-blue-600" />
              <span>Nice, France</span>
            </div>
          </div>

          {/* Formulaire */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Votre nom"
              required
              disabled={loading}
              className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="email"
              placeholder="Votre email"
              required
              disabled={loading}
              className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <textarea
              rows="5"
              placeholder="Votre message"
              required
              disabled={loading}
              className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              className={`w-full flex items-center justify-center gap-3 py-4 rounded-lg font-bold transition
                ${loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700 text-white"
                }`}
            >
              <FaPaperPlane />
              {loading ? "Envoi en cours..." : "Envoyer le message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
