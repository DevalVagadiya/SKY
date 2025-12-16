import { Home } from "lucide-react";
import { Link } from "react-router-dom";

const HeroUnifit = ({ pack }: { pack: { title: string } }) => {
  return (
    <>
      <section className="relative w-full mb-20">
        {/* Background section */}
        <div className="bg-blue-500 items-center pt-30 pb-10 z-1">
          {/* Left Content */}
          <div className="text-white p-10 flex max-w-7xl mx-auto flex-col justify-center h-full">
            <h2 className="text-4xl font-bold mb-4">Health Package</h2>
            <p className="mb-6 max-w-lg">
              The circulation of blood was evaluated throughout Ahmedabad.
            </p>
          </div>
        </div>

        {/* Breadcrumb */}
        <div className="inline-flex items-center -mt-9 ms-30 bg-white text-black px-4 py-5 z-10 rounded-md whitespace-nowrap">
          <Home className="w-4 h-4 mr-2" />
          <Link to="/"> <span className="text-sm">Home</span> </Link>
          <span className="mx-2">{`>>`}</span>
          <Link to="/packages">
            <span className="text-sm font-semibold">Health Package</span>
          </Link>
          <span className="mx-2">{`>>`}</span>
          <span className="text-sm font-semibold">{pack.title}</span>
        </div>
      </section>
    </>
  );
};

export default HeroUnifit;
