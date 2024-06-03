import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCarAlt,
  faUserFriends,
  faMoneyBillAlt,
} from "@fortawesome/free-solid-svg-icons";

export default function About() {
  return (
    <div className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8 text-center">About Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="mb-8">
              At Car Shoppers, our mission is to provide a seamless and
              hassle-free car buying experience for our customers. We believe
              that purchasing a car should be an exciting and empowering
              process, not a daunting one.
            </p>
            <FontAwesomeIcon icon={faCarAlt} className="text-5xl mb-4" />
            <h2 className="text-2xl font-bold mb-4">Our Commitment</h2>
            <p className="mb-8">
              We are committed to offering a wide selection of high-quality
              vehicles, competitive pricing, and exceptional customer service.
              Our team of experienced professionals is dedicated to helping you
              find the perfect car that fits your needs and budget.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Why Choose Us?</h2>
            <ul className="space-y-4">
              <li className="flex items-center">
                <FontAwesomeIcon
                  icon={faUserFriends}
                  className="text-2xl mr-4"
                />
                <span>Personalized customer service</span>
              </li>
              <li className="flex items-center">
                <FontAwesomeIcon
                  icon={faMoneyBillAlt}
                  className="text-2xl mr-4"
                />
                <span>Competitive pricing and financing options</span>
              </li>
              <li className="flex items-center">
                <FontAwesomeIcon icon={faCarAlt} className="text-2xl mr-4" />
                <span>Wide selection of quality vehicles</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
