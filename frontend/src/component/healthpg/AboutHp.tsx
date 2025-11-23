const AboutHp = () => {
  return (
    <>
     <section className="w-full bg-white py-12 px-6 md:px-16 lg:px-24">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        {/* Left Images */}
        <div className="relative flex justify-center">
          {/* Main Lab Image */}
          <img
            src="https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-118143566.jpg"
            alt="Healthcare Lab"
            className="rounded-xl w-150 shadow-lg border-2 border-yellow-300"
          />
          {/* Small Family Image */}
          <img
            src="https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630"
            alt="Family Healthcare"
            className="absolute bottom-[-30px] right-[-20px] w-70 rounded-xl shadow-md"
          />
        </div>

        {/* Right Text Content */}
        <div>
          <p className="text-sm text-sky-600 font-semibold uppercase tracking-wide">
            Unift Quickcare
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
            Unift Healthcare Reservations <br /> in Ahmedabad.
          </h2>

          {/* Bullet Points */}
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start">
              <span className="text-sky-600 mr-2">✔</span>
              Unipath's Unift Health Check Packages include a complete body
              checkup, as well as necessary blood tests and urine analysis, to
              ensure a thorough health assessment.
            </li>
            <li className="flex items-start">
              <span className="text-sky-600 mr-2">✔</span>
              You may make informed judgments based on a comprehensive body
              checkup test list and price transparency.
            </li>
            <li className="flex items-start">
              <span className="text-sky-600 mr-2">✔</span>
              Enjoy the convenience of a full-body checkup near me with home
              sample collection and receive your results.
            </li>
          </ul>
        </div>
      </div>
    </section>
    </>
  )
}

export default AboutHp