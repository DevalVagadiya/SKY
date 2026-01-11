import { useEffect, useState } from "react";
import { ArrowUpRight, FlaskRound, ClipboardList, FileCheck2 } from "lucide-react";
import { Link } from "react-router-dom";
import packagesData from "../../static-data/packages.json";


import brain from "../../assets/brain.png";
import heart from "../../assets/heart.png";
import kidneys from "../../assets/kidneys.png";
import ear from "../../assets/ear.png";
import thyroid from "../../assets/thyroid.png";
import liver from "../../assets/liver.png";
import lungs from "../../assets/lungs.png";
import bones from "../../assets/bones.png";
import allergy from "../../assets/allergy.png";


const structures = [
  { id: 1, name: "Brain", icon: brain },
  { id: 2, name: "Heart", icon: heart },
  { id: 3, name: "Kidneys", icon: kidneys },
  { id: 4, name: "Ear", icon: ear },
  { id: 5, name: "Thyroid", icon: thyroid },
  { id: 6, name: "Liver", icon: liver },
  { id: 7, name: "Lungs", icon: lungs },
  { id: 8, name: "Bones", icon: bones },
  { id: 9, name: "Allergy", icon: allergy },
];

const steps = [
  {
    id: 1,
    icon: <FlaskRound className="w-10 h-10 text-white" />,
    title: "Get Started",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 2,
    icon: <ClipboardList className="w-10 h-10 text-white" />,
    title: "Prepare For Your Test",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 3,
    icon: <FileCheck2 className="w-10 h-10 text-white" />,
    title: "Get Test Results",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

type PackageType = {
  id?: number | string;
  img?: string;
  image?: string;
  title?: string;
  name?: string;
  tests_no?: number;
  parameters?: string;
  price?: number | string;
  is_popular?: boolean;
};

const HelthPakeg = () => {
  const [packages, setPackages] = useState<PackageType[]>([]);

  useEffect(() => {
    setPackages(packagesData);
  }, []);

  return (
    <>
      {/* ===== Packages Section ===== */}
      <div className="bg-white py-16 px-6 max-w-7xl mx-auto ">
        <div className="text-center mb-10">
          <p className="text-blue-500 uppercase tracking-wide text-sm font-semibold">
            Health Packages
          </p>
          <h2 className="text-3xl font-bold text-gray-900">Popular Health Packages</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
          {packages
            .filter((pkg) => pkg.is_popular)
            .slice(0, 4)
            .map((pkg) => (
              <div
                key={pkg.id}
                className="bg-white rounded-2xl shadow overflow-hidden hover:shadow-lg transition"
              >
                <Link
                    to={`/package/${pkg.id}`}
                    key={pkg.id}
                    className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300"
                  >
                <img src={pkg.img || pkg.image} alt={pkg.title || pkg.name} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <h3 className="font-bold text-md text-gray-900">{pkg.title || pkg.name}</h3>
                  <div className="flex items-center justify-between mt-2">
                    <p className="text-gray-500 text-sm">{pkg.tests_no ? `${pkg.tests_no} Tests Included` : pkg.parameters}</p>
                    <p className="text-lg font-bold">₹{pkg.price?.toString().replace(/^₹?/, "") || pkg.price}</p>
                  </div>
                  <div className="flex justify-end mt-3">
                    <button className="bg-red-100 text-red-500 p-2 rounded-full hover:bg-red-200 transition">
                      <ArrowUpRight size={18} />
                    </button>
                  </div>
                </div>
                </Link>
              </div>
            ))}
        </div>

        <div className="flex justify-center mt-10">
          <Link to="/packages">
            <button className="bg-yellow-500 text-white font-medium px-6 py-3 rounded-full flex items-center gap-2 hover:bg-yellow-600 transition">
              View All Packages <ArrowUpRight size={18} />
            </button>
          </Link>
        </div>
      </div>

      {/* ===== Structures Section ===== */}
      <div className="bg-white py-16 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-blue-500 uppercase tracking-wide text-sm font-semibold">
            Lorem Ipsum
          </p>
          <h2 className="text-3xl font-bold text-gray-900">Hutting By Structures</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {structures.map((item) => (
            <Link
              key={item.id}
              to={`/structures/${item.name.toLowerCase()}`}
              className="text-center group"
            >
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto shadow-sm group-hover:shadow-md transition">
                <img src={item.icon} alt={item.name} className="w-12 h-12" />
              </div>
              <p className="mt-3 font-medium text-gray-800 group-hover:text-blue-600 transition">
                {item.name}
              </p>
            </Link>
          ))}
        </div>
      </div>

      {/* ===== Steps Section ===== */}
      <section className="py-16 bg-white text-center">
        <p className="text-sm font-semibold text-blue-500 tracking-wide uppercase">
          How It Works
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-black mt-2">
          Receive Your Test Resale <br /> In 3 Easy Steps
        </h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-6">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-white shadow-md rounded-2xl p-6 relative flex flex-col items-center"
            >
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-4 shadow-md">
                {step.icon}
              </div>
              <div className="text-blue-700 text-sm mb-2">▼</div>
              <h3 className="text-xl font-extrabold text-black tracking-wider">
                STEP {step.id.toString().padStart(2, "0")}
              </h3>
              <p className="text-lg font-semibold text-black mt-2">{step.title}</p>
              <p className="text-gray-500 text-sm mt-2">{step.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default HelthPakeg;
