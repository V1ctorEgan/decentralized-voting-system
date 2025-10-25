import { Plus } from "lucide-react";
import React from "react";

const DashboardHeader = () => {
  return (
    <div className=" ">
      {/* Header */}
      <div className=" flex items-center justify-between px-8 mb-6">
        <h1 className="text-4xl font-bold"> Election Administration Panel</h1>
        <button className="flex flex-row items-center justify-center gap-5 bg-green-600 text-white px-4 py-2 rounded">
          <span>
            <Plus />
          </span>
          Create New Election
        </button>
      </div>
    </div>
  );
};

export default DashboardHeader;
