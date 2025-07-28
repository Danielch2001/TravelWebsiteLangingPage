// src/components/Footer.jsx
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  const socialLink = "https://multiapoyo.com.ec";

  return (
    <footer className="bg-black text-gray-400 px-6 md:px-16 py-12">
      <div className="max-w-6xl mx-auto">
        
        {/* Logo */}
        <h1 className="text-white text-3xl font-bold mb-8">Trxvl.</h1>

        {/* Links en grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-8 text-sm">
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
            <p className="hover:text-white cursor-pointer">Mullein Koşulları</p>
            <p className="hover:text-white cursor-pointer">Autumnal Bulgier</p>
          </div>
        </div>

        {/* Botón */}
        <button className="border border-gray-500 px-5 py-1 mb-8 text-gray-400 hover:text-white hover:border-white transition">
          Helmet KOD
        </button>

        {/* Redes sociales alineadas a la derecha */}
        <div className="flex space-x-6 justify-end mb-6 text-xl">
          <a href={socialLink} target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="hover:text-white cursor-pointer" />
          </a>
          <a href={socialLink} target="_blank" rel="noopener noreferrer">
            <FaInstagram className="hover:text-white cursor-pointer" />
          </a>
          <a href={socialLink} target="_blank" rel="noopener noreferrer">
            <FaTwitter className="hover:text-white cursor-pointer" />
          </a>
          <a href={socialLink} target="_blank" rel="noopener noreferrer">
            <FaYoutube className="hover:text-white cursor-pointer" />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-500">© 2025 Trxvl. All rights reserved.</p>
      </div>
    </footer>
  );
}
