import TableSearch from "@/components/TableSearch";
import React from "react";
import Image from "next/image";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
const TeacherListPage = () => {

const columns =[
  {
    header:"Info",
     accessor: "info"
  
  },
  {
    header :"Teacher ID",
    accessor :"techerId",
    className :"hidden md:table-cell"
  },
  {
    header :"Subjects",
    accessor :"subject",
    className :"hidden md:table-cell"
  },
  {
    header :"Classes",
    accessor :"classes",
    className :"hidden md:table-cell"
  },
  {
    header :"Phone",
    accessor :"phone",
    className :"hidden lg:table-cell"
  },
  {
    header :"Address",
    accessor :"address",
    className :"hidden lg:table-cell"
  },
  {
    header :"Actions",
    accessor :"actions",
    
  }

]
  return (
    <div className="bg-white p-4 rounded-md flex-1">
      {/* Top */}
      <div className="flex items-center justify-between">
        <h1 className=" hidden  md:block text-lg font-semibold ">
          All Teachers
        </h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className=" flex items-center gap-4 self-end ">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/filter.png" alt="" height={14} width={14} />
            </button>

            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/sort.png" alt="" height={14} width={14} />
            </button>

            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/plus.png" alt="" height={14} width={14} />
            </button>
          </div>
        </div>
      </div>
      {/* List */}
     
<Table columns={columns}/>
      {/* Pagination */}

      <Pagination />
    </div>
  );
};

export default TeacherListPage;
