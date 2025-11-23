import { Home } from "lucide-react";
import { Link } from "react-router-dom";


const HeroAb = () => {
  return (

    <>
      <section className="relative w-full  mb-20">
        {/* Background section */}
        <div className="bg-blue-500  items-center pt-30 pb-10 z-1">

          {/* Left Content */}
          <div className=" text-white p-10 flex max-w-7xl max-auto flex-col justify-center h-full">
            <h2 className="text-4xl font-bold mb-4">About Us</h2>
            <p className="mb-6 max-w-lg">
              Pathology Services are very important for diagnosing an illness and
              selecting how to treat it.
            </p>

          </div>

          {/* Breadcrumb */}
      
        </div>
         <div className="flex -mt-9 items-center ms-30  bg-white text-black px-4 py-2 w-50  z-10 rounded-md ">
            <Home className="w-4 h-4 mr-2" />
            <Link to="/"> <span className="text-sm" >Home</span> </Link>
            <span className="mx-2">{`>>`}</span>
            <span className="text-sm font-semibold">About Us</span>
          </div>
      </section>
         
    </>
  )
}

export default HeroAb