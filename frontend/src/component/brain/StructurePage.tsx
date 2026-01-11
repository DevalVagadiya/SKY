import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Home } from "lucide-react";
import testsData from "../../static-data/tests.json";
import packagesData from "../../static-data/packages.json";

type BodyStructureType = {
  id: number;
  part_name: string;
};

type TestType = {
  id?: number | string;
  name?: string;
  parameters_no?: number | string;
  parameters?: string;
  price?: number | string;
  body_structure?: BodyStructureType[];
};

type PackageType = {
  id?: number | string;
  title?: string;
  img?: string;
  price?: number | string;
  parameters_no?: string;
  body_structure?: BodyStructureType[];
}

const StructurePage = () => {
  const { structureName } = useParams<{ structureName: string }>();
  const [tests, setTests] = useState<TestType[]>([]);
  const [packages, setPackages] = useState<PackageType[]>([]);

  useEffect(() => {
    const lowerCaseStructureName = structureName?.toLowerCase();

    const filteredTests = testsData.filter((test: TestType) =>
      test.body_structure?.some(
        (structure) =>
          structure.part_name.toLowerCase() === lowerCaseStructureName
      )
    );

    const filteredPackages = packagesData.filter((pkg: PackageType) =>
      pkg.body_structure?.some(
        (structure) =>
          structure.part_name.toLowerCase() === lowerCaseStructureName
      )
    );

    setTests(filteredTests);
    setPackages(filteredPackages);
  }, [structureName]);

  const capitalizedStructureName = structureName
    ? structureName.charAt(0).toUpperCase() + structureName.slice(1)
    : "";

  return (
    <>
      <section className="relative w-full mb-12">
        <div className="bg-blue-500 items-center pt-30 pb-10 z-1">
          <div className="text-white p-10 flex max-w-7xl mx-auto flex-col justify-center h-full">
            <h2 className="text-4xl font-bold mb-4">
              {capitalizedStructureName}
            </h2>
            <p className="mb-6 max-w-lg">
              Pathology Services are very important for diagnosing an illness and
              selecting how to treat it.
            </p>
          </div>
        </div>
        <div className="flex -mt-9 items-center ms-30 bg-white text-black px-4 py-2 w-max z-10 rounded-md shadow-md mx-auto">
          <Home className="w-4 h-4 mr-2" />
          <Link to="/">
            <span className="text-sm">Home</span>
          </Link>
          <span className="mx-2">{`>>`}</span>
          <span className="text-sm font-semibold">{capitalizedStructureName}</span>
        </div>
      </section>

      <>
        {/* Tests Section */}
        {tests.length > 0 && (
          <section className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4">
              <h3 className="text-3xl font-bold mb-8 text-center">Tests</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {tests.map((test) => (
                  <div
                    key={`test-${test.id}`}
                    className="bg-[#F9F9FB] rounded-2xl p-6 shadow-sm hover:shadow-md transition"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {test.name}
                    </h3>
                    <p className="text-sm text-indigo-600 mb-4">
                      {test.parameters_no
                        ? `${test.parameters_no} Parameters`
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
        )}

        {/* Packages Section */}
        {packages.length > 0 && (
          <section className="py-12 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
              <h3 className="text-3xl font-bold mb-8 text-center">Packages</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {packages.map((pkg) => (
                  <div
                    key={`package-${pkg.id}`}
                    className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition"
                  >
                    {pkg.img && <img src={pkg.img} alt={pkg.title} className="w-full h-40 object-cover rounded-lg mb-4" />}
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {pkg.title}
                    </h3>
                    <p className="text-sm text-indigo-600 mb-4">
                      {pkg.parameters_no ? `${pkg.parameters_no} Parameters` : 'View details for parameters'}
                    </p>
                    <p className="text-2xl font-bold text-orange-500 mb-6">
                      ₹ {pkg.price}
                    </p>
                    <div className="flex gap-3">
                      <button className="bg-orange-500 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-orange-600 transition">
                        Book Now
                      </button>
                      <Link to={`/packages/${pkg.id}`}>
                        <button className="border border-orange-500 text-orange-500 px-5 py-2 rounded-full text-sm font-medium hover:bg-orange-50 transition">
                          View Details
                        </button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {tests.length === 0 && packages.length === 0 && (
          <div className="text-center py-20">
            <h2 className="text-2xl font-semibold mb-4">No Results Found</h2>
            <p className="text-gray-600">
              No tests or packages were found for "{capitalizedStructureName}".
            </p>
          </div>
        )}
      </>
    </>
  );
};

export default StructurePage;
