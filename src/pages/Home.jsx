import { MdSearch, MdCalendarToday, MdPerson } from "react-icons/md";

export default function Home() {
    const categories = [
        { icon: "/icon-beaches.svg", name: "Beaches" },
        { icon: "/icon-deserts.svg", name: "Deserts" },
        { icon: "/icon-mountains.svg", name: "Mountains" },
        { icon: "/icon-iconic-cities.svg", name: "Iconic Cities" },
        { icon: "/icon-houseboats.svg", name: "Houseboats" },
        { icon: "/icon-countryside.svg", name: "Countryside" },
        { icon: "/icon-camping.svg", name: "Camping" },
        { icon: "/icon-castles.svg", name: "Castles" },
        { icon: "/icon-skiing.svg", name: "Skiing" },
        { icon: "/icon-tropical.svg", name: "Tropical" },
    ];

    const destinations = [
        { name: "Bali, Indonesia", img: "/bali.jpg" },
        { name: "Kerry, Ireland", img: "/kerry.jpg" },
        { name: "Sydney, Australia", img: "/sydney.jpg" },
        { name: "Paris, France", img: "/paris.jpg" },
    ];

    return (
        <section
            className="relative w-full text-white"
            style={{
                backgroundImage: "url('/hero-bg.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Overlay y degradado */}
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-white to-transparent"></div>

            <div className="relative z-10 px-10 pt-32 max-w-7xl mx-auto">
                {/* Título */}
                <h1 className="text-5xl md:text-6xl font-bold max-w-lg mb-8">
                    The whole world <br /> awaits.
                </h1>

                {/* 🔹 Barra de búsqueda */}
                <div className="w-full max-w-6xl mx-auto flex items-center backdrop-blur-md bg-white/25 rounded-xl px-6 py-3 shadow-lg space-x-10">
                    {/* Input búsqueda */}
                    <div className="flex items-center flex-1 space-x-3">
                        <MdSearch size={22} className="text-white opacity-90" />
                        <input
                            type="text"
                            placeholder="Search destinations, hotels"
                            className="flex-1 bg-transparent placeholder-white/80 text-white/80 focus:outline-none"
                        />
                    </div>

                    {/* Check in */}
                    <div className="flex items-center space-x-3">
                        <MdCalendarToday size={20} className="text-white opacity-70" />
                        <span className="text-white/70">Check in</span>
                    </div>

                    {/* Check out */}
                    <div className="flex items-center space-x-3 ml-6">
                        <MdCalendarToday size={20} className="text-white opacity-70" />
                        <span className="text-white/70">Check out</span>
                    </div>

                    {/* Guests */}
                    <div className="flex items-center space-x-3 ml-6">
                        <MdPerson size={22} className="text-white opacity-70" />
                        <span className="text-white/70">1 room, 2 adults</span>
                    </div>

                    {/* Botón Search */}
                    <button className="ml-3 bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-200">
                        Search
                    </button>
                </div>



                {/* Top Categories */}
                <div className="mt-16">
                    <h2 className="text-2xl font-bold mb-6">Top categories</h2>
                    <div className="grid grid-cols-5 md:grid-cols-10 gap-8 text-center">
                        {categories.map((cat, i) => (
                            <div key={i} className="flex flex-col items-center opacity-70 hover:opacity-100 hover:scale-110 transition">
                                <img src={cat.icon} alt={cat.name} className="w-14 h-14 mb-2" />
                                <p className="text-sm">{cat.name}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Top Vacation Destinations */}
                <div className="mt-16 pb-10">
                    <h2 className="text-2xl font-bold mb-6">Top Vacation Destinations</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {destinations.map((d, i) => (
                            <div key={i} className="relative rounded-lg overflow-hidden shadow-lg">
                                <img src={d.img} alt={d.name} className="w-full h-48 object-cover" />
                                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent"></div>
                                <p className="absolute bottom-2 left-2 text-white font-semibold text-lg">{d.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
