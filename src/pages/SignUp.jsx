import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { useState, useRef } from "react";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const mailRef = useRef(null);

  const handleRegister = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent("Gracias por suscribirte");
    const body = encodeURIComponent(
      `Hola ${name}, gracias por unirte a trxvl!\n\nTe hemos registrado con el correo: ${email}`
    );

    // Generar el mailto dinámico
    const mailtoLink = `mailto:daniel.chicaiza2001@gmail.com?subject=${subject}&body=${body}`;

    // Usar el enlace oculto para disparar el cliente de correo
    mailRef.current.href = mailtoLink;
    mailRef.current.click();
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/hero-bg.png')" }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <form
        onSubmit={handleRegister}
        className="relative z-10 bg-white p-8 rounded-2xl shadow-2xl w-96"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Create Your Account</h2>
        <p className="text-center text-gray-500 mb-4">
          Join us and start your journey today!
        </p>

        <div className="flex items-center border rounded-lg mb-4 px-3 py-2">
          <FaUser className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full focus:outline-none"
          />
        </div>

        <div className="flex items-center border rounded-lg mb-4 px-3 py-2">
          <FaEnvelope className="text-gray-400 mr-2" />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full focus:outline-none"
          />
        </div>

        <div className="flex items-center border rounded-lg mb-6 px-3 py-2">
          <FaLock className="text-gray-400 mr-2" />
          <input
            type="password"
            placeholder="Password"
            required
            className="w-full focus:outline-none"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Register
        </button>

        <p className="text-center text-gray-600 mt-4 text-sm">
          Already have an account?{" "}
          <a href="/login" className="text-blue-600 font-medium hover:underline">
            Login here
          </a>
        </p>

        {/* 🔹 Enlace oculto para disparar mailto */}
        <a ref={mailRef} style={{ display: "none" }}>send mail</a>
      </form>
    </div>
  );
}
