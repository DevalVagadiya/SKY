import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Home } from "lucide-react";

type TestType = {
  id?: number | string;
  img?: string;
  image?: string;
  title?: string;
  name?: string;
  tests_no?: number;
  parameters_no?: number;
  parameters?: string;
  price?: number | string;
  body_structure?: string;
};

const StructurePage = () => {
  const { structureName } = useParams<{ structureName: string }>();
  const [tests, setTests] = useState<TestType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://127.0.0.1:8001/api/tests/`)
      .then((res) => res.json())
      .then((data) => {
        const filteredTests = data.filter(
          (test: TestType) =>
            test.body_structure?.toLowerCase() === structureName?.toLowerCase()
        );
        setTests(filteredTests);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching tests:", err);
        setLoading(false);
      });
  }, [structureName]);

  if (loading) {
    return <div className="text-center py-10">Loading packages...</div>;
  }

  const capitalizedStructureName = structureName ? structureName.charAt(0).toUpperCase() + structureName.slice(1) : '';


  return (
    <>
      <section className="relative w-full mb-20">
        <div className="bg-blue-500 items-center pt-30 pb-10  z-1">
          <div className=" text-white p-10 flex max-w-7xl max-auto flex-col justify-center h-full">
            <h2 className="text-4xl font-bold mb-4">
              {capitalizedStructureName} Tests
            </h2>
            <p className="mb-6 max-w-lg">
              Pathology Services are very important for diagnosing an illness and
              selecting how to treat it.
            </p>
          </div>
        </div>
        <div className="flex -mt-9 items-center ms-30  bg-white text-black px-4 py-2 w-50  z-10 rounded-md ">
          <Home className="w-4 h-4 mr-2" />
          <Link to="/">
            <span className="text-sm">Home</span>
          </Link>
          <span className="mx-2">{`>>`}</span>
          <span className="text-sm font-semibold">{capitalizedStructureName}</span>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {tests.map((test) => (
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
        </div>
      </section>
    </>
  );
};

export default StructurePage;
