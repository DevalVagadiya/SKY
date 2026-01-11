import { Link } from "react-router-dom";

import brain from "../../assets/brain.png";
import heart from "../../assets/heart.png";
import kidneys from "../../assets/kidneys.png";
import ear from "../../assets/ear.png";
import thyroid from "../../assets/thyroid.png";
import liver from "../../assets/liver.png";
import lungs from "../../assets/lungs.png";
import bones from "../../assets/bones.png";
import allergy from "../../assets/allergy.png";
import header9 from "../../assets/header9.png";


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


const AboutBt = () => {
    return (
        <>
            <div className="flex flex-col md:flex-row my-10 rounded-lg overflow-hidden max-w-7xl mx-auto">

                {/* Left Image Section */}
                <div className="md:w-1/2 p-4 flex items-center justify-center">
                    <img
                        src={header9}
                        alt="Vaccination"
                        className="rounded-lg shadow-md object-cover w-full h-full"
                    />
                </div>

                {/* Right Text Section */}
                <div className="md:w-1/2 p-6 flex flex-col justify-center space-y-4">
                    <p className="text-blue-600 text-sm font-semibold uppercase">Bloodstream Evaluation</p>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                        The bloodstream evaluate throughout Ahmedabad
                    </h2>

                    <ul className="space-y-4 text-gray-700">
                        <li className="flex gap-2">
                            <span className="text-blue-600">✔</span>
                            <div>
                                <strong>What is tested encompass:</strong> cells, chemicals, proteins and waste products,
                            </div>
                        </li>
                        <li className="flex gap-2">
                            <span className="text-blue-600">✔</span>
                            <div>
                                <strong>Why It’s Done:</strong> Routine checks, Monitoring conditions (e.g., diabetes, cholesterol) and diagnosing diseases (e.g., infections, blood cancers). Checking treatments Monitoring organ function (liver, kidneys, heart, and thyroid).
                            </div>
                        </li>
                        <li className="flex gap-2">
                            <span className="text-blue-600">✔</span>
                            <div>
                                <strong>Common Blood:</strong> Tests include the complete blood count (CBC), basic metabolic panel (BMP), blood smear, lipid profile, liver profile, kidney profile, thyroid profile, and other tests.
                            </div>
                        </li>
                    </ul>
                </div>

            </div>
            <div className="max-w-7xl mx-auto text-center space-y-8">

                {/* Title Section */}
                <div>
                    <p className="text-blue-600 text-sm uppercase">Lorem Ipsum</p>
                    <h1 className="text-2xl font-bold text-gray-800">Hutting By Stuctures</h1>
                </div>

                <div className="flex flex-wrap justify-center gap-8">
                {structures.map((item) => (
                    <Link
                    key={item.id}
                    to={`/structures/${item.name.toLowerCase()}`}
                    className="text-center group">
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
        </>
    )
}

export default AboutBt