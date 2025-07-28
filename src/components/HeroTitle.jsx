import { useEffect, useState } from "react";
import 'animate.css';

export default function HeroTitle() {
  const [animation, setAnimation] = useState("animate__fadeInUp");

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimation((prev) =>
        prev === "animate__fadeInUp" ? "animate__fadeOutDown" : "animate__fadeInUp"
      );
    }, 4000); // cada 4 segundos alterna animación

    return () => clearInterval(interval);
  }, []);

  return (
    <h1
      className={`text-5xl md:text-6xl font-bold max-w-lg mb-8 animate__animated ${animation}`}
    >
      The whole world <br /> awaits.
    </h1>
  );
}
