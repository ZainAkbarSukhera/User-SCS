
// import PurchaseSummary from "../components/dashboard/purchaseSummary"; // Correct casing for component names
import { useEffect, useState, FC } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import PerfectScrollbar from 'react-perfect-scrollbar';
import Dropdown from '../components/Dropdown';
import { setPageTitle } from '../store/themeConfigSlice';
import IconHorizontalDots from '../components/Icon/IconHorizontalDots';
import IconDollarSign from '../components/Icon/IconDollarSign';
import IconInbox from '../components/Icon/IconInbox';
import IconTag from '../components/Icon/IconTag';
import IconCreditCard from '../components/Icon/IconCreditCard';
import IconShoppingCart from '../components/Icon/IconShoppingCart';
import IconArrowLeft from '../components/Icon/IconArrowLeft';
import IconCashBanknotes from '../components/Icon/IconCashBanknotes';
import IconUser from '../components/Icon/IconUser';
import IconNetflix from '../components/Icon/IconNetflix';
import IconBolt from '../components/Icon/IconBolt';
import IconCaretDown from '../components/Icon/IconCaretDown';
import IconPlus from '../components/Icon/IconPlus';
import IconMultipleForwardRight from '../components/Icon/IconMultipleForwardRight';
import IconEye from '../components/Icon/IconEye';
import IconThumbUp from '../components/Icon/IconThumbUp';
import IconCaretsDown from '../components/Icon/IconCaretsDown';

interface MessageCardProps {
  profileImg?: string;
  name: string;
  date: string;
  message: string;
  likes?: number;
}

interface ActivityItemProps {
  color?: string;
  title: string;
  date: string;
  time: string;
  badgeText?: string;
  badgeColor?: string;
}


const messagesData = [
  {
    profileImg: "/assets/images/profile-artist-1.jpeg",
    name: "Aisha Al-Shehri",
    date: "Friday, Jan 12",
    message: `"Thrilled to share my latest artwork!" Thanks to Saudi Creative Streams for providing a platform to showcase my creativity to the world.`,
    likes: 892,
},
{
  profileImg: "/assets/images/profile-artist-5.jpeg",
  name: "Noor Al-Johani",
  date: "Tuesday, Jan 16",
  message: `"Excited to announce that my artwork is now available" on the marketplace! Purchase exclusively on the platform.`,
  likes: 814,
},
{
  profileImg: "/assets/images/profile-artist-3.jpeg",
  name: "Fatima Al-Harbi",
  date: "Sunday, Jan 14",
  message: `You have been enrolled in the upcoming workshop. We look forward to seeing you on 28th January.`,
  likes: 733,
},
];

// const MessageCard = ({ profileImg, name, date, message, likes }) => {
//     return (
//         <div className="panel h-60 w-96 mt-4 ml-4">
//             <div className="flex items-start border-b border-white-light dark:border-[#1b2e4b] -m-5 mb-5 p-5">
//                 {/* <div className="shrink-0 ring-2 ring-white-light dark:ring-dark rounded-full ltr:mr-4 rtl:ml-4">
//                     <img src={profileImg} alt={name} className="w-10 h-10 rounded-full object-cover" />
//                 </div> */}
//                 <div className="font-montserrat-regular text-yankees-blue">
//                     <h6>{name}</h6>
//                     <p className="text-xs font-montserrat-light text-white-dark mt-1">{date}</p>
//                 </div>
//             </div>
//             <div>
//                 <div className="text-yankees-blue font-montserrat-light pb-8">{message}</div>
//                 <div className="w-full absolute bottom-0 flex items-center justify-between p-5 -mx-5">
//                     {/* <div className="flex items-center">
//                         <IconThumbUp className="w-5 h-5 text-info inline ltr:mr-1.5 rtl:ml-1.5 relative -top-0.5" />
//                         <span className="dark:text-info">{likes} Likes</span>
//                     </div> */}
//                     <Link to="/messages">
                   
