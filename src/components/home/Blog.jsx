import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faUserCircle,
  faCommentAlt,
} from "@fortawesome/free-solid-svg-icons";

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "Maintaining Your Car: Tips for Keeping it Running Smoothly",
      author: "John Doe",
      date: "2023-05-15",
      content:
        "Regular maintenance is key to keeping your car in top condition. In this post, we'll share some essential tips to help you maintain your vehicle and extend its lifespan.",
      image:
        "https://hips.hearstapps.com/hmg-prod/images/professional-mechanic-checking-car-engine-royalty-free-image-952094166-1552081117.jpg",
      comments: 15,
    },
    {
      id: 2,
      title: "The Benefits of Upgrading Your Car's Brakes",
      author: "Jane Smith",
      date: "2023-04-20",
      content:
        "Investing in high-quality brakes can significantly improve your car's safety and performance. In this article, we'll explore the advantages of upgrading your vehicle's braking system.",
      image:
        "https://d1hv7ee95zft1i.cloudfront.net/custom/blog-post-photo/gallery/so-should-you-have-your-brakes-upgraded-612f446ee4dba.jpg",
      comments: 8,
    },
    {
      id: 3,
      title: "5 Common Car Problems and How to Fix Them",
      author: "Michael Johnson",
      date: "2023-03-12",
      content:
        "Encountering car problems can be a hassle, but with the right knowledge, you can often fix them yourself. In this post, we'll cover 5 common car issues and provide step-by-step instructions on how to address them.",
      image:
        "https://www.osv.ltd.uk/wp-content/uploads/2017/07/common-car-problems-image.png",
      comments: 22,
    },
  ];

  return (
    <div className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Our Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-gray-800 rounded-lg shadow-lg">
              <img src={post.image} alt={post.title} className="rounded-t-lg" />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">{post.title}</h2>
                <div className="flex items-center mb-4">
                  <FontAwesomeIcon icon={faUserCircle} className="mr-2" />
                  <span>{post.author}</span>
                  <FontAwesomeIcon icon={faCalendarAlt} className="ml-4 mr-2" />
                  <span>{post.date}</span>
                </div>
                <p className="mb-4">{post.content}</p>
                <div className="flex items-center">
                  <FontAwesomeIcon icon={faCommentAlt} className="mr-2" />
                  <span>{post.comments} Comments</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
