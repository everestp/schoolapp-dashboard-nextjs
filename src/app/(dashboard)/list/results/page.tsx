import TableSearch from "@/components/TableSearch";
import React from "react";
import Image from "next/image";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import Link from "next/link";
import { examsData, lessonsData, resultsData, role} from "@/lib/data";

type Result = {
  id: number;
  subject: string;
 class:string;
 teacher:string;
 student:string
 type :"exam" |"assignment"
 date:string;
 score:number

};
const columns = [
  {
    header: "Suject Name",
    accessor: "name",
  },
  {
    header: "Student",
    accessor: "student",
   
  
  },
  {
    header: "Score",
    accessor: "score",
    className: "hidden md:table-cell",
  
  },
  {
    header: "Teachers",
    accessor: "teachers",
    className: "hidden md:table-cell",
  },
  {
    header: "Class",
    accessor: "class",
    className: "hidden md:table-cell",
   
  
  },
  {
    header: "Date",
    accessor: "date",
    className: "hidden md:table-cell",
  },
  {
    header: "Actions",
    accessor: "actions",
  },
];
const ResultListPage = () => {
  const renderRow = (item: Result) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight"
    >
      <td className="flex items-center gap-4 p-4">{item.subject}</td>
     
     <td>{item.student}</td>
     <td className="hidden md:table-cell">{item.score}</td>
     
     <td className="hidden md:table-cell">{item.teacher}</td>
     <td className="hidden md:table-cell">{item.class}</td>
     <td className="hidden md:table-cell">{item.date}</td>
    
    
     
      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/result/${item.id}`}>
            <button className="w-7 h-7 flex  items-center justify-center rounded-full bg-lamaSky">
              <Image src="/edit.png" alt="logo" height={16} width={16} />
            </button>
          </Link>

          <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaPurple ">
            <Image src="/delete.png" alt="logo" height={16} width={16} />
          </button>
        </div>
      </td>
    </tr>
  );

  return (
    <div className="bg-white p-4 rounded-md flex-1">
      {/* Top */}
      <div className="flex items-center justify-between">
        <h1 className=" hidden  md:block text-lg font-semibold ">
          All Results
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

            {role === "admin" && (
              <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
                <Image src="/plus.png" alt="" height={14} width={14} />
              </button>
            )}
          </div>
        </div>
      </div>
      {/* List */}

      <Table columns={columns} renderRow={renderRow} data={resultsData} />
      {/* Pagination */}

      <Pagination />
    </div>
  );
};

export default ResultListPage;

