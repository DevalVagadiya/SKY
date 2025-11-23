const DetailBTCbc = ({ test }) => {
  const parameters = JSON.parse(test.parameters || "[]"); // parse JSON string from API

  return (
    <div className="min-h-screen max-w-7xl mx-auto p-8 my-20">
      {/* Parameters Section */}
      <div className="bg-white p-6 mb-8">
        <h2 className="text-xl font-bold mb-4">Parameters Included in {test.name}</h2>
        <div className="flex flex-col space-y-2 text-gray-700 text-sm">
          {parameters.map((param, index) => (
            <span
              key={index}
              className="bg-gray-90 px-3 py-1 rounded-md text-gray-800"
            >
              {param}
            </span>
          ))}
        </div>
      </div>


      {/* Test Description */}
      <div className="bg-white p-6">
        <h2 className="text-xl font-bold mb-4">Test Description</h2>
        <p className="text-gray-700 mb-6 text-sm leading-relaxed">
          {test.description}
        </p>
      </div>
    </div>
  );
};

export default DetailBTCbc;