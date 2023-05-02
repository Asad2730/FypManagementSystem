import React from "react";
import { useNavigate } from "react-router-dom";

const Supervisorhome = () => {
  const navigate = useNavigate();
  return (
    <>
      {" "}
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        <div
          onClick={() => navigate("/Supervisortasks")}
          className="max-w-sm  relative rounded shadow bg-white dark:bg-gray-800"
        >
          <img
            className="h-48 w-96"
            src="https://www.techrepublic.com/wp-content/uploads/2022/03/project-management-software-best-update.jpeg"
          />

          <div className="border-t-2 px-6 pt-5 p-5 sm:mt-3 border-gray-200 dark:border-gray-800">
            <p className="sm:text-lg text-base font-semibold leading-4 text-gray-500 dark:text-gray-400 mt-6">
              Project Idea
            </p>

            <p className="sm:text-sm text-xs leading-5 text-gray-500 dark:text-gray-400 pt-2">
              Here some project description if any !
            </p>
          </div>
        </div>{" "}
        <div
          onClick={() => navigate("/Supervisortasks")}
          className="max-w-sm  relative rounded shadow bg-white dark:bg-gray-800"
        >
          <img
            className="h-48 w-96"
            src="https://www.techrepublic.com/wp-content/uploads/2022/03/project-management-software-best-update.jpeg"
          />

          <div className="border-t-2 px-6 pt-5 p-5 sm:mt-3 border-gray-200 dark:border-gray-800">
            <p className="sm:text-lg text-base font-semibold leading-4 text-gray-500 dark:text-gray-400 mt-6">
              Project Idea
            </p>

            <p className="sm:text-sm text-xs leading-5 text-gray-500 dark:text-gray-400 pt-2">
              Here some project description if any !
            </p>
          </div>
        </div>
        <div
          onClick={() => navigate("/Supervisortasks")}
          className="max-w-sm  relative rounded shadow bg-white dark:bg-gray-800"
        >
          <img
            className="h-48 w-96"
            src="https://www.techrepublic.com/wp-content/uploads/2022/03/project-management-software-best-update.jpeg"
          />

          <div className="border-t-2 px-6 pt-5 p-5 sm:mt-3 border-gray-200 dark:border-gray-800">
            <p className="sm:text-lg text-base font-semibold leading-4 text-gray-500 dark:text-gray-400 mt-6">
              Project Idea
            </p>

            <p className="sm:text-sm text-xs leading-5 text-gray-500 dark:text-gray-400 pt-2">
              Here some project description if any !
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Supervisorhome;
