import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function DestinationsCarousel({ destinations }) {
    return (
        <div className="mt-16 pb-10">
            <h2 className="text-2xl font-bold mb-6">Top Vacation Destinations</h2>

            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 4 },
                }}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
            >
                {destinations.map((d, i) => (
                    <SwiperSlide key={i}>
                        <div className="relative rounded-lg overflow-hidden shadow-lg">
                            <img src={d.img} alt={d.name} className="w-full h-48 object-cover" />
                            {/* Overlay oscuro para resaltar texto */}
                            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent"></div>
                            {/* Texto encima */}
                            <p className="absolute bottom-3 left-3 text-white font-bold text-lg z-20">
                                {d.name}
                            </p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
