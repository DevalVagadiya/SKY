import { Link } from "react-router-dom";
import { Home } from "lucide-react";
import { FaUtensils, FaClock, FaVenusMars, FaCalendarAlt, FaPhone } from "react-icons/fa";

const HeroBtCbc = ({ test }: { test: any }) => {
  const details = [
    {
      icon: <FaUtensils className="text-blue-500" />,
      title: "Fasting Required",
      description: test.fasting || "Not Required",
    },
    {
      icon: <FaClock className="text-blue-500" />,
      title: "Report Within",
      description: "Same Day",
    },
    {
      icon: <FaVenusMars className="text-blue-500" />,
      title: "Recommend",
      description: "Male,Female",
    },
    {
      icon: <FaCalendarAlt className="text-blue-500" />,
      title: "Booking",
      description: "All Days",
    },
  ];

  return (
    <>
      <section className="relative w-full mb-20">
        <div className="bg-blue-500 items-center py-10 z-1">
          <div className="text-white p-10 flex max-w-7xl mx-auto flex-col justify-center h-full">
            <h2 className="text-4xl font-bold mb-4">Blood Tests</h2>
            {/* <p className="mb-6 max-w-lg">{test.description}</p> */}
          </div>
        </div>

        {/* Breadcrumb */}
        <div className="inline-flex items-center -mt-9 ms-30 bg-white text-black px-4 py-5 z-10 rounded-md whitespace-nowrap">
          <Home className="w-4 h-4 mr-2" />
          <Link to="/"> <span className="text-sm">Home</span> </Link>
          <span className="mx-2">{`>>`}</span>
          <Link to="/blood-tests"> <span className="text-sm font-semibold">Blood Tests</span> </Link>
          <span className="mx-2">{`>>`}</span>
          <span className="text-sm font-semibold">{test.name}</span>
        </div>
      </section>

      <div className="max-w-7xl mx-auto bg-white pt-20 pb-10 my-20 space-y-6">
        {/* Header Section */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-xl font-bold">{test.name}</h1>
            <p className="text-lg font-semibold mt-1">{test.price}</p>
          </div>
          <button className="bg-yellow-500 text-white px-5 py-2 rounded-full hover:bg-yellow-600 inline-flex items-center gap-2">
            Please Call <FaPhone />
          </button>
        </div>

        {/* Information Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 border-t pt-4">
          {details.map((detail, index) => (
            <div key={index} className="flex items-center space-x-4">
              <div className="bg-gray-100 p-3 rounded-full">{detail.icon}</div>
              <div>
                <p className="text-sm text-gray-500">{detail.title}</p>
                <p className="font-medium">{detail.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HeroBtCbc;