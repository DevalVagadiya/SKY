interface TestData {
  name: string;
  parameters?: string;
  description: string;
}

const DetailBTCbc = ({ test }: { test: TestData }) => {
  const parameters: string[] = JSON.parse(test.parameters || "[]");

  return (
    <div className="min-h-screen max-w-7xl mx-auto p-8 my-20">
      {/* Parameters Section */}
      <div className="bg-white rounded-lg border border-gray-200 mb-8">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">
            Parameters Included in {test.name}
          </h2>
        </div>

        <div className="px-6 py-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-4 gap-x-6 text-sm text-gray-700">
            {parameters.map((param, index) => (
              <div key={index} className="flex items-center space-x-2">
                {/* Bullet Dot */}
                <span className="w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0"></span>
                <span>{param}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Test Description */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="text-lg font-semibold mb-4 text-gray-900">
          Test Description
        </h2>
        <p className="text-gray-700 text-sm leading-relaxed">
          {test.description}
        </p>
      </div>
    </div>
  );
};

export default DetailBTCbc;
