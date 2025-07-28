import { useEffect, useState } from "react";

export default function ParallaxSection({ children }) {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative w-full text-white hidden md:block h-screen overflow-hidden">
      {/* Imagen Parallax */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/hero-bg.png')",
          transform: `translateY(${offsetY * 0.3}px)`,
          transition: "transform 0.1s linear",
        }}
      ></div>

      {/* Overlay y gradiente */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-white to-transparent"></div>

      {/* Contenido original */}
      <div className="relative z-10">{children}</div>
    </section>
  );
}
