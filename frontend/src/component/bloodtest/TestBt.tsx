import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import testsData from "../../static-data/tests.json";

const TestBt = () => {
  const [tests, setTests] = useState<any[]>([]); // ✅ use any[] for safety

  useEffect(() => {
    setTests(testsData);
  }, []);

  return (
    <div className="max-w-7xl mx-auto space-y-8 my-10">
      <div className="text-center space-y-2">
        <p className="text-blue-600 uppercase text-sm">Available Tests</p>
        <h1 className="text-2xl font-bold text-gray-800">Blood Tests</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {tests.length > 0 ? (
          tests.map((test) => (
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
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No tests available
          </p>
        )}
      </div>
    </div>
  );
};

export default TestBt;
