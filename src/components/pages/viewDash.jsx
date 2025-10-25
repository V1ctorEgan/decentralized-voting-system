import React from "react";
import {
  LayoutDashboard,
  BarChart3,
  Users,
  Vote,
  Settings,
  Menu,
  X,
  CheckCircle,
} from "lucide-react";

const ViewDash = () => {
  // const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const elections = [
    { title: "Presidential Election", progress: 85, status: "Active" },
    { title: "Student Union Election", progress: 100, status: "Completed" },
    { title: "Local Government Poll", progress: 45, status: "Ongoing" },
  ];

  const stats = [
    { title: "Total Elections", value: 12, icon: LayoutDashboard },
    { title: "Registered Voters", value: "1,243", icon: Users },
    { title: "Active Elections", value: 3, icon: BarChart3 },
    { title: "Votes Cast", value: "6,429", icon: Vote },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Main Body */}
      <main className="flex-1 p-6 space-y-6">
        <h2 className="text-2xl font-bold text-gray-800">
          Welcome back, Admin 👋
        </h2>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.title}
              className="bg-white p-5 rounded-2xl shadow hover:shadow-md transition"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm">{stat.title}</p>
                  <h3 className="text-2xl font-bold text-gray-800">
                    {stat.value}
                  </h3>
                </div>
                <div className="p-3 bg-indigo-100 rounded-xl">
                  <stat.icon className="w-6 h-6 text-indigo-600" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Elections Table */}
        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="text-lg font-semibold mb-4">Recent Elections</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="text-left text-gray-600 border-b">
                  <th className="p-2">Election</th>
                  <th className="p-2">Progress</th>
                  <th className="p-2">Status</th>
                  <th className="p-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {elections.map((election) => (
                  <tr key={election.title} className="border-b">
                    <td className="p-2 font-medium">{election.title}</td>
                    <td className="p-2">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-indigo-600 h-2 rounded-full"
                          style={{ width: `${election.progress}%` }}
                        ></div>
                      </div>
                    </td>
                    <td className="p-2">
                      <span
                        className={`px-3 py-1 text-sm rounded-full ${
                          election.status === "Completed"
                            ? "bg-green-100 text-green-700"
                            : election.status === "Active"
                            ? "bg-indigo-100 text-indigo-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {election.status}
                      </span>
                    </td>
                    <td className="p-2">
                      <button className="flex items-center space-x-1 text-indigo-600 hover:text-indigo-800 font-medium">
                        <CheckCircle className="w-4 h-4" />
                        <span>View</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ViewDash;
