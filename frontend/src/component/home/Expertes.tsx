
import { ArrowRight, FlaskConical, FileText, Droplet, ClipboardCheck } from "lucide-react";

const Expertes = () => {
  return (
    <>
    
     <section className="w-full px-6 md:px-12 lg:px-20 py-16 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Images */}
        <div className="relative flex gap-4 justify-center">
          {/* Image 1 */}
          <div className="w-1/2 z-20">
            <img
              src="https://img.freepik.com/free-photo/microscope-used-by-young-lab-worker_1098-18426.jpg"
              alt="Medical Research"
              className="rounded-2xl border-4 border-yellow-400 shadow-lg object-cover w-full h-[350px]"
            />
          </div>
          {/* Image 2 */}
          <div className="z-10 w-1/2 mt-20 -ms-30 ">
            <img
              src="https://img.freepik.com/free-photo/woman-beach-with-her-baby-enjoying-sunset_52683-144131.jpg?size=626&ext=jpg"
              alt="Lab Research"
              className="rounded-2xl border-4 border-yellow-400 shadow-lg object-cover w-full h-[350px]"
            />
          </div>
        </div>

        {/* Right Content */}
        <div>
          <p className="text-blue-600 font-semibold uppercase tracking-wide">
            About Us
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug mt-2">
            Trusted Experts Latest <br /> Laboratory Service
          </h2>
          <p className="text-gray-600 mt-4">
            Trusted Experts offers the latest in laboratory services, utilizing
            state-of-the-art technology to provide accurate and reliable results.
            Our experienced professionals ensure timely and precise testing,
            meeting the highest standards of quality and safety.
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
            <div className="flex items-start gap-3">
              <div className="bg-blue-100 p-3 rounded-full">
                <FlaskConical className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Medical Research</h4>
                <p className="text-gray-600 text-sm">
                  Advancing healthcare with innovative studies and methods.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-blue-100 p-3 rounded-full">
                <Droplet className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Blood Research</h4>
                <p className="text-gray-600 text-sm">
                  Advancing diagnostics and treatments with precision.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-blue-100 p-3 rounded-full">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Report Efficiency</h4>
                <p className="text-gray-600 text-sm">
                  Quick, accurate, and reliable results every time.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-blue-100 p-3 rounded-full">
                <ClipboardCheck className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Complete Cases</h4>
                <p className="text-gray-600 text-sm">
                  Managing complex cases with detailed analysis and solutions.
                </p>
              </div>
            </div>
          </div>

          {/* Button */}
          <button className="mt-8 flex items-center bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded-full gap-2 transition">
            View More <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
    </>
  )
}

export default Expertes