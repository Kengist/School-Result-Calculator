import React from "react";
import Link from "next/link";

const Sidebar = () => {
  // const path = window.location.pathname;

  function getLink(link) {
    return path.indexOf("dashboard") === -1 ? `dashboard/${link}` : link;
  }

  return (
    <div className="sidebar h-100 bg-purple-900 w-1/4">
      <div className="text-center pt-5 text-2xl text-gray-50 font-bold">
        <Link href="/dashboard/">
          <h1>Grade Calculator &rarr;</h1>
        </Link>
      </div>
      <div className="text-center p-4 text-purple-100">
        <ul>
          <li>
            <Link
              href="/dashboard/registerstd"
              className="  border-b border-solid border-white-600 text-xl hover:text-lg hover:text-blue-900 hover:bg-purple-300 my-5 block p-2"
            >
              Register Students
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/registercrs"
              className="border-b border-solid border-white-600 text-xl hover:text-lg hover:text-blue-900 hover:bg-purple-300 my-5 block p-2"
            >
              <h1>Register Course</h1>
            </Link>
          </li>
          {/* <li>
      <Link href='/dashboard/registercls' className='border-b border-solid border-white-600 text-xl hover:text-lg hover:bg-purple-300 my-5 block p-2'><h1>Register Class</h1></Link>
      </li> */}
          <li>
            <Link
              href="/dashboard/registerrlt"
              className="border-b border-solid border-white-600 text-xl hover:text-lg hover:text-blue-900 hover:bg-purple-300 my-5 block p-2"
            >
              <h1>Record Results</h1>
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/viewrlt"
              className="border-b border-solid border-white-600 text-xl hover:text-lg hover:text-blue-900 hover:bg-purple-300 my-5 block p-2"
            >
              <h1>View Results</h1>
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/viewstd"
              className="border-b border-solid border-white-600 text-xl hover:text-lg hover:text-blue-900 hover:bg-purple-300 my-5 block p-2"
            >
              <h1>View Students</h1>
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/viewcls"
              className="border-b border-solid border-white-600 text-xl hover:text-lg hover:text-blue-900 hover:bg-purple-300 my-5 block p-2"
            >
              <h1>View Classes</h1>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
