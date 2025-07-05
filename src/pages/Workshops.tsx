import { useSelector } from "react-redux";
import Dropdown from "../components/Dropdown";
import IconClock from "../components/Icon/IconClock";
import IconHorizontalDots from "../components/Icon/IconHorizontalDots";
import IconSquareCheck from "../components/Icon/IconSquareCheck";
import { RootState } from "../store/store";


// const Workshops =()=>{
//   const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl' ? true : false;
    

//   return(
//     <div className="panel h-full w-96">
//   {/* Workshop Header */}
//   <div className="flex items-center justify-between border-b border-white-light dark:border-[#1b2e4b] -m-5 mb-5 p-5">
//     <button type="button" className="flex font-semibold">
//       {/* <div className="shrink-0 bg-secondary w-10 h-10 rounded-md flex items-center justify-center text-white ltr:mr-4 rtl:ml-4">
//         <span>FD</span>
//       </div> */}
//       {/* <div style={{ textAlign: 'left' }}>
//         <h6>Figma Design</h6>
//         <p className="text-xs text-white-dark mt-1">Design Reset</p>
//       </div> */}
//       <div style={{ textAlign: 'left' }}>
//     {/* <h5 className="font-semibold mb-3">Upcoming Workshops</h5> */}
//     <p className="text-white-dark mb-3">Workshop Title: Advanced UI/UX Design</p>
//     <p className="text-xs text-white-dark">Date: 20th December 2024</p>
//     <p className="text-xs text-white-dark">Time: 3:00 PM - 5:00 PM</p>
//     <p className="text-xs text-white-dark">Location: Virtual</p>
//     <h4 className=" text-success mt-2">Status: Enrolled</h4>
//   </div>
//     </button>

//     {/* <div className="dropdown">
//       <Dropdown
//         offset={[0, 5]}
//         placement={`${isRtl ? 'bottom-start' : 'bottom-end'}`}
//         btnClassName="hover:text-primary"
//         button={<IconHorizontalDots className="w-5 h-5 text-black/70 dark:text-white/70 hover:!text-primary" />}
//       >
//         <ul>
//           <li>
//             <button type="button">View Project</button>
//           </li>
//           <li>
//             <button type="button">Edit Project</button>
//           </li>
//           <li>
//             <button type="button">Mark as Done</button>
//           </li>
//         </ul>
//       </Dropdown>
//     </div> */}
//   </div>

//   {/* Enrolled Workshops */}
//   {/* <div className="group mb-6">
//     <h5 className="font-semibold mb-3">Upcoming Workshops</h5>
//     <div className="text-white-dark mb-3">Workshop Title: Advanced UI/UX Design</div>
//     <div className="text-xs text-white-dark">Date: 20th December 2024</div>
//     <div className="text-xs text-white-dark">Time: 3:00 PM - 5:00 PM</div>
//     <div className="text-xs text-white-dark">Location: Virtual</div>
//     <div className="text-xs text-success mt-2">Status: Enrolled</div>
//   </div> */}

//   {/* Progress Tracking */}
//   <div className="group mb-6">
//     <h5 className="font-semibold mb-3">Progress</h5>
//     <div className="flex items-center justify-between mb-2 font-semibold">
//       {/* <div className="flex items-center">
//         <IconSquareCheck className="w-4 h-4 text-success" />
//         <div className="ltr:ml-2 rtl:mr-2 text-xs">6 Modules</div>
//       </div> */}
//       <p className="text-primary">75% Completed</p>
//     </div>
//     <div className="rounded-full h-2.5 p-0.5 bg-dark-light dark:bg-dark-light/10 mb-3">
//       <div
//         className="bg-gradient-to-r from-[#1e9afe] to-[#60dfcd] h-full rounded-full"
//         style={{ width: '75%' }}
//       ></div>
//     </div>
//   </div>

//   {/* Workshop Certificates */}
//   <div className="group">
//     {/* <h5 className="font-semibold mb-3">Certificate Available</h5> */}
//     <div className="flex items-center justify-between mb-2">
//       <span className="text-sm">Certificate Granted!</span>
//       <div className="space-x-2">
//       <button
//         type="button"
//         className="text-primary hover:underline text-sm"
//         // onClick={() => alert('Downloading Certificate...')}
//       >
//         View
//       </button>
//       <button
//         type="button"
//         className="text-primary hover:underline text-sm"
//         onClick={() => alert('Downloading Certificate...')}
//       >
//         Download
//       </button>

//       </div>
     
//     </div>
//   </div>

