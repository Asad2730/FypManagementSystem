import React,{useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import {getUserPropsals} from '../../../DB/db';


const Supervisorhome = () => {

  const navigate = useNavigate();
  const [data,setData] = useState([]);

  localStorage.setItem('sid1','-1')
  localStorage.setItem('sid2','-1')
  
  useEffect(()=>{
    loadData()
  },[])
  

  const loadData =async () =>{
   
    let res = await getUserPropsals();
    setData(res)

  }

  return (
    <>
      {" "}
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {data.map((i)=>(
          <>
           <div
          onClick={() => {
            localStorage.setItem('proposalId',i.proposal._id)
            localStorage.setItem('sid1',i.std1._id)
            localStorage.setItem('sid2',i.std2._id)
            navigate("/Supervisortasks")
          }}
          className="max-w-sm  relative rounded shadow bg-white dark:bg-gray-800"
        >
          <img
            className="h-48 w-96"
            src="https://www.techrepublic.com/wp-content/uploads/2022/03/project-management-software-best-update.jpeg"
          />

          <div className="border-t-2 px-6 pt-5 p-5 sm:mt-3 border-gray-200 dark:border-gray-800">
            <p className="sm:text-lg text-base font-semibold leading-4 text-gray-500 dark:text-gray-400 mt-6">
              {i.proposal.title}
            </p>

            <p className="sm:text-sm text-xs leading-5 text-gray-500 dark:text-gray-400 pt-2">
              {i.std1.firstName} {i.std1.lastName} 
              
            </p>
            <p className="sm:text-sm text-xs leading-5 text-gray-500 dark:text-gray-400 pt-2">
             
              {i.std2.firstName} {i.std2.lastName}
            </p>
          </div>
        </div>{" "}
          </>
        ))}
       
      </div>
    </>
  );
};

export default Supervisorhome;
