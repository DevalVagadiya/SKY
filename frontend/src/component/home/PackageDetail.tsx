import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowRight, Home } from "lucide-react";

const PackageDetail = () => {
  const { id } = useParams();
  const [pkg, setPkg] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    fetch(`http://localhost:8000/api/seasonal_packs/${id}/`)
      .then((res) => res.json())
      .then((data) => {
        setPkg(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching package:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="text-center py-10">Loading package...</p>;
  if (!pkg) return <p className="text-center py-10">No data found</p>;

  return (
    <>
      {/* Header Section */}
      <section className="relative w-full mb-20">
        <div className="bg-blue-500 items-center pt-30 pb-10 z-1">
          <div className="text-white p-10 flex max-w-7xl mx-auto flex-col justify-center h-full">
            <h2 className="text-4xl font-bold mb-4">{pkg.title}</h2>
            <p className="mb-6 max-w-lg">{pkg.subtitle}</p>
          </div>
        </div>

        {/* Breadcrumb */}
        <div className="flex -mt-9 items-center ms-30 bg-white text-black px-4 py-2 w-110 z-10 rounded-md ">
          <Home className="w-4 h-4 mr-2" />
          <Link to="/"> <span className="text-sm">Home</span> </Link>
          <span className="mx-2">{`>>`}</span>
          <Link to="/packages"> <span className="text-sm font-semibold">Packages</span> </Link>
          <span className="mx-2">{`>>`}</span>
          <span className="text-sm font-semibold">{pkg.title}</span>
        </div>
      </section>

      {/* Detail Section */}
      <section className="max-w-7xl mx-auto bg-white py-12 px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <img
            src={pkg.img}
            alt={pkg.title}
            className="rounded-xl w-full h-80 object-cover"
          />
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              {pkg.title}
            </h1>
            <p className="text-lg text-gray-700 mb-2">{pkg.subtitle}</p>
            <p className="text-2xl font-semibold text-blue-600 mb-4">
              ₹ {pkg.price}{" "}
              {pkg.old_price && (
                <span className="text-sm font-normal line-through text-gray-500 ml-2">
                  ₹ {pkg.old_price}
                </span>
              )}
            </p>

            <p className="text-gray-700 mb-4">
              Report Time: <span className="font-semibold">{pkg.reportTime}</span>
            </p>
            <p className="text-gray-700 mb-4">
              Total Tests: <span className="font-semibold">{pkg.tests_no}</span>
            </p>

            <div className="bg-gray-50 border rounded-xl shadow-sm p-6">
              <h3 className="font-semibold text-gray-900 mb-3">
                Tests Included:
              </h3>
              <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm text-gray-700">
                {pkg.tests.map((test, index) => (
                  <li key={index}>• {test}</li>
                ))}
              </ul>
            </div>

            <button className="flex items-center gap-2 px-5 py-2 mt-6 bg-yellow-400 text-black font-semibold rounded-full hover:bg-yellow-500 transition">
              Please Call <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default PackageDetail;
