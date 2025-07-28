// src/components/Footer.jsx
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 px-6 md:px-16 py-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Logo */}
        <h1 className="text-white text-2xl font-bold mb-6">Trxvl.</h1>

        {/* Sección de Links en Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-6">
          <div className="space-y-2">
            <p className="hover:text-white cursor-pointer">Seslendirme ve Alt Jazz</p>
            <p className="hover:text-white cursor-pointer">Media Market</p>
            <p className="hover:text-white cursor-pointer">Gillie</p>
            <p className="hover:text-white cursor-pointer">Size Last</p>
          </div>
          <div className="space-y-2">
            <p className="hover:text-white cursor-pointer">Self Betimes</p>
            <p className="hover:text-white cursor-pointer">Yatırımcı İlişkileri</p>
            <p className="hover:text-white cursor-pointer">Basal Himmler</p>
          </div>
          <div className="space-y-2">
            <p className="hover:text-white cursor-pointer">Yard Market</p>
            <p className="hover:text-white cursor-pointer">İş İmkanları</p>
            <p className="hover:text-white cursor-pointer">Car Tercihleri</p>
          </div>
          <div className="space-y-2">
            <p className="hover:text-white cursor-pointer">Hedge Karla</p>
          </div>
        </div>

        {/* Botón */}
        <button className="border border-gray-500 px-4 py-1 mb-6 text-gray-400 hover:text-white hover:border-white transition">
          Helmet KOD
        </button>

        {/* Redes sociales */}
        <div className="flex space-x-4 mb-6">
          <FaFacebookF className="text-gray-400 hover:text-white cursor-pointer" />
          <FaInstagram className="text-gray-400 hover:text-white cursor-pointer" />
          <FaTwitter className="text-gray-400 hover:text-white cursor-pointer" />
          <FaYoutube className="text-gray-400 hover:text-white cursor-pointer" />
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-500">© 2025 Trxvl. All rights reserved.</p>
      </div>
    </footer>
  );
}