//                     <button
//                         type="button"
//                         className="flex items-center bg-yankees-blue text-white rounded-md px-1.5 py-1 text-xs hover:shadow-[0_10px_20px_-10px] hover:shadow-sky-950"
//                     >
//                         Go to Mailbox
//                         <IconCaretsDown className="w-4 h-4 rtl:rotate-90 -rotate-90 ltr:ml-1.5 rtl:mr-1.5" />
//                     </button>
//                     </Link>
//                 </div>
//             </div>
//         </div>
//     );
// };

const MessageCard: FC<MessageCardProps> = ({
  profileImg = "/default-profile.png",
  name,
  date,
  message,
  likes = 0,
}) => {
  return (
      <div className="panel h-60 w-96 mt-4 ml-4 relative">
          <div className="flex items-start border-b border-white-light dark:border-[#1b2e4b] -m-5 mb-5 p-5">
              <div className="shrink-0 ring-2 ring-white-light dark:ring-dark rounded-full ltr:mr-4 rtl:ml-4">
                  <img src={profileImg} alt={name} className="w-10 h-10 rounded-full object-cover" />
              </div>
              <div className="font-montserrat-regular text-yankees-blue">
                  <h6>{name}</h6>
                  <p className="text-xs font-montserrat-light text-white-dark mt-1">{date}</p>
              </div>
          </div>
          <div>
              <div className="text-yankees-blue font-montserrat-light pb-8">{message}</div>
              <div className="w-full absolute bottom-0 flex items-center justify-between p-5 -mx-5">
                  <div className="flex items-center">
                      <IconThumbUp className="w-5 h-5 text-info inline ltr:mr-1.5 rtl:ml-1.5 relative -top-0.5" />
                      <span className="dark:text-info">{likes} Likes</span>
                  </div>
                  <Link to="/messages">
                      <button
                          type="button"
                          className="flex items-center bg-yankees-blue text-white rounded-md px-1.5 py-1 text-xs hover:shadow-[0_10px_20px_-10px] hover:shadow-sky-950"
                      >
                          Go to Mailbox
                          <IconCaretsDown className="w-4 h-4 rtl:rotate-90 -rotate-90 ltr:ml-1.5 rtl:mr-1.5" />
                      </button>
                  </Link>
              </div>
          </div>
      </div>
  );
};


// const ActivityItem = ({ color, title,date,  time, badgeText, badgeColor }) => {
//     return (
//         <div className="flex items-center py-1.5 relative group">
//             <div className={`w-1.5 h-1.5 rounded-full ltr:mr-1 rtl:ml-1.5 bg-${color}`}></div>
//             <div className="flex-1 text-yankees-blue font-montserrat-light">{title}</div>
//             <div className="ltr:ml-auto rtl:mr-auto text-xs font-montserrat-light text-white-dark dark:text-gray-500">{date}</div>
//         </div>
//     );
// };

const ActivityItem: FC<ActivityItemProps> = ({ color = "defaultColor", title, date, time, badgeText = "", badgeColor = "" }) => {
  return (
      <div className="flex items-center py-1.5 relative group">
          <div className={`w-1.5 h-1.5 rounded-full ltr:mr-1 rtl:ml-1.5 bg-${color}`}></div>
          <div className="flex-1 text-yankees-blue font-montserrat-light">{title}</div>
          <div className="ltr:ml-auto rtl:mr-auto text-xs font-montserrat-light text-white-dark dark:text-gray-500">
              {date}
          </div>
      </div>
  );
};


const upcomingWorkshops = [
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
    }
  ];

