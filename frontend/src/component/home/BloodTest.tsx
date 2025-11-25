import { useEffect, useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { Link, useParams } from "react-router-dom";

export default function BloodTests() {
  const [tests, setTests] = useState<any[]>([]);
  const [packages, setPackages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        const testUrl = id
          ? `http://localhost:8000/api/tests/${id}/`
          : "http://localhost:8000/api/tests/";
        const packageUrl = "http://localhost:8000/api/seasonal_packs/";

        const [testRes, packageRes] = await Promise.all([
          fetch(testUrl),
          fetch(packageUrl),
        ]);

        const testData = await testRes.json();
        const packageData = await packageRes.json();

        setTests(Array.isArray(testData) ? testData : [testData]);
        setPackages(Array.isArray(packageData) ? packageData : [packageData]);
      } catch (err) {
        console.error("Error fetching:", err);
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [id]);

  if (loading) return <p className="text-center mt-10">Loading tests...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <>
      {/* Blood Tests Section */}
      <div className="max-w-7xl mx-auto py-16 px-6">
        <div className="text-center mb-10">
          <p className="text-blue-500 uppercase tracking-wide text-sm font-semibold">
            Lorem Ipsum
          </p>
          <h2 className="text-3xl font-bold text-gray-900">Blood Tests</h2>
        </div>

        {/* TEST CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {tests.length > 0 ? (
            tests.map((test) => (
              <div
                key={test.id}
                className="bg-white rounded-2xl shadow p-6 text-center hover:shadow-lg transition"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                    <span className="text-red-500 text-2xl">💧</span>
                  </div>
                </div>

                <h3 className="font-bold text-lg">{test.name}</h3>
                <p className="text-gray-500 text-sm mb-3">
                  {test.parameters_no
                    ? `${test.parameters_no} Parameters`
                    : test.parameters}
                </p>

                <div className="flex justify-between items-center mb-4">
                  <p className="text-xl font-bold">₹ {test.price}</p>
                </div>

                {/* ✅ Two Buttons */}
                <div className="flex justify-center gap-3">
                  <button className="bg-yellow-500 text-white px-4 py-2 rounded-full text-sm hover:bg-yellow-600 transition">
                    Book Now
                  </button>

                  <Link to={`/blood-tests/${test.id}`}>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-600 transition flex items-center gap-2">
                      View Details
                      <ArrowUpRight size={16} />
                    </button>
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">
              No tests found
            </p>
          )}
        </div>
      </div>

      {/* 💊 Packages Section */}
      <div className="my-15 bg-white flex items-center justify-center p-6">
        <div className="grid md:grid-cols-2 gap-6 max-w-7xl w-full">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`${pkg.color || "bg-blue-500"} relative text-white rounded-xl p-6 shadow-lg`}
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
                    <Check size={16} className="mr-2 text-white" />
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

              {/* ✅ New View Details Button */}
              <div className="flex justify-start gap-3 mt-4">
                <button className="flex items-center bg-black text-white px-4 py-2 rounded-full text-sm hover:bg-gray-800 transition">
                  Book Now <ArrowUpRight size={16} className="ml-2" />
                </button>

                <Link to={`/seasonal_packs/${pkg.id}`}>
                  <button className="flex items-center bg-yellow-500 text-black px-4 py-2 rounded-full text-sm hover:bg-yellow-400 transition">
                    View Details <ArrowUpRight size={16} className="ml-2" />
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
