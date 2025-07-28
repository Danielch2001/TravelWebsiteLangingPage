import { MdSearch, MdCalendarToday, MdPerson } from "react-icons/md";
import ParallaxSection from "../components/ParallaxSection";
import HeroTitle from "../components/HeroTitle";
import DestinationsCarousel from "../components/DestinationsCarousel";


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

    const offers = [
        { title: "Huge savings on flight with trxvl.", subtitle: "Domestic Flights", desc: "Book domestic flights starting @ just ₹1459", img: "/offer-flights.jpg" },
        { title: "Enjoy upto 20% off on International Hotels", subtitle: "International Hotels", desc: "Make the most of  this deal on your first booking with trxvl.", img: "/offer-hotels.jpg" },
    ];

    const propertyTypes = [
        { name: "Hotels", img: "/hotels.jpg" },
        { name: "Apartments", img: "/apartments.jpg" },
        { name: "Resorts", img: "/resorts.jpg" },
        { name: "Villas", img: "/villas.jpg" },
    ];

    const communities = [
        { name: "India", subtitle: "Travel community", travelers: "155,073 travelers", img: "/india.jpg" },
        { name: "Travel Talk", subtitle: "Travel community", travelers: "155,073 travelers", img: "/travel-talk.jpg" },
        { name: "Beach", subtitle: "Travel community", travelers: "155,073 travelers", img: "/beach-community.jpg" },
        { name: "Mountains", subtitle: "Travel community", travelers: "155,073 travelers", img: "/mountains-community.jpg" },
    ];

    return (
        <>
            {/* PRIMERA SECCIÓN - Hero con imagen de fondo */}
            <section
                className="relative w-full text-white hidden md:block"
                style={{
                    backgroundImage: "url('/hero-bg.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-white to-transparent"></div>
                <ParallaxSection>
                    <div className="relative z-10 px-10 pt-32 max-w-7xl mx-auto">
                        <HeroTitle className="text-5xl md:text-6xl font-bold max-w-lg mb-8">
                            The whole world <br /> awaits.
                        </HeroTitle>

                        {/* Barra de búsqueda */}
                        <div className="w-full max-w-6xl mx-auto flex items-center backdrop-blur-md bg-white/25 rounded-xl px-6 py-3 shadow-lg space-x-10">
                            <div className="flex items-center flex-1 space-x-3">
                                <MdSearch size={20} className="text-white opacity-70" />
                                <input type="text" placeholder="Search destinations, hotels"
                                    className="flex-1 bg-transparent placeholder-white/70 text-white/80 focus:outline-none" />
                            </div>
                            <div className="flex items-center space-x-3">
                                <MdCalendarToday size={18} className="text-white opacity-70" />
                                <span className="text-white/60">Check in</span>
                            </div>
                            <div className="flex items-center space-x-3 ml-6">
                                <MdCalendarToday size={18} className="text-white opacity-70" />
                                <span className="text-white/60">Check out</span>
                            </div>
                            <div className="flex items-center space-x-3 ml-6">
                                <MdPerson size={18} className="text-white opacity-70" />
                                <span className="text-white/60">1 room, 2 adults</span>
                            </div>
                            <button className="ml-3 bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-200">Search</button>
                        </div>

                        {/* Top Categories */}
                        <div className="mt-16">
                            <h2 className="text-2xl font-bold mb-6">Top categories</h2>
                            <div className="grid grid-cols-5 md:grid-cols-10 gap-8 text-center">
                                {categories.map((cat, i) => (
                                    <div key={i} className="flex flex-col items-center opacity-70 hover:opacity-100 transition">
                                        <img src={cat.icon} alt={cat.name} className="w-12 h-12 mb-1" />
                                        <p className="text-xs">{cat.name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Top Vacation Destinations */}
                        <DestinationsCarousel destinations={destinations} />

                    </div>
                </ParallaxSection>
            </section>


            {/* SEGUNDA SECCIÓN - Contenido adicional */}
            <div className="bg-white text-black px-10 max-w-7xl mx-auto hidden md:block">

                {/* 🔹 OFFERS */}
                <div className="mt-16">
                    <h2 className="text-2xl font-bold mb-6">Offers</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {offers.map((o, i) => (
                            <div key={i} className="bg-white rounded-2xl shadow-lg overflow-hidden flex">
                                {/* Imagen más ancha y con bordes redondeados a la izquierda */}
                                <img src={o.img} alt={o.title} className="w-56 h-full object-cover" />

                                {/* Contenedor de texto */}
                                <div className="p-6 flex flex-col justify-between flex-1">
                                    <div>
                                        <p className="text-sm text-gray-400">{o.subtitle}</p>
                                        <h3 className="font-bold text-lg mt-1">{o.title}</h3>
                                        <p className="text-gray-600 text-sm mt-1">{o.desc}</p>
                                    </div>

                                    {/* Botón alineado abajo */}
                                    <button className="self-start mt-4 bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700">
                                        Book Now
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


                {/* Property Types */}
                <div className="mt-16 pb-10">
                    <h2 className="text-2xl font-bold mb-6">Browse by property type</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {propertyTypes.map((p, i) => (
                            <div key={i} className="relative rounded-lg overflow-hidden shadow-md">
                                <img src={p.img} alt={p.name} className="w-full h-40 object-cover" />
                                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent"></div>
                                <p className="absolute bottom-2 left-2 text-white font-semibold text-lg">{p.name}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Plan Your Trip */}
                <div className="mt-16">
                    <div className="relative rounded-xl overflow-hidden shadow-lg">
                        <img src="/plan-trip.jpg" alt="Plan your trip" className="w-full h-80 object-cover" />

                        {/* Overlay con texto */}
                        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center px-10">
                            <h2
                                className="font-bold text-white"
                                style={{
                                    fontFamily: 'Helvetica, Arial, sans-serif',
                                    fontWeight: 700,
                                    fontSize: '62px',
                                    lineHeight: '100%'
                                }}
                            >
                                Plan your trip with travel <br />expert
                            </h2>
                            <p className="text-white/90 mt-4 text-lg">
                                Our professional advisors can craft your perfect itinerary
                            </p>
                        </div>
                    </div>
                </div>

                {/* Community */}
                <div className="mt-16 pb-10">
                    <h2 className="text-2xl font-bold mb-6">Connect with other travelers in our community</h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {communities.map((c, i) => (
                            <div
                                key={i}
                                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                            >
                                <img src={c.img} alt={c.name} className="w-full h-44 object-cover" />

                                <div className="p-4">
                                    <h3 className="font-medium text-lg">{c.name}</h3>
                                    <p className="text-sm text-gray-500">{c.subtitle}</p>
                                    <p className="text-xs text-gray-400">{c.travelers}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


                {/* 🔹 APP DOWNLOAD SECTION */}
                <section
                    className="relative mt-16 w-full text-white"
                    style={{
                        backgroundImage: "url('/app-bg.png')", // tu fondo de montañas
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    {/* Fondo translúcido extra detrás del teléfono */}
                    <div className="absolute left-0 top-0 bottom-0 w-1/3 bg-black/20 blur-lg"></div>

                    <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between p-10">
                        {/* Contenedor del teléfono con sombra */}
                        <div className="relative">
                            <div className="absolute -left-6 -top-6 w-[90%] h-[110%] bg-black/40 rounded-3xl blur-2xl"></div>
                            <img
                                src="/mobile-app-mockup.png"
                                alt="App mockup"
                                className="relative w-72 rounded-3xl shadow-2xl"
                            />
                        </div>

                        {/* Texto y botones */}
                        <div className="md:ml-12 max-w-lg text-center md:text-left">
                            <h2 className="text-3xl font-bold mb-2">Your all-in-one travel app.</h2>
                            <p className="text-white/90 mb-4">
                                Book flights, hotels, trains & rental cars anywhere in the world in just seconds.
                                Get real-time flight updates, travel info, exclusive deals, and 30% more Trip Coins only on the app!
                            </p>

                            {/* Botones Mobile / Email */}
                            <div className="flex justify-center md:justify-start space-x-3 mb-4">
                                <button className="bg-white/20 px-4 py-2 rounded-full">Mobile</button>
                                <button className="bg-white/20 px-4 py-2 rounded-full">Email</button>
                            </div>

                            {/* Input número */}
                            <div className="flex mb-4 justify-center md:justify-start">
                                <input
                                    type="text"
                                    placeholder="+91 Mobile number"
                                    className="flex-1 px-3 py-2 rounded-l-full text-black max-w-xs"
                                />
                                <button className="bg-white text-blue-600 px-4 py-2 rounded-r-full font-semibold">
                                    Search
                                </button>
                            </div>

                            {/* Botones de las stores */}
                            <div className="flex justify-center md:justify-start space-x-3">
                                <img src="/google-play.png" alt="Google Play" className="h-12" />
                                <img src="/app-store.png" alt="App Store" className="h-12" />
                            </div>
                        </div>
                    </div>
                </section>


            </div>

            {/*VERSIÓN MÓVIL SIMPLIFICADA */}
            <section className="md:hidden bg-white text-black px-5 py-8 space-y-8">

                {/*Hero móvil */}
                <div className="text-center">
                    <h1 className="text-3xl font-bold">The whole world awaits.</h1>
                    <input type="text" placeholder="Search destinations..."
                        className="mt-4 w-full px-3 py-2 border rounded-lg" />
                    <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded-lg">Search</button>
                </div>

                {/* Categorías */}
                <div>
                    <h2 className="text-xl font-semibold mb-2">Categories</h2>
                    <div className="grid grid-cols-5 gap-3 text-xs text-center">
                        {categories.map((c, i) => (
                            <div key={i} className="flex flex-col items-center">
                                <img src={c.icon} alt={c.name} className="w-8 h-8" />
                                <p>{c.name}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Destinos */}
                <div>
                    <h2 className="text-xl font-semibold mb-2">Destinations</h2>
                    <div className="space-y-3">
                        {destinations.map((d, i) => (
                            <div key={i} className="rounded-lg overflow-hidden shadow">
                                <img src={d.img} alt={d.name} className="w-full h-32 object-cover" />
                                <p className="p-2 font-medium">{d.name}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Offers */}
                <div>
                    <h2 className="text-xl font-semibold mb-2">Offers</h2>
                    <div className="space-y-3">
                        {offers.map((o, i) => (
                            <div key={i} className="rounded-xl shadow p-3 bg-white">
                                <img src={o.img} alt={o.title} className="w-full h-28 object-cover rounded-lg" />
                                <h3 className="font-bold mt-2">{o.title}</h3>
                                <p className="text-sm text-gray-500">{o.subtitle}</p>
                                <p className="text-xs text-gray-600">{o.desc}</p>
                                <button className="mt-2 w-full bg-blue-600 text-white py-1 rounded-lg">Book Now</button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Property Types */}
                <div>
                    <h2 className="text-xl font-semibold mb-2">Property Types</h2>
                    <div className="grid grid-cols-2 gap-3">
                        {propertyTypes.map((p, i) => (
                            <div key={i} className="rounded-lg overflow-hidden shadow">
                                <img src={p.img} alt={p.name} className="w-full h-24 object-cover" />
                                <p className="p-2 font-medium">{p.name}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Plan Your Trip */}
                <div className="rounded-lg overflow-hidden shadow relative">
                    <img src="/plan-trip.jpg" className="w-full h-40 object-cover" alt="Plan" />
                    <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center px-4">
                        <h2 className="text-white text-lg font-bold">Plan your trip</h2>
                        <p className="text-white/80 text-sm">Our advisors will craft your perfect itinerary</p>
                    </div>
                </div>

                {/* Community */}
                <div>
                    <h2 className="text-xl font-semibold mb-2">Community</h2>
                    <div className="grid grid-cols-2 gap-3">
                        {communities.map((c, i) => (
                            <div key={i} className="bg-white rounded-xl shadow overflow-hidden">
                                <img src={c.img} alt={c.name} className="w-full h-24 object-cover" />
                                <div className="p-2">
                                    <h3 className="font-medium">{c.name}</h3>
                                    <p className="text-xs text-gray-500">{c.subtitle}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* App Download */}
                <div className="bg-blue-600 text-white rounded-xl p-5 text-center space-y-3">
                    <h2 className="text-xl font-bold">Your travel app</h2>
                    <p className="text-white/80 text-sm">Book flights, hotels & cars in seconds.</p>
                    <div className="flex justify-center space-x-3">
                        <img src="/google-play.png" className="h-10" alt="Google Play" />
                        <img src="/app-store.png" className="h-10" alt="App Store" />
                    </div>
                </div>
            </section>
        </>
    );
}
