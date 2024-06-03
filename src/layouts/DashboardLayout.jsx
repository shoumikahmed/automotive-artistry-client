import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useSignOut } from "react-firebase-hooks/auth";
import auth from "../firebase/firebase.config";

export default function DashboardLayout() {
  const [signOut] = useSignOut(auth);

  const handleLogout = async () => {
    await signOut();
  };

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="mt-11 drawer-content flex flex-col items-center justify-center">
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content flex flex-col justify-between">
          {/* Sidebar content here */}
          <div>
            <li className="pb-4 pt-6 font-semibold">
              <Link className=" shadow-lg py-3" to={"home"}>
                Dashboard
              </Link>
            </li>
            <li className="pb-4 font-semibold">
              <Link className=" shadow-lg py-3" to={"/dashboard/all-cars"}>
                All Cars
              </Link>
            </li>
            <li className="pb-4 font-semibold">
              <Link className=" shadow-lg py-3" to={"/dashboard/add-cars"}>
                Add Cars
              </Link>
            </li>
          </div>
          <div className=" mb-10 flex justify-between px-4">
            <Link
              to={"/"}
              className="btn bg-transparent shadow-black hover:text-black hover:bg-white"
            >
              home
            </Link>
            <button
              className="btn bg-transparent shadow-black hover:text-black hover:bg-white"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
}
