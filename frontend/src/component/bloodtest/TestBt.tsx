import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const TestBt = () => {
  const [tests, setTests] = useState<any[]>([]); // ✅ use any[] for safety
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://sky-backend-7kjf.onrender.com/api/tests/")  // ✅ Django endpoint
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched tests:", data); // ✅ debug log
        setTests(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching tests:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center">Loading tests...</p>;

  return (
    <div className="max-w-7xl mx-auto space-y-8 my-10">
      <div className="text-center space-y-2">
        <p className="text-blue-600 uppercase text-sm">Available Tests</p>
        <h1 className="text-2xl font-bold text-gray-800">Blood Tests</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {tests.length > 0 ? (
          tests.map((test) => (
            <div
              key={test.id}
              className="bg-white rounded-lg shadow-md p-4 space-y-3"
            >
              <h3 className="text-center font-semibold text-gray-800">
                {test.name}
              </h3>
              <p className="text-center text-sm text-gray-500">
                {test.parameters_no} parameters
              </p>
              <p className="font-bold text-lg">{test.price}</p>

              <div className="flex justify-center gap-4">
                <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700">
                  Book Now
                </button>
                <Link to={`/blood-tests/${test.id}`}>
                  <button className="px-3 py-1 text-sm bg-gray-200 rounded hover:bg-gray-300">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No tests available
          </p>
        )}
      </div>

      <div className="text-center mt-6">
        <Link to="/blood-tests">
          <button className="bg-yellow-500 text-white px-6 py-2 rounded hover:bg-yellow-600 inline-flex items-center gap-2">
            View All Tests <FaArrowRight />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TestBt;
