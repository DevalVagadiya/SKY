import React from "react";
import { Eye, ArrowUpRight } from "lucide-react";

const tests = [
  {
    id: 1,
    title: "B12 LEVEL",
    parameters: "1 Parameters",
    description: "VITAMIN B12",
    fasting: "Not Required",
    report: "Same Day",
    recommended: "Male, Female",
    schedule: "For Every Day",
    price: "₹1400",
  },
  {
    id: 2,
    title: "CBC (HO)",
    parameters: "22 Parameters",
    description: "Haemoglobin (HO), RBC Count (HO), Hematocrit (HO), MCV (HO), MCH (HO), MCHC (HO)",
    fasting: "Not Required",
    report: "Same Day",
    recommended: "Male, Female",
    schedule: "For Every Day",
    price: "₹1400",
  },
  {
    id: 3,
    title: "B12 LEVEL",
    parameters: "1 Parameters",
    description: "VITAMIN B12",
    fasting: "Not Required",
    report: "Same Day",
    recommended: "Male, Female",
    schedule: "For Every Day",
    price: "₹1400",
  },
];

const AboutBrain = () => {
  return (
   <>
   <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tests.map((test) => (
            <div
              key={test.id}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition"
            >
              {/* Header */}
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-red-100 text-red-600 flex items-center justify-center rounded-full mr-3">
                  💧
                </div>
                <h3 className="text-lg font-bold">{test.title}</h3>
              </div>

              {/* Parameters & description */}
              <p className="text-sm text-gray-500">{test.parameters}</p>
              <p className="text-sm font-medium mb-4">{test.description}</p>

              {/* Info grid */}
              <div className="grid grid-cols-2 gap-y-3 text-sm text-gray-600 mb-4">
                <div>
                  <p className="font-semibold">Fasting Required</p>
                  <p>{test.fasting}</p>
                </div>
                <div>
                  <p className="font-semibold">Report Within</p>
                  <p>{test.report}</p>
                </div>
                <div>
                  <p className="font-semibold">Recommended</p>
                  <p>{test.recommended}</p>
                </div>
                <div>
                  <p className="font-semibold">Schedule</p>
                  <p>{test.schedule}</p>
                </div>
              </div>

              {/* Price & Actions */}
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold">{test.price}</span>
                <div className="flex space-x-2">
                  <button className="w-9 h-9 flex items-center justify-center bg-blue-50 text-blue-600 rounded-full hover:bg-blue-100 transition">
                    <Eye size={18} />
                  </button>
                  <button className="w-9 h-9 flex items-center justify-center bg-blue-50 text-blue-600 rounded-full hover:bg-blue-100 transition">
                    <ArrowUpRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View all button */}
        <div className="flex justify-center mt-10">
          <button className="px-6 py-2 bg-yellow-500 text-white rounded-full flex items-center gap-2 hover:bg-yellow-600 transition">
            View All Tests <ArrowUpRight size={16} />
          </button>
        </div>
      </div>
    </section>
   
   </>
  )
}

export default AboutBrain