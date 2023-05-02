import React from "react";

const Addtask = () => {
  return (
    <>
      {" "}
      <form>
        <div className="space-y-12 p-3 sm:space-y-16">
          <div>
            <h2 className="text-base text-center font-semibold leading-7 text-gray-900">
              Add Task Form
            </h2>
            {/* <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-600">
              Use a permanent address where you can receive mail.
            </p> */}

            <div className="mt-10 space-y-8 border-b border-gray-900/10 pb-12 sm:space-y-0 sm:divide-y sm:divide-gray-900/10 sm:border-t sm:pb-0">
              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Name
                </label>
                <div className="mt-2">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Enter name here"
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Assignto
                </label>
                <div className="mt-2">
                  <select
                    id="location"
                    name="location"
                    className=" block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue="Student 1"
                  >
                    <option>student 1</option>
                    <option>student 2</option>
                    <option>student 3</option>
                  </select>
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Description
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="email"
                    id="email"
                    className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Enter Description"
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  File
                </label>
                <div className="mt-2">
                  <input
                    type="file"
                    name="email"
                    id="email"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Deadline
                </label>
                <div className="mt-2">
                  <input
                    type="date"
                    name="email"
                    id="email"
                    className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Enter Description"
                  />
                </div>
              </div>
            </div>

            <div className="mt-3 flex items-center justify-center gap-x-6">
              <button
                type="button"
                className="bg-green-500 hover:bg-green-400 px-3 py-2 rounded-lg text-white text-sm font-semibold leading-6 "
              >
                Submit
              </button>
              <button
                type="button"
                className="bg-red-500 hover:bg-red-400 px-3 py-2 rounded-lg text-white text-sm font-semibold leading-6 "
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Addtask;
