

const services = [
    {
        id: 1,
        icon: "🧪",
        title: "Scientific Vision Hub",
        desc: "Scientific Vision Hub drives innovation and collaboration to advance research and solve global challenges.",
        image:
            "https://img.freepik.com/free-photo/scientists-working-laboratory_23-2149235014.jpg?w=740",
    },
    {
        id: 2,
        icon: "🧬",
        title: "Pathological Testing",
        desc: "Pathological testing at Trusted Experts provides accurate diagnostics for better treatment and care.",
        image:
            "https://img.freepik.com/free-photo/scientists-working-laboratory_23-2149235014.jpg?w=740",
    },
    {
        id: 3,
        icon: "🏭",
        title: "Chemical Research",
        desc: "Chemical research at Trusted Experts drives innovation to enhance industries and promote sustainability.",
        image:
            "https://img.freepik.com/free-photo/scientists-working-laboratory_23-2149235014.jpg?w=740",
    },
    {
        id: 4,
        icon: "⚗️",
        title: "Quantum Analysis Labs",
        desc: "Quantum Analysis Labs at Trusted Experts leverage advanced technology for precise insights and innovation.",
        image:
           "https://img.freepik.com/free-photo/scientists-working-laboratory_23-2149235014.jpg?w=740",
    },
];


const Service = () => {
    return (
        <>

            <div className="relative bg-blue-50 py-16 px-6 md:px-12">
                {/* Background effect */}
                <div
                    className="absolute inset-0 bg-no-repeat bg-cover opacity-20"
                    style={{
                        backgroundImage: "url('/images/hexagon-bg.png')", // replace with your hexagon background
                    }}
                ></div>

                <div className="relative max-w-7xl mx-auto text-center">
                    <p className="text-blue-600 font-semibold">WHY CHOOSE US?</p>
                    <h2 className="text-2xl md:text-3xl font-bold mb-10">
                        Expert Laboratory Services <br /> for Advanced Research
                    </h2>

                    <div className="space-y-6">
                        {services.map((service) => (
                            <div
                                key={service.id}
                                className="bg-white flex flex-col md:flex-row items-center justify-between rounded-xl shadow-md p-6 md:p-8 hover:shadow-lg transition"
                            >
                                {/* Left Side - Icon + Text */}
                                <div className="flex items-center md:w-1/3">
                                    <div className="text-3xl mr-3">{service.icon}</div>
                                    <h3 className="text-lg font-semibold">{service.title}</h3>
                                </div>

                                {/* Middle Image */}
                                <div className="md:w-1/3 px-4">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="rounded-lg w-full transform transition-transform duration-300 hover:scale-115 hover:rotate-4"
                                    />
                                </div>

                                {/* Right Side - Description */}
                                <div className="md:w-1/3 mt-4 md:mt-0 text-gray-600 text-sm">
                                    {service.desc}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </>
    )
}

export default Service