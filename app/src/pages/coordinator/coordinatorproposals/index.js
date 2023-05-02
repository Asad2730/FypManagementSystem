import React from "react";
import { useNavigate } from "react-router-dom";
const people = [
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
    remarks: "remarks",
  },
];
const CoordinatorProposals = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className=" text-center text-2xl mt-6 font-semibold leading-6 text-gray-900">
              Proposals
            </h1>
            <p className="mt-2 text-sm text-gray-700">
              A list of all the users in your account including their name,
              title, email and role.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        <div className="max-w-sm  relative rounded shadow bg-white dark:bg-gray-800">
          <img
            className="h-48 w-96"
            src="https://www.techrepublic.com/wp-content/uploads/2022/03/project-management-software-best-update.jpeg"
          />

          <div className="border-t-2 px-6 pt-5 p-5 sm:mt-3 border-gray-200 dark:border-gray-800">
            <p className="sm:text-lg text-base font-semibold leading-4 text-gray-500 dark:text-gray-400 mt-6">
              Project Name
            </p>

            <p className="sm:text-sm text-xs leading-5 text-gray-500 dark:text-gray-400 pt-2">
              Here some project description if any !
            </p>

            <label
              htmlFor="location"
              className="block text-sm font-medium leading-6 text-white"
            >
              Evaluator
            </label>
            <select
              id="location"
              name="location"
              className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
              defaultValue="Canada"
            >
              <option>Evaluator 1</option>
              <option>Evaluator 2</option>
              <option>Evaluator 3</option>
            </select>
            <div className="space-x-4 mt-3">
              <button className="bg-green-500 hover:bg-green-700 px-2 py-1 rounded-lg text-white ">
                Accept
              </button>
              <button className="bg-red-500 hover:bg-red-700  px-2 py-1 rounded-lg text-white ">
                Reject
              </button>
            </div>
          </div>
        </div>{" "}
        <div className="max-w-sm  relative rounded shadow bg-white dark:bg-gray-800">
          <img
            className="h-48 w-96"
            src="https://www.techrepublic.com/wp-content/uploads/2022/03/project-management-software-best-update.jpeg"
          />

          <div className="border-t-2 px-6 pt-5 p-5 sm:mt-3 border-gray-200 dark:border-gray-800">
            <p className="sm:text-lg text-base font-semibold leading-4 text-gray-500 dark:text-gray-400 mt-6">
              Project Name
            </p>

            <p className="sm:text-sm text-xs leading-5 text-gray-500 dark:text-gray-400 pt-2">
              Here some project description if any !
            </p>

            <label
              htmlFor="location"
              className="block text-sm font-medium leading-6 text-white"
            >
              Evaluator
            </label>
            <select
              id="location"
              name="location"
              className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
              defaultValue="Canada"
            >
              <option>Evaluator 1</option>
              <option>Evaluator 2</option>
              <option>Evaluator 3</option>
            </select>
            <div className="space-x-4 mt-3">
              <button className="bg-green-500 hover:bg-green-700 px-2 py-1 rounded-lg text-white ">
                Accept
              </button>
              <button className="bg-red-500 hover:bg-red-700  px-2 py-1 rounded-lg text-white ">
                Reject
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-sm  relative rounded shadow bg-white dark:bg-gray-800">
          <img
            className="h-48 w-96"
            src="https://www.techrepublic.com/wp-content/uploads/2022/03/project-management-software-best-update.jpeg"
          />

          <div className="border-t-2 px-6 pt-5 p-5 sm:mt-3 border-gray-200 dark:border-gray-800">
            <p className="sm:text-lg text-base font-semibold leading-4 text-gray-500 dark:text-gray-400 mt-6">
              Project Name
            </p>

            <p className="sm:text-sm text-xs leading-5 text-gray-500 dark:text-gray-400 pt-2">
              Here some project description if any !
            </p>

            <label
              htmlFor="location"
              className="block text-sm font-medium leading-6 text-white"
            >
              Evaluator
            </label>
            <select
              id="location"
              name="location"
              className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
              defaultValue="Canada"
            >
              <option>Evaluator 1</option>
              <option>Evaluator 2</option>
              <option>Evaluator 3</option>
            </select>
            <div className="space-x-4 mt-3">
              <button className="bg-green-500 hover:bg-green-700 px-2 py-1 rounded-lg text-white ">
                Accept
              </button>
              <button className="bg-red-500 hover:bg-red-700  px-2 py-1 rounded-lg text-white ">
                Reject
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoordinatorProposals;
