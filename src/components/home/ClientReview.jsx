import React from "react";

export default function ClientReview() {
  return (
    <div
      className="hero h-[530px] bg-base-200 "
      style={{
        backgroundImage:
          "url(https://www.myperfectresume.com/wp-content/uploads/2020/09/define-excellent-customer-service.jpg)",
      }}
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left pl-64">
          <h1 className="text-5xl font-bold underline">WHAT OUR CLIENTS SAY</h1>
          <p className="py-6 text-gray-600">
            I highly recommend this car shop to anyone in the area. They've
            consistently proven themselves to be the best in the business, and I
            wouldn't take my vehicles anywhere else. Their commitment to
            customer satisfaction is second to none.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100"></div>
      </div>
    </div>
  );
}
