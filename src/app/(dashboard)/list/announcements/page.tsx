import TableSearch from "@/components/TableSearch";
import React from "react";
import Image from "next/image";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import Link from "next/link";
import { announcementsData, examsData, lessonsData, role} from "@/lib/data";
import FormModal from "@/components/FormModal";
type Announcement = {
  id: number;
  title: string;
 class:string;
 date:string
};
const columns = [
  {
    header: "Tittle",
    accessor: "tittle",
  },
  {
    header: "Class",
    accessor: "class",
   
  
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
const AnnouncementListPage = () => {
  const renderRow = (item: Announcement) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight"
    >
      <td className="flex items-center gap-4 p-4">{item.title}</td>
     <td >{item.class}</td>
     <td className="hidden md:table-cell">{item.date}</td>
    
     
      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/class/${item.id}`}>
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
          All Annoucement
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
            //   <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
            //     <Image src="/plus.png" alt="" height={14} width={14} />
            //   </button>
             <FormModal type="create" table={"announcement"} />
            )}
          </div>
        </div>
      </div>
      {/* List */}

      <Table columns={columns} renderRow={renderRow} data={announcementsData} />
      {/* Pagination */}

      <Pagination />
    </div>
  );
};

export default AnnouncementListPage;

