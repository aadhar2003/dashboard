import React from "react";
import {
  Bell,
  ChevronDown,
  Briefcase,
  MapPin,
  DollarSign,
  MessageSquare,
  Users,
  Eye,
  Trash2,
  Edit
} from "lucide-react";

const JobPosting = () => {
  return (
    <div className="min-h-screen">
      <header className="flex justify-between items-center mb-3 bg-white border-b p-4">
        <div className="bg-[#E7E7E7] p-2">
          <div className="text-xl font-medium text-red-500">Logo</div>
        </div>
        <nav className="bg-white rounded-full border p-1 inline-flex">
          <button className="bg-red-500 text-white px-4 mr-4 py-2 rounded-full flex items-center">
            <Briefcase className="mr-2" size={16} />
            Jobs
          </button>
          <button className="text-gray-400 px-4 mx-4 py-2 flex items-center">
            <MessageSquare className="mr-2" size={16} />
            Messages
          </button>
          <button className="text-gray-400 px-4 ml-4 py-2 flex items-center">
            <DollarSign className="mr-2" size={16} />
            Payments
          </button>
        </nav>
        <div className="flex items-center space-x-4">
          <Bell className="text-gray-400" size={20} />
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white">
            A
          </div>
          <ChevronDown className="text-gray-400" size={20} />
        </div>
      </header>

      <main className="bg-white">
        <nav className="flex border-b pl-20 items-center">
          <button className="text-red-500 border-b-2 border-red-500 pb-2 mr-6 font-medium">
            Job preview
          </button>
          <button className="text-gray-400 pb-2 mr-6">Applicants</button>
          <button className="text-gray-400 pb-2 mr-6">Match</button>
          <button className="text-gray-400 pb-2">Messages</button>
        </nav>
        
        <div className="flex">
          {/* leftmost  */}
          <div className="w-[80%]">
            <div className="flex justify-between items-start mb-6 border-b pl-20 pt-6">
              <div className="pb-6">
                <h1 className="text-2xl font-bold mb-1">
                  Senior Product Designer
                </h1>
                <div className="text-sm text-gray-500 mb-2">
                  posted 2 days ago{" "}
                  <span className="text-green-500 ml-2">• Open</span>
                </div>
                <div className="flex items-center space-x-4 text-gray-600 text-sm">
                  <div className="flex items-center">
                    <MapPin size={16} className="mr-1" />
                    Delaware, USA
                  </div>
                  <div className="flex items-center">
                    <DollarSign size={16} className="mr-1" />
                    $300k-$400k
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-6 mb-6 border-b pl-20">
              <div className="pb-6">
                <h2 className="font-semibold mb-2 text-sm text-gray-500">
                  Skills Required
                </h2>
                <div className="space-y-2">
                  <div className="flex items-center rounded-lg border-2 w-min px-2 py-0.5">
                    <div className="w-6 h-6 bg-blue-100 rounded mr-2 flex items-center justify-center">
                      <span className="text-blue-600 text-xs font-bold">F</span>
                    </div>
                    <span className="text-sm">Figma</span>
                  </div>
                  <div className="flex items-center rounded-lg border-2 px-2 py-0.5">
                    <div className="w-6 h-6 bg-red-100 rounded mr-2 flex items-center justify-center">
                      <span className="text-red-600 text-xs font-bold">Ai</span>
                    </div>
                    <span className="text-sm">Adobe Illustrator</span>
                  </div>
                  <div className="flex items-center rounded-lg border-2 w-fit px-2 py-0.5">
                    <div className="w-6 h-6 bg-purple-100 rounded mr-2 flex items-center justify-center">
                      <span className="text-purple-600 text-xs font-bold">
                        Xd
                      </span>
                    </div>
                    <span className="text-sm">Adobe XD</span>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="font-semibold mb-2 text-sm text-gray-500">
                  Preferred Language
                </h2>
                <p className="text-sm">English</p>
              </div>
              <div>
                <h2 className="font-semibold mb-2 text-sm text-gray-500">
                  Type
                </h2>
                <p className="text-sm">Full time</p>
              </div>
              <div>
                <h2 className="font-semibold mb-2 text-sm text-gray-500">
                  Years of Experience
                </h2>
                <p className="text-sm">3+ Years of Experience</p>
              </div>
            </div>

            <div className="mb-6 px-20 pt-7">
              <h2 className="font-semibold mb-2 text-sm text-gray-500">
                About the Job
              </h2>
              <ol className="list-decimal list-inside space-y-2 text-sm pl-4">
                <li>Handle the UI/UX research design</li>
                <li>
                  Work on researching on latest web applications designs &
                  trends
                </li>
                <li>Work on conceptualizing and visualizing</li>
                <li>
                  Work on creating graphics content and other graphic related
                  works
                </li>
              </ol>
            </div>

            <div className="mb-6 px-20">
              <h2 className="font-semibold mb-2 text-sm text-gray-500">
                Benefits:
              </h2>
              <ul className="list-disc list-inside space-y-2 text-sm pl-4">
                <li>Health Insurance</li>
                <li>Provident Fund</li>
              </ul>
            </div>

            <div className="mb-6 px-20">
              <h2 className="font-semibold mb-2 text-sm text-gray-500">
                Schedule:
              </h2>
              <ul className="list-disc list-inside text-sm pl-4">
                <li>Day shift</li>
              </ul>
            </div>

            <div className="mb-6 px-20">
              <h2 className="font-semibold mb-2 text-sm text-gray-500">
                Supplemental pay types:
              </h2>
              <ul className="list-disc list-inside space-y-2 text-sm pl-4">
                <li>Performance bonus</li>
                <li>Yearly bonus</li>
              </ul>
            </div>

            <div className="mb-6 px-20 pb-7">
              <h2 className="font-semibold mb-2 text-sm text-gray-500">
                Work Location:
              </h2>
              <span className="text-sm">In person</span>
            </div>

            <div className="border-t pt-6 pl-20 pb-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center text-white text-xl font-bold mr-4">
                  A
                </div>
                <h2 className="text-xl font-bold">Atlassian</h2>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold text-sm text-gray-500">
                    Company size
                  </h3>
                  <p className="text-sm">1k - 2k Employees</p>
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-gray-500">Type</h3>
                  <p className="text-sm">Private</p>
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-gray-500">
                    Sector
                  </h3>
                  <p className="text-sm">
                    Information Technology, Infrastructure
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-gray-500">
                    Funding
                  </h3>
                  <p className="text-sm">Bootstrapped</p>
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-gray-500">
                    Founded In
                  </h3>
                  <p className="text-sm">2019</p>
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-gray-500">
                    Founded By
                  </h3>
                  <p className="text-sm">Scott Farquhar, Mike Cannon-Brookes</p>
                </div>
              </div>
            </div>
          </div>
          <aside className="w-62 bg-[#FCFCFC] border-l flex flex-col">
            <div className="p-6 space-y-4">
              <div className="flex justify-between items-center">
                <button className="mr-5 w-[152px] border border-red-500 text-red-500 px-4 py-2 rounded text-sm flex items-center justify-center">
                <Trash2 size={16} className="mr-2" />
                Delete job
                </button>
                <button className="bg-red-500 w-[152px] text-white px-4 py-2 rounded text-sm flex items-center justify-center">
                <Edit size={16} className="mr-2" />
                Edit job
                </button>
              </div>
            </div>
            <div className="flex-grow">
              <div className="">
              <div className="px-4">
              <div className="flex justify-between items-center border-b p-4">
                  <div className="flex items-center text-gray-600">
                    <Users size={18} className="mr-2" />
                    <span className="text-sm">Applicants</span>
                  </div>
                  <span className="font-semibold">400</span>
                  </div>
                </div>
                <div className="px-4">
                <div className="flex justify-between items-center border-b p-4">
                    <div className="flex items-center text-gray-600">
                    <Users size={18} className="mr-2" />
                    <span className="text-sm">Matches</span>
                    
                    </div>
                    <span className="font-semibold">100</span>
                    
                  </div>
                  
                </div>
                <div className="px-4">
                  <div className="flex justify-between items-center border-b p-4">
                    <div className="flex items-center text-gray-600">
                    <MessageSquare size={18} className="mr-2" />
                    <span className="text-sm">Messages</span>
                    
                    </div>
                    <span className="font-semibold">147</span>
                    
                  </div>
                  
                </div>
                <div className="px-4">
                  <div className="flex justify-between items-center border-b p-4">
                    <div className="flex items-center text-gray-600">
                    <Eye size={18} className="mr-2" />
                    <span className="text-sm">Views</span>
                    
                    </div>
                    <span className="font-semibold">800</span>
                    
                  </div>
                  
                </div>
                
                
               
              </div>
            </div>
          </aside>
        </div>
      </main>
      <div className="h-[80px] bg-[#FCFCFC]"></div>
    </div>
  );
};

export default JobPosting;
