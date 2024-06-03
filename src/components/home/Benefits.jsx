import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef } from "react";
import { faWrench, faClock, faTags } from "@fortawesome/free-solid-svg-icons";

export default function Benefits() {
  const benefitsRef = useRef(null);

  const scrollToSection = () => {
    benefitsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      style={{
        backgroundImage:
          "url(https://mphclub.com/wp-content/uploads/2022/05/how-much-does-it-cost-to-rent-an-exotic-car-blog-mph-club4.webp?x35170)",
      }}
    >
      <section className=" text-white py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-8 text-center">
            Why Choose Our Car Shop?
          </h2>
          <button
            className=" btn bg-transparent text-white hover:text-black hover:bg-white block mx-auto"
            onClick={scrollToSection}
          >
            Discover Our Benefits
          </button>
        </div>
      </section>

      <section className=" text-white py-20 scroll-mt-20" ref={benefitsRef}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-neutral-500 p-8 rounded-lg shadow-lg">
              <div className="text-4xl font-bold mb-4">
                <FontAwesomeIcon icon={faWrench} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Expert Repairs</h3>
              <p>
                Our team of ASE-certified technicians have the expertise to
                diagnose and repair any issue with your vehicle.
              </p>
            </div>
            <div className="bg-neutral-500 p-8 rounded-lg shadow-lg">
              <div className="text-4xl font-bold mb-4">
                <FontAwesomeIcon icon={faClock} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Efficient Service</h3>
              <p>
                We understand your time is valuable. That's why we strive to
                complete all repairs and maintenance in a timely manner.
              </p>
            </div>
            <div className="bg-neutral-500 p-8 rounded-lg shadow-lg">
              <div className="text-4xl font-bold mb-4">
                <FontAwesomeIcon icon={faTags} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Competitive Pricing</h3>
              <p>
                Our pricing is fair and transparent, ensuring you get the best
                value for your money.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
