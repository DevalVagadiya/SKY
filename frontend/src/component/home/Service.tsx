import header3 from "../../assets/header3.png";
import header14 from "../../assets/header14.png";
import header5 from "../../assets/header5.png";
import header6 from "../../assets/header6.png";

const services = [
    {
        id: 1,
        icon: "🧪",
        title: "Scientific Vision Hub",
        desc: "Scientific Vision Hub drives innovation and collaboration to advance research and solve global challenges.",
        image: header3,
    },
    {
        id: 2,
        icon: "🧬",
        title: "Pathological Testing",
        desc: "Pathological testing at Trusted Experts provides accurate diagnostics for better treatment and care.",
        image: header14,
    },
    {
        id: 3,
        icon: "🏭",
        title: "Chemical Research",
        desc: "Chemical research at Trusted Experts drives innovation to enhance industries and promote sustainability.",
        image: header5,
    },
    {
        id: 4,
        icon: "⚗️",
        title: "Quantum Analysis Labs",
        desc: "Quantum Analysis Labs at Trusted Experts leverage advanced technology for precise insights and innovation.",
        image: header6,
    },
];

const Service = () => {
    return (
        <div className="relative py-20 px-6 bg-gradient-to-br from-blue-100 via-white to-indigo-100">
            <div className="max-w-7xl mx-auto text-center">
                <p className="text-blue-600 font-semibold mb-2 tracking-widest">
                    WHY CHOOSE US
                </p>

                <h2 className="text-3xl md:text-4xl font-bold mb-14">
                    Expert Laboratory Services <br /> for Advanced Research
                </h2>

                {/* Cards */}
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="group relative rounded-3xl bg-white/60 backdrop-blur-lg border border-white/40 shadow-lg hover:shadow-2xl transition duration-500 overflow-hidden"
                        >
                            {/* Image */}
                            <div className="relative h-52 overflow-hidden  bg-white">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover object-center 
               transition-transform duration-500 group-hover:scale-105"
                                />

                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end p-6">
                                    <button className="text-white text-sm font-semibold border-b border-white">
                                        Learn More →
                                    </button>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 text-left">
                                {/* Icon Badge */}
                                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-xl mb-4 shadow-md">
                                    {service.icon}
                                </div>

                                <h3 className="text-lg font-semibold mb-2">
                                    {service.title}
                                </h3>

                                <p className="text-sm text-gray-600 leading-relaxed">
                                    {service.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Service;