const Dashboard = () => {
    const isRtl = useSelector((state: RootState) => state.themeConfig.rtlClass) === 'rtl' ? true : false;

    const workshops = [
        {
            title: "Art of Painting",
            date: "25 Dec 2024",
            location: "Art Gallery, Riyadh",
            description: "Learn advanced painting techniques from renowned artists.",
        },
        {
            title: "Digital Illustration Basics",
            date: "30 Dec 2024",
            location: "Innovation Hub, Jeddah",
            description: "Introduction to creating stunning digital illustrations.",
        },
        {
            title: "Sculpting Workshop",
            date: "10 Jan 2025",
            location: "Creative Center, Dammam",
            description: "Hands-on sculpting sessions for beginners.",
        },
    ];

    
    return (
<div className="">
    <div>
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-6 text-white">
                    <div className="panel bg-gradient-to-r from-yankees-blue to-blue-950">
                        <div className="flex justify-between">
                            <div className="ltr:mr-1 rtl:ml-1 text-md font-montserrat-regular">Total Purchases</div>
                            <div className="dropdown">
                                <Dropdown
                                    offset={[0, 5]}
                                    placement={`${isRtl ? 'bottom-start' : 'bottom-end'}`}
                                    btnClassName="hover:opacity-80"
                                    button={<IconHorizontalDots className="hover:opacity-80 opacity-70" />}
                                >
                                    <ul className="text-yankees-blue font-montserrat-light dark:text-white-dark">
                                        <li>
                                        <Link to="/purchases">
                                            <button type="button">Go to Purchases</button>
                                        </Link>
                                        </li>
                                    </ul>
                                </Dropdown>
                            </div>
                        </div>
                        <div className="flex items-center mt-5">
                            <div className="text-3xl font-montserrat-light ltr:mr-3 rtl:ml-3"> SAR 1700.46 </div>
                        </div>
                    </div>

                    {/*Transactions */}
                    <div className="panel bg-gradient-to-r from-palatinate-purple to-fuchsia-900">
                        <div className="flex justify-between">
                            <div className="ltr:mr-1 rtl:ml-1 text-md font-montserrat-regular">Transactions</div>
                            <div className="dropdown">
                                <Dropdown
                                    offset={[0, 5]}
                                    placement={`${isRtl ? 'bottom-start' : 'bottom-end'}`}
                                    btnClassName="hover:opacity-80"
                                    button={<IconHorizontalDots className="hover:opacity-80 opacity-70" />}
                                >
                                    <ul className="text-yankees-blue font-montserrat-light dark:text-white-dark">
                                        <li>
                                        <Link to="/transactions">
                                            <button type="button">View Transactions</button>
                                        </Link>
                                        </li>
                                    </ul>
                                </Dropdown>
                            </div>
                        </div>
                        <div className="flex items-center mt-5">
                            <div className="text-3xl font-montserrat-light ltr:mr-3 rtl:ml-3"> 3 </div>
                        </div>
                    </div>

                    {/*  Workshops Attended */}
                    <div className="panel bg-gradient-to-r from-pewter-blue to-blue-300">
                        <div className="flex justify-between">
                            <div className="ltr:mr-1 rtl:ml-1 text-md font-montserrat-regular">Workshops Attended</div>
                            <div className="dropdown">
                                <Dropdown
                                    offset={[0, 5]}
                                    placement={`${isRtl ? 'bottom-start' : 'bottom-end'}`}
                                    btnClassName="hover:opacity-80"
                                    button={<IconHorizontalDots className="hover:opacity-80 opacity-70" />}
                                >
                                    <ul className="text-yankees-blue font-montserrat-light dark:text-white-dark">
                                        <li>
                                        <Link to="/workshops">
                                            <button type="button">View Workshops</button>
                                            </Link>
                                        </li>
                                    </ul>
                                </Dropdown>
                            </div>
                        </div>
                        <div className="flex items-center mt-5">
                            <div className="text-3xl font-montserrat-light ltr:mr-3 rtl:ml-3"> 13 </div>
                        </div>
                    </div>

                    {/* Upcoming Workshops */}
                    <div className="panel bg-gradient-to-r from-madder-lake to-red-500">
                        <div className="flex justify-between">
                            <div className="ltr:mr-1 rtl:ml-1 text-md font-montserrat-regular">Upcoming Workshop</div>
                            <div className="dropdown">
                                <Dropdown
                                    offset={[0, 5]}
                                    placement={`${isRtl ? 'bottom-start' : 'bottom-end'}`}
                                    btnClassName="hover:opacity-80"
                                    button={<IconHorizontalDots className="hover:opacity-80 opacity-70" />}
                                >
                                    <ul className="text-yankees-blue font-montserrat-light dark:text-white-dark">
                                        <li>
                                        <Link to="/workshops">
                                            <button type="button">View Upcoming Workshops</button>
                                            </Link>
                                        </li>
                                    </ul>
                                </Dropdown>
                                
                            </div>
                        </div>
                        <div className="flex flex-col items-start mt-5">
                        <div className="text-nowrap text-base font-montserrat-light "> Calligraphy by Shady Sirajuddin</div>
                            <div className="text-base font-montserrat-light ltr:mr-3 rtl:ml-3"> 2025-02-12 </div>
                        </div>
                    </div>
                </div>
    </div>

    <div className='flex flex-row gap-6'> 
        {/* Recent Orders Panel */}
  <div className="panel h-full w-full">
    <div className="flex items-center justify-between mb-5">
      <h5 className="font-montserrat-regular text-lg text-yankees-blue dark:text-white">Recent Purchases</h5>
    </div>
    <div className="table-responsive">
      <table className="table-auto w-full border-collapse border border-gray-200 dark:border-gray-700">
        <thead>
          <tr>
            <th className="ltr:rounded-l-md rtl:rounded-r-md  px-4 py-2 font-montserrat-light text-yankees-blue">Reference No.</th>
            <th className="px-4 py-2 font-montserrat-light text-yankees-blue">Date</th>
            <th className="px-4 py-2 font-montserrat-light text-yankees-blue">Category</th>
            <th className="px-4 py-2 font-montserrat-light text-yankees-blue">Price</th>
            <th className="ltr:rounded-r-md rtl:rounded-l-md px-4 py-2 font-montserrat-light text-yankees-blue">Status</th>
          </tr>
        </thead>
        <tbody>
          {[
            {
                date:"2024-01-12",
                category:"Painting",
                ref: "#081243",
                price: "SAR 5556.00",
                status: "Paid",
                statusClass: "bg-success",
            },
            {
                date:"2024-08-19",
                category:"Digital Art",
                ref: "#081658",
                price: "SAR 7000.00",
                status: "Pending",
                statusClass: "bg-warning",
            },
            {
                date:"2024-06-10",
                category:"Painting",
                ref: "#081680",
                price: "SAR 950.00",
                status: "Paid",
                statusClass: "bg-success",
            },
            {
                date:"2025-01-20",
                category:"Digital Art",
                ref: "#081540",
                price: "SAR 6500.00",
                status: "Pending",
                statusClass: "bg-warning",
            },
            {
                date:"2024-08-27",
                category:"Sculpture",
                ref: "#081452",
                price: "SAR 1200.00",
                status: "Paid",
                statusClass: "bg-success",
            },
            // {
            //     date:"2024-08-19",
            //     category:"Digital Art",
            //     ref: "#081658",
            //     price: "SAR 7000.00",
            //     status: "Pending",
            //     statusClass: "bg-warning",
            // },
            // More entries here...
          ].map((order, index) => (
            <tr
              key={index}
              className="hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <td className="px-4 py-2">
                <div className="flex items-center text-yankees-blue font-montserrat-light">
                  <span>{order.ref}</span>
                </div>
              </td>
              <td className="px-4 py-2 text-yankees-blue font-montserrat-light text-nowrap">{order.date}</td>
              <td className="px-4 py-2 text-yankees-blue font-montserrat-light">
                <Link to="/apps/invoice/preview">{order.category}</Link>
              </td>
              <td className="px-4 py-2 text-yankees-blue font-montserrat-light text-nowrap">{order.price}</td>
              <td className="px-4 py-2">
                <span
                  className={`badge ${order.statusClass} shadow-md dark:group-hover:bg-transparent`}
                >
                  {order.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>

  {/* Transactions Panel */}
  <div className="panel h-full w-full">
    <div className="flex items-center justify-between dark:text-white-light mb-5">
      <h5 className="font-montserrat-regular text-yankees-blue text-lg">Transactions</h5>
      {/* <div className="dropdown">
        <Dropdown
          placement={`${isRtl ? "bottom-start" : "bottom-end"}`}
          button={
            <IconHorizontalDots className="text-black/70 dark:text-white/70 hover:!text-primary" />
          }
        >
          <ul>
            <li>
              <button type="button">View Report</button>
            </li>
            <li>
              <button type="button">Edit Report</button>
            </li>
            <li>
              <button type="button">Mark as Done</button>
            </li>
          </ul>
        </Dropdown>
      </div> */}
    </div>
    <div className="space-y-6">
      {[{
          iconClass: "bg-success-light dark:bg-success text-success",
          ref: "#081345",
          time: "10 Jan 1:00PM",
          amount: "SAR 3658.11",
          textClass: "text-success",
        },
        {
          iconClass: "bg-warning-light dark:bg-warning text-warning",
          icon: <IconCashBanknotes />,
          ref: "#081658",
          time: "04 Jan 1:00PM",
          amount: "SAR 1216.44",
          textClass: "text-success",
        },
        {
          iconClass: "bg-primary-light dark:bg-primary text-primary",
          ref: "#081245",
          time: "22 Dec 11:30AM",
          amount: "SAR 3489.75",
          textClass: "text-success",
        },
        {
          iconClass: "bg-danger-light dark:bg-danger text-danger",
          ref: "#081123",
          time: "18 Dec 3:15PM",
          amount: "SAR 2225.00",
          textClass: "text-success",
        },
        {
          iconClass: "bg-secondary-light dark:bg-secondary text-secondary",
          ref: "#081750",
          time: "15 Dec 10:45AM",
          amount: "SAR 12150.00",
          textClass: "text-success",
        },].map((transaction, index) => (
        <div key={index} className="flex">
          <div className="px-3 flex-1">
            <div className='text-yankees-blue font-montserrat-light'>Reference Number: {transaction.ref}</div>
            <div className="text-xs font-montserrat-light text-white-dark dark:text-gray-500">
              {transaction.time}
            </div>
          </div>
          <span
            className={`${transaction.textClass} text-base font-montserrat-light px-1 ltr:ml-auto rtl:mr-auto whitespace-pre`}
          >
            {transaction.amount}
          </span>
        </div>
      ))}
    </div>
    </div>
  </div>
  
  <div className="flex flex-col lg:flex-row gap-4">
  {/* Upcoming Workshops Section */}
  <div className="panel h-full w-full lg:w-1/3 mt-4 pb-0">
    <h5 className="font-montserrat-regular text-yankees-blue text-lg dark:text-white-light mb-5">Upcoming Workshops</h5>
    <PerfectScrollbar className="relative h-[290px] ltr:pr-3 rtl:pl-3 ltr:-mr-3 rtl:-ml-3 mb-4">
      <div className="text-sm cursor-pointer">
        {upcomingWorkshops.map((workshop, index) => (
          <ActivityItem
            key={index}
            // color={workshop.color}
            title={workshop.title}
            time={workshop.time}
            date={workshop.date}
            // badgeText={workshop.badgeText}
            // badgeColor={workshop.badgeColor}
          />
        ))}
      </div>
    </PerfectScrollbar>
    <div className="border-t border-white-light dark:border-white/10">
      <Link
        to="/workshops"
        className="font-montserrat-light text-yankees-blue text-sm group hover:text-primary p-4 flex items-center justify-center"
      >
        View All
        <IconArrowLeft className="rtl:rotate-180 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition duration-300 ltr:ml-1 rtl:mr-1" />
      </Link>
    </div>
  </div>

  {/* Messages Section */}
  <div className="container h-full w-full lg:w-2/3 mt-4 pb-0">
    <h5 className="font-montserrat-regular text-yankees-blue text-lg dark:text-white-light ml-4">Messages</h5>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {messagesData.map((message, index) => (
        <MessageCard
          key={index}
        //   profileImg={message.profileImg}
          name={message.name}
          date={message.date}
          message={message.message}
        //   likes={message.likes}
        />
      ))}
    </div>
  </div>
</div>
  
</div>
    );
};

export default Dashboard;


// import React from 'react';

// const Dashboard: React.FC = () => {
//   const recentPurchases = [
//     { id: 1, item: 'Painting', date: '2024-12-15', amount: 'SAR 1500' },
//     { id: 2, item: 'Digital Artwork', date: '2024-12-10', amount: 'SAR 750' },
//   ];

//   const attendedWorkshops = [
//     { id: 1, title: 'Advanced Sculpting', date: '2024-12-05' },
//     { id: 2, title: 'Digital Art Basics', date: '2024-11-20' },
//   ];

//   const upcomingWorkshops = [
//     { id: 1, title: 'Creative Painting Techniques', date: '2024-12-22' },
//     { id: 2, title: 'NFT Art Workshop', date: '2024-12-30' },
//   ];

//   const messages = [
//     { id: 1, sender: 'Art Hub', subject: 'Workshop Confirmation', date: '2024-12-17' },
//     { id: 2, sender: 'Patron 1', subject: 'New Commission', date: '2024-12-16' },
//   ];

//   return (
//     <div className="container mx-auto px-4 py-6">
//       <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

//       {/* Summary Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//         <div className="bg-blue-500 text-white p-4 rounded-lg shadow-md">
//           <h2 className="text-lg font-semibold">Recent Purchases</h2>
//           <p className="mt-2 text-2xl">{recentPurchases.length}</p>
//         </div>
//         <div className="bg-green-500 text-white p-4 rounded-lg shadow-md">
//           <h2 className="text-lg font-semibold">Workshops Attended</h2>
//           <p className="mt-2 text-2xl">{attendedWorkshops.length}</p>
//         </div>
//         <div className="bg-yellow-500 text-white p-4 rounded-lg shadow-md">
//           <h2 className="text-lg font-semibold">Upcoming Workshops</h2>
//           <p className="mt-2 text-2xl">{upcomingWorkshops.length}</p>
//         </div>
//         <div className="bg-red-500 text-white p-4 rounded-lg shadow-md">
//           <h2 className="text-lg font-semibold">Messages</h2>
//           <p className="mt-2 text-2xl">{messages.length}</p>
//         </div>
//       </div>

//       {/* Details Section */}
//       <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {/* Recent Purchases */}
//         <div className="bg-white p-4 rounded-lg shadow-md">
//           <h3 className="text-lg font-bold mb-4">Recent Purchases</h3>
//           <ul>
//             {recentPurchases.map((purchase) => (
//               <li
//                 key={purchase.id}
//                 className="flex justify-between border-b py-2 last:border-none"
//               >
//                 <span>{purchase.item}</span>
//                 <span>{purchase.amount}</span>
//                 <span className="text-gray-500">{purchase.date}</span>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Workshops Attended */}
//         <div className="bg-white p-4 rounded-lg shadow-md">
//           <h3 className="text-lg font-bold mb-4">Workshops Attended</h3>
//           <ul>
//             {attendedWorkshops.map((workshop) => (
//               <li
//                 key={workshop.id}
//                 className="flex justify-between border-b py-2 last:border-none"
//               >
//                 <span>{workshop.title}</span>
//                 <span className="text-gray-500">{workshop.date}</span>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Upcoming Workshops */}
//         <div className="bg-white p-4 rounded-lg shadow-md">
//           <h3 className="text-lg font-bold mb-4">Upcoming Workshops</h3>
//           <ul>
//             {upcomingWorkshops.map((workshop) => (
//               <li
//                 key={workshop.id}
//                 className="flex justify-between border-b py-2 last:border-none"
//               >
//                 <span>{workshop.title}</span>
//                 <span className="text-gray-500">{workshop.date}</span>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Messages */}
//         <div className="bg-white p-4 rounded-lg shadow-md col-span-1 md:col-span-2 lg:col-span-1">
//           <h3 className="text-lg font-bold mb-4">Messages</h3>
//           <ul>
//             {messages.map((message) => (
//               <li
//                 key={message.id}
//                 className="flex justify-between border-b py-2 last:border-none"
//               >
//                 <span>
//                   <strong>{message.sender}</strong>: {message.subject}
//                 </span>
//                 <span className="text-gray-500">{message.date}</span>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

