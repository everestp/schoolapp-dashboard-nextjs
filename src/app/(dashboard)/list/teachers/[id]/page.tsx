import React from "react";
import Image from "next/image";
import BigCalendar from "@/components/BigCalender";
import Announcements from "@/components/Announcements";
const SingleTeacherPage = () => {
  return (
    <div className="flex-1 p-4 flex flex-col gap-4 xl:flex-row">
      {/* LEft */}
      <div className="w-full xl:w-2/3">
        {/* Top */}
        <div className="w-full flex-col lg:flex-row gap-4">
          {/* USER INFOCARD */}
          <div className="bg-lamaSky py-6 px-4 rounded-md flex-1 flex gap-4 ">
            <div className="w-1/3">
              <Image
                src="https://images.pexels.com/photos/2888150/pexels-photo-2888150.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt=""
                height={144}
                width={144}
                className="w-36 h-36 rounded-full object-cover"
              />
            </div>
            <div className="w-2/3 flex flex-col justify-between gap-4">
              <h1 className="text-xl font-semibold ">Everest Paudel</h1>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit, amet consectetur adipisicing.
              </p>
              <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">
                <div className="w-fu md:w-1/3 lg:w-full flex items-center gap-2 2xl:w-1/3">
                  <Image src="/blood.png" alt="" height={14} width={14} />
                  <span>A+</span>
                </div>

            

                <div className="w-fu md:w-1/3 lg:w-full flex items-center gap-2 2xl:w-1/3">
                  <Image src="/date.png" alt="" height={14} width={14} />
                  <span>January 205</span>
                </div>

                <div className="w-fu md:w-1/3 lg:w-full flex items-center gap-2 2xl:w-1/3">
                  <Image src="/mail.png" alt="" height={14} width={14} />
                  <span>user@gmai.com</span>
                </div>

                <div className="w-fu md:w-1/3 lg:w-full flex items-center gap-2 2xl:w-1/3">
                  <Image src="/phone.png" alt="" height={14} width={14} />
                  <span>+977 9828722827</span>
                </div>
              </div>
            </div>
          </div>
          {/* Small CARD */}
          <div className="flex-1 flex gap-4 justify-between flex-wrap">
{/* Card */}
<div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:[48%]">
<Image src="/singleAttendance.png" alt="" height={24} width={24}  className="w-6 h-6"/>
<div className="">
    <h1  className="text-xl font-semibold">90%</h1>
    <span className="text-sm text-gray-400">Attendance</span>
</div>
</div>

{/* card 2 */}
<div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:[48%]">
<Image src="/singleLesson.png" alt="" height={24} width={24}  className="w-6 h-6"/>
<div className="">
    <h1  className="text-xl font-semibold">6</h1>
    <span className="text-sm text-gray-400">Lesson</span>
</div>
</div>
{/* 3 */}
<div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:[48%]">
<Image src="/singleClass.png" alt="" height={24} width={24}  className="w-6 h-6"/>
<div className="">
    <h1  className="text-xl font-semibold">6</h1>
    <span className="text-sm text-gray-400">Classes</span>
</div>
</div>

{/* 4 */}
<div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:[48%]">
<Image src="/singleBranch.png" alt="" height={24} width={24}  className="w-6 h-6"/>
<div className="">
    <h1  className="text-xl font-semibold">2</h1>
    <span className="text-sm text-gray-400">Branches</span>
</div>
</div>
          </div>
        </div>
        {/* Bottom */}
        <div className=" mt-4 bg-white rounded-md p-4 h-[800px]">
            <h1>Teacher's Schedule</h1>
            <BigCalendar/>
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full xl:w-1/3">
      <div className="text-xl font-semibold">
        Shortcuts
      </div>
      <Announcements/>
      </div>
    </div>
  );
};

export default SingleTeacherPage;
