// import { FaEye, FaArrowRight, FaExternalLinkAlt } from 'react-icons/fa';
// import { Link } from 'react-router-dom';


// const tests = Array(9).fill({
//   name: 'CBC (HO)',
//   params: '22 Parameters',
//   price: '₹1400',
// });

// const TestBt = () => {
//   return (
//     <>
//       <div className="max-w-7xl mx-auto space-y-8 my-10">

//         {/* Title */}
//         <div className="text-center space-y-2">
//           <p className="text-blue-600 uppercase text-sm">Lorem Ipsum</p>
//           <h1 className="text-2xl font-bold text-gray-800">Blood Tests</h1>
//         </div>

//         {/* Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
//           {tests.map((test, index) => (
//             <div key={index} className="bg-white rounded-lg shadow-md p-4 space-y-3">
//               <div className="flex justify-center">
//                 <div className="bg-red-100 p-3 rounded-full">
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 1.343-3 3 0 3 3 6 3 6s3-3 3-6c0-1.657-1.343-3-3-3z" />
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v3" />
//                   </svg>
//                 </div>
//               </div>
//               <h3 className="text-center font-semibold text-gray-800">{test.name}</h3>
//               <p className="text-center text-sm text-gray-500">{test.params}</p>
//               <p className="text-center font-bold text-lg">{test.price}</p>
//               <div className="flex justify-center gap-4">
//                 <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700">Book Now</button>
//                 <button className="px-3 py-1 text-sm bg-gray-200 rounded hover:bg-gray-300">View Details</button>
//               </div>
//               <div className="flex justify-center gap-3 mt-2 text-blue-600 text-lg">
//                 <FaEye className="cursor-pointer hover:text-blue-800" />
//                 <FaArrowRight className="cursor-pointer hover:text-blue-800" />
//                 <FaExternalLinkAlt className="cursor-pointer hover:text-blue-800" />
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* View All Button */}
//         <div className="text-center mt-6">
//           <Link to="/blood-tests/cbc"> <button className="bg-yellow-500 text-white px-6 py-2 rounded hover:bg-yellow-600 inline-flex items-center gap-2">
//             View All Tests <FaArrowRight />
//           </button></Link>
//         </div>

//       </div>


//       <div className="relative max-w-7xl  my-20 mx-auto w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl p-6 flex items-center justify-between overflow-hidden">

//         {/* Decorative background pattern */}
//         <div className="absolute right-4 bottom-4 opacity-10">
//           <svg width="100" height="100" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <circle cx="50" cy="50" r="48" stroke="white" strokeOpacity="0.2" strokeWidth="4" />
//             <circle cx="20" cy="20" r="10" fill="white" fillOpacity="0.2" />
//             <circle cx="80" cy="80" r="8" fill="white" fillOpacity="0.2" />
//           </svg>
//         </div>

//         {/* Text */}
//         <div>
//           <h2 className="text-xl font-semibold">
//             Need help on Emergency? Book <br /> Your Appointment Today.
//           </h2>
//         </div>

//         {/* Button */}
//         <div>
//           <button className="bg-white text-blue-600 px-5 py-2 rounded-full hover:bg-gray-100 inline-flex items-center gap-2">
//             Make Appointment <FaArrowRight />
//           </button>
//         </div>
//       </div>
//     </>
//   )
// }

// export default TestBt

import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const TestBt = () => {
  const [tests, setTests] = useState<any[]>([]); // ✅ use any[] for safety
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8000/api/tests/")  // ✅ Django endpoint
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