//   {/* Additional Details */}
//   {/* <div className="flex items-end justify-between mt-5">
//     <div className="flex items-center rounded-full bg-danger/20 px-2 py-1 text-xs text-danger font-semibold">
//       <IconClock className="w-3 h-3 ltr:mr-1 rtl:ml-1" />5 Days Left
//     </div>
//     <div className="flex items-center justify-center group-hover:-space-x-2 rtl:space-x-reverse rtl:group-hover:space-x-reverse">
//       <img
//         className="w-9 h-9 border-2 border-white dark:border-dark rounded-full object-cover transition-all duration-300"
//         src="/assets/images/profile-6.jpeg"
//         alt="profile6"
//       />
//       <img
//         className="w-9 h-9 border-2 border-white dark:border-dark rounded-full object-cover transition-all duration-300"
//         src="/assets/images/profile-7.jpeg"
//         alt="profile7"
//       />
//     </div>
//   </div> */}
// </div>

//   );

// };

// export default Workshops;

const WorkshopCard = () => {
  const isRtl = useSelector((state: RootState) => state.themeConfig.rtlClass) === 'rtl' ? true : false;

  const workshops = [
    {
      title: "Digital Illustration Calligraphy Design",
      date: "September 20, 2024",
      time: "9:00 am",
      location: "Physical",
      status: "In Progress",
      progress: 60,
    },
    {
      title: "Arabic Calligraphy and Modern Art",
      date: "October 5, 2024",
      location: "Physical",
      time: "11:00 am",
      status: "Not Started",
      progress: 0,
    },
    {
      title: "Photography in Urban Landscapes",
      date: "November 1, 2024",
      location: "Physical",
      time: "2:00 pm",
      status: "In Progress",
      progress: 20,
    },
    {
      title: "From Concept to Creation",
      date: "November 20, 2024",
      location: "Virtual",
      time: "7:00 pm",
      status: "Completed",
      progress: 100,
    },
    {
      title: "Exploring Techniques and Creativity",
      date: "December 15, 2024",
      location: "Virtual",
      time: "12:30 pm",
      status: "Not Started",
      progress: 0,
    },
    {
      title: "Advanced Painting Techniques",
      date: "March 20, 2025",
      location: "Physical",
      time: "7:30 pm",
      status: "Completed",
      progress: 100,
    },
    {
      title: "Brand Identity Design",
      date: "February 15-17, 2025",
      location: "Virtual",
      time: "9:00 am",
      status: "In Progress",
      progress: 45,
    },
    {
      title: "Modern Sculpture Forms",
      date: "May 24-28, 2025",
      location: "Physical",
      time: "8:00 am",
      status: "Completed",
      progress: 100,
    },
  ];

  // Sort workshops so completed workshops appear at the end
  const sortedWorkshops = workshops.sort((a, b) => {
    if (a.status === "Completed" && b.status !== "Completed") return 1;
    if (a.status !== "Completed" && b.status === "Completed") return -1;
    return 0;
  });

  return (
    <div className="panel h-full">
      <h2 className="text-lg mb-8 font-montserrat-regular text-yankees-blue dark:text-gray-200">
            Workshops
          </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {sortedWorkshops.map((workshop, index) => {
          const isCompleted = workshop.progress === 100 && workshop.status === "Completed";
          const progressBarColor = isCompleted ? 'bg-green-500' : 'bg-gradient-to-r from-pewter-blue to-yankees-blue';

          return (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
              {/* Workshop Header */}
              <div className="flex flex-col p-6">
                <p className="text-xl font-montserrat-medium text-yankees-blue mb-3">{workshop.title}</p>
                <p className="text-sm text-yankees-blue font-montserrat-light">Date: {workshop.date}</p>
                <p className="text-sm text-yankees-blue font-montserrat-light">Time: {workshop.time}</p>
                <p className="text-sm text-yankees-blue font-montserrat-light">Location: {workshop.location}</p>
                <h4 className={`mt-3 font-montserrat-regular ${workshop.status === "Completed" ? "text-green-500" : "text-pewter-blue"}`}>
                  Status: {workshop.status}
                </h4>
              </div>

              {/* Progress Tracking */}
              <div className="px-6 pb-6">
                <h5 className="font-montserrat-regular text-yankees-blue mb-3">Progress</h5>
                <div className="flex items-center justify-between mb-4">
                  <p className={`text-${workshop.progress === 100 ? "green-500" : "pewter-blue"}`}>
                    {workshop.progress}% Completed
                  </p>
                </div>
                <div className="rounded-full h-2.5 p-0.5 bg-gray-200 mb-4">
                  <div
                    className={`${progressBarColor} h-full rounded-full`}
                    style={{ width: `${workshop.progress}%` }}
                  ></div>
                </div>
              </div>

              {/* Workshop Certificates */}
              {isCompleted && (
                <div className="px-6 pb-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-montserrat-regular text-yankees-blue">Certificate Granted!</span>
                    <div className="space-x-2">
                      <button type="button" className="text-yankees-blue hover:underline text-sm">
                        View
                      </button>
                      <button
                        type="button"
                        className="text-yankees-blue hover:underline text-sm"
                        onClick={() => alert("Downloading Certificate...")}
                      >
                        Download
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};


export default WorkshopCard;
