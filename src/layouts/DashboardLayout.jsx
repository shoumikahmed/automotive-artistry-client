import React from "react";
import { Outlet } from "react-router-dom";
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
            <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </div>
          <div className="mx-auto mb-10">
            <button className="btn btn-primary" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
}
