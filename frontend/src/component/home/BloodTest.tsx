import { useEffect, useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { Link, useParams, useLocation } from "react-router-dom";
import testsData from "../../static-data/tests.json";
import packagesData from "../../static-data/seasonal_packs.json";

export default function BloodTests() {
  const [tests, setTests] = useState<any[]>([]);
  const [packages, setPackages] = useState<any[]>([]);

  const { id } = useParams();
  const location = useLocation();

  // Home page detection
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    if (id) {
      const test = testsData.find((t) => t.id === Number(id));
      setTests(test ? [test] : []);
    } else {
      setTests(testsData);
    }
    setPackages(packagesData);
  }, [id]);

  // Limit tests on home page
  const visibleTests = isHomePage ? tests.slice(0, 8) : tests;

  return (
    <>
      {/* 🩸 BLOOD TESTS */}
      <div className="max-w-7xl mx-auto py-16 px-6">
        <div className="text-center mb-12">
          <p className="text-indigo-600 uppercase text-sm font-semibold">
            Lorem Ipsum
          </p>
          <h2 className="text-3xl font-bold text-gray-900">
            Blood Tests
          </h2>
        </div>

        {/* TEST CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {visibleTests.map((test) => (
            <div
              key={test.id}
              className="bg-[#F9F9FB] rounded-2xl p-6 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {test.name}
              </h3>

              <p className="text-sm text-indigo-600 mb-4">
                {test.parameters_no
                  ? `${test.parameters_no} Parameter`
                  : test.parameters}
              </p>

              <p className="text-2xl font-bold text-orange-500 mb-6">
                ₹ {test.price}
              </p>

              <div className="flex gap-3">
                <button className="bg-indigo-700 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-indigo-800 transition">
                  Book Now
                </button>

                <Link to={`/blood-tests/${test.id}`}>
                  <button className="border border-indigo-700 text-indigo-700 px-5 py-2 rounded-full text-sm font-medium hover:bg-indigo-50 transition">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* VIEW MORE BUTTON */}
        {isHomePage && tests.length > 8 && (
          <div className="flex justify-center mt-10">
            <Link to="/blood-tests">
              <button className="bg-indigo-700 text-white font-medium px-6 py-3 rounded-full flex items-center gap-2 hover:bg-yellow-600 transition">
                View More Tests <ArrowUpRight size={16} />
              </button>
            </Link>
          </div>
        )}
      </div>

      {/* 💊 PACKAGES */}
      <div className="my-16 bg-white flex justify-center p-6">
        <div className="grid md:grid-cols-2 gap-6 max-w-7xl w-full">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`${pkg.color || "bg-indigo-600"} relative text-white rounded-xl p-6 shadow-lg`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-6 bg-yellow-400 text-black text-xs font-bold px-3 py-2 rounded-b-lg">
                  🌟 Popular
                </div>
              )}

              <div className="absolute -top-4 right-6 bg-black text-white text-xs font-bold px-3 py-2 rounded-b-lg">
                {pkg.discount}
              </div>

              <img
                src={pkg.img}
                alt={pkg.title}
                className="rounded-lg mb-4 w-full h-40 object-cover"
              />

              <h2 className="text-lg font-bold">{pkg.title}</h2>
              <p className="text-sm mb-4">{pkg.subtitle}</p>

              <ul className="space-y-2 mb-4">
                {pkg.tests.map((feature: string, index: number) => (
                  <li key={index} className="flex items-center text-sm">
                    <Check size={16} className="mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="text-lg font-bold">
                ₹ {pkg.price}
                {pkg.old_price && (
                  <span className="text-sm font-normal line-through ml-2">
                    ₹ {pkg.old_price}
                  </span>
                )}
              </div>

              <div className="flex gap-3 mt-4">
                <button className="bg-black text-white px-4 py-2 rounded-full text-sm hover:bg-gray-800 transition">
                  Book Now <ArrowUpRight size={16} className="inline ml-1" />
                </button>

                <Link to={`/seasonal_packs/${pkg.id}`}>
                  <button className="bg-yellow-500 text-black px-4 py-2 rounded-full text-sm hover:bg-yellow-400 transition">
                    View Details <ArrowUpRight size={16} className="inline ml-1" />
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
