import React, { useEffect, useState } from "react";
import { getStudentTasks, updateTaskStatus } from "../../../DB/db";
import axios from "axios";

const Studentstasks = () => {
  const [studentTasks, setstudentTasks] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    load();
  });

  const load = async () => {
    let rs = await getStudentTasks();
    setData(rs);
  };

  const submit = async (id) => {
    console.log("id", id);
    let rs = await updateTaskStatus(id, "completed");
    console.log(rs);
    load();
  };

  const getTasks = async () => {
    const url = "http://localhost:8000/api/taskplan/";
    const { data } = await axios.get(url);
    setstudentTasks(data);
  };
  useEffect(() => {
    getTasks();
  }, []);

  return (
    <>
      {" "}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-base mt-3  font-semibold leading-6 text-gray-900">
              Tasks
            </h1>
          </div>
        </div>
      </div>
      <div className="mt-8 flow-root overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <table className="w-full text-left">
            <thead className="bg-white">
              <tr>
                <th
                  scope="col"
                  className="relative isolate py-3.5 pr-3 text-left text-sm font-semibold text-gray-900"
                >
                  Name
                  <div className="absolute inset-y-0 right-full -z-10 w-screen border-b border-b-gray-200" />
                  <div className="absolute inset-y-0 left-0 -z-10 w-screen border-b border-b-gray-200" />
                </th>
                <th
                  scope="col"
                  className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
                >
                  Description
                </th>
<<<<<<< HEAD
                <th
                  scope="col"
                  className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
                >
                  File
                </th>
                <th
                  scope="col"
                  className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
                >
                  Deadline
                </th>
=======
>>>>>>> 7be9394b4a6e442c17dde6d0f8c45c2841b57453

                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Remarks
                </th>

                <th scope="col" className="relative py-3.5 pl-3">
                  <span className="sr-only">Edit</span>
                </th>
<<<<<<< HEAD
=======

>>>>>>> 7be9394b4a6e442c17dde6d0f8c45c2841b57453
                <th scope="col" className="relative py-3.5 pl-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {studentTasks.map((task) =>
                task.taskPlan.type == "task" ? (
                  <tr key={task.taskPlan._id}>
                    <td className="relative py-4 pr-3 text-sm font-medium text-gray-900">
                      {task.taskPlan.name}
                      <div className="absolute bottom-0 right-full h-px w-screen bg-gray-100" />
                      <div className="absolute bottom-0 left-0 h-px w-screen bg-gray-100" />
<<<<<<< HEAD
                    </td>
                    <td className="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">
                      {task.taskPlan.description}
                    </td>
                    <td className="hidden px-3 py-4 text-sm text-gray-500 md:table-cell">
                      {task.taskPlan.file}
                    </td>
                    <td className="hidden px-3 py-4 text-sm text-gray-500 md:table-cell">
                      {task.taskPlan.deadline.split("T")[0]}
                    </td>
                    <td className="hidden px-3 py-4 text-sm text-gray-500 md:table-cell"></td>
                    <td className="relative py-4 pl-3 text-right text-sm font-medium "></td>
                    <td className="relative py-4 space-x-5 text-right text-sm font-medium">
                      <button
                        onClick={() => submit(task._id)}
                        className=" bg-green-600 hover:bg-green-500 text-white px-2 py-2 rounded-lg "
                      >
                        Download
                      </button>
                      <button
                        onClick={() => submit(task._id)}
                        className=" bg-gray-800 hover:bg-gray-600 text-white px-2 py-2 rounded-lg "
                      >
                        Submit
                      </button>
                    </td>
=======
                    </td>
                    <td className="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">
                      {task.taskPlan.description}
                    </td>
                    <td className="hidden px-3 py-4 text-sm text-gray-500 md:table-cell">
                      {task.taskPlan.deadline.split("T")[0]}
                    </td>

                    <td className="relative py-4 pl-3 text-right text-sm font-medium">
                      <td className="relative py-4  text-right text-sm font-medium">
                        <button
                          onClick={() => submit(task._id)}
                          className=" bg-green-600 hover:bg-green-500 text-white px-2 py-2 rounded-lg "
                        >
                          Apply
                        </button>
                      </td>
                    </td>
>>>>>>> 7be9394b4a6e442c17dde6d0f8c45c2841b57453
                  </tr>
                ) : (
                  <tr></tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Studentstasks;
