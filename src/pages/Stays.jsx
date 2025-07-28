// src/pages/Stays.jsx
export default function Stays() {
  const stays = [
    { name: "Luxury Beach Resort", location: "Bali, Indonesia", price: "$120/night", rating: 4.8, img: "/bali.jpg" },
    { name: "Cozy Mountain Cabin", location: "Swiss Alps", price: "$95/night", rating: 4.6, img: "/mountains-community.jpg" },
    { name: "City Apartment", location: "New York, USA", price: "$150/night", rating: 4.7, img: "/apartments.jpg" },
    { name: "Countryside Villa", location: "Tuscany, Italy", price: "$200/night", rating: 4.9, img: "/resorts.jpg" },
  ];

  const stayCategories = [
    { icon: "/icon-hotels.svg", name: "Hotels" },
    { icon: "/icon-apartments.svg", name: "Apartments" },
    { icon: "/icon-villas.svg", name: "Villas" },
    { icon: "/icon-resorts.svg", name: "Resorts" },
    { icon: "/icon-cabins.svg", name: "Cabins" },
  ];

  return (
    <>
      {/* DESKTOP VERSION */}
      <section className="hidden md:block px-10 pt-28 max-w-7xl mx-auto text-black">
        {/* HERO */}
        <div className="relative h-72 rounded-xl overflow-hidden shadow-lg mb-10">
          <img src="/app-bg.jpg" alt="Stays" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center px-8">
            <h1 className="text-4xl font-bold text-white">Find Your Perfect Stay</h1>
            <p className="text-white/80">Hotels, apartments, villas & more</p>
          </div>
        </div>

        {/* CATEGORÍAS */}
        <h2 className="text-2xl font-bold mb-6">Browse by type</h2>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-6 mb-10">
          {stayCategories.map((cat, i) => (
            <div key={i} className="flex flex-col items-center p-3 rounded-lg shadow hover:scale-105 transition">
              <img src={cat.icon} alt={cat.name} className="w-14 h-14 mb-2" />
              <p>{cat.name}</p>
            </div>
          ))}
        </div>

        {/*  ALOJAMIENTOS DESTACADOS */}
        <h2 className="text-2xl font-bold mb-6">Top Rated Stays</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {stays.map((s, i) => (
            <div key={i} className="rounded-lg shadow-lg overflow-hidden">
              <img src={s.img} alt={s.name} className="w-full h-48 object-cover" />
              <div className="p-3">
                <h3 className="font-semibold">{s.name}</h3>
                <p className="text-sm text-gray-500">{s.location}</p>
                <p className="text-blue-600 font-bold">{s.price}</p>
                <p className="text-yellow-500 text-sm">⭐ {s.rating}</p>
              </div>
            </div>
          ))}
        </div>

        {/*  CTA BANNER */}
        <div className="mt-16 relative rounded-xl overflow-hidden shadow-lg">
          <img src="/app-bg.jpg" alt="Plan your stay" className="w-full h-64 object-cover" />
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-6">
            <h2 className="text-3xl font-bold text-white">Plan your perfect stay with trxvl</h2>
            <p className="text-white/80 mt-2">Get exclusive deals and the best prices</p>
          </div>
        </div>
      </section>

      {/* MOBILE VERSION */}
      <section className="md:hidden bg-white text-black px-5 py-8 space-y-8">
        {/* 🔹 HERO */}
        <div className="rounded-xl overflow-hidden relative">
          <img src="/stays-hero.jpg" alt="Stays" className="w-full h-48 object-cover" />
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-4">
            <h1 className="text-2xl font-bold text-white">Find Your Perfect Stay</h1>
            <p className="text-white/80 text-sm">Hotels, apartments & more</p>
          </div>
        </div>

        {/* CATEGORÍAS */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Browse by Type</h2>
          <div className="grid grid-cols-3 gap-3 text-center">
            {stayCategories.map((c, i) => (
              <div key={i} className="flex flex-col items-center p-2 shadow rounded-lg">
                <img src={c.icon} className="w-10 h-10" alt={c.name} />
                <p className="text-xs">{c.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* DESTACADOS */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Top Stays</h2>
          <div className="space-y-3">
            {stays.map((s, i) => (
              <div key={i} className="rounded-lg shadow overflow-hidden">
                <img src={s.img} alt={s.name} className="w-full h-32 object-cover" />
                <div className="p-2">
                  <h3 className="font-medium">{s.name}</h3>
                  <p className="text-xs text-gray-500">{s.location}</p>
                  <p className="text-blue-600 font-semibold text-sm">{s.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA SIMPLE */}
        <div className="rounded-xl overflow-hidden relative shadow">
          <img src="/plan-stay.jpg" alt="Plan Stay" className="w-full h-40 object-cover" />
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-4">
            <h2 className="text-lg font-bold text-white">Plan Your Stay</h2>
            <p className="text-white/80 text-xs">Exclusive deals & the best prices</p>
          </div>
        </div>
      </section>
    </>
  );
}
