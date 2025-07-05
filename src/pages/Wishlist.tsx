// import React, { useState, useEffect } from "react";

// interface WishlistItem {
//   id: string;
//   thumbnail: string; // URL of the image/icon
//   description: string;
//   price: number;
//   isAvailable: boolean;
//   category: string; // e.g., Painting, Sculpture, etc.
//   priority: number; // Higher number = higher priority
// }

// const Wishlist: React.FC = () => {
//   // Static data for the wishlist
//   const staticWishlist: WishlistItem[] = [
//     {
//       id: "1",
//       thumbnail: "https://via.placeholder.com/150",
//       description: "Abstract Painting",
//       price: 200,
//       isAvailable: true,
//       category: "Painting",
//       priority: 8,
//     },
//     {
//       id: "2",
//       thumbnail: "https://via.placeholder.com/150",
//       description: "Modern Sculpture",
//       price: 450,
//       isAvailable: false,
//       category: "Sculpture",
//       priority: 5,
//     },
//     {
//       id: "3",
//       thumbnail: "https://via.placeholder.com/150",
//       description: "Digital Art Print",
//       price: 150,
//       isAvailable: true,
//       category: "Digital Art",
//       priority: 10,
//     },
//     {
//       id: "4",
//       thumbnail: "https://via.placeholder.com/150",
//       description: "Nature Photography",
//       price: 300,
//       isAvailable: true,
//       category: "Photography",
//       priority: 7,
//     },
//     {
//       id: "5",
//       thumbnail: "https://via.placeholder.com/150",
//       description: "Workshop on Portrait Art",
//       price: 100,
//       isAvailable: true,
//       category: "Workshop",
//       priority: 3,
//     },
//   ];

//   const [wishlist, setWishlist] = useState<WishlistItem[]>(staticWishlist);
//   const [sortedWishlist, setSortedWishlist] = useState<WishlistItem[]>(staticWishlist);
//   const [filters, setFilters] = useState({
//     category: "All",
//     minPrice: 0,
//     maxPrice: 1000000,
//   });
//   const [sortBy, setSortBy] = useState<"price" | "priority" | null>(null);

//   useEffect(() => {
//     // Apply filters and sorting
//     let filtered = wishlist.filter(
//       (item) =>
//         (filters.category === "All" || item.category === filters.category) &&
//         item.price >= filters.minPrice &&
//         item.price <= filters.maxPrice
//     );

//     if (sortBy === "price") {
//       filtered.sort((a, b) => a.price - b.price);
//     } else if (sortBy === "priority") {
//       filtered.sort((a, b) => b.priority - a.priority);
//     }

//     setSortedWishlist(filtered);
//   }, [filters, sortBy, wishlist]);

//   const handleRemove = (id: string) => {
//     // Remove item from wishlist
//     setWishlist(wishlist.filter((item) => item.id !== id));
//   };

//   const handlePurchase = (id: string) => {
//     // Navigate to checkout for the selected item
//     alert(`Proceeding to purchase for item ID: ${id}`);
//   };

//   const handleNotification = (item: WishlistItem) => {
//     if (!item.isAvailable) {
//       alert(`The item "${item.description}" is no longer available.`);
//     } else if (item.category === "Workshop" && item.priority <= 5) {
//       alert(`Hurry! Limited slots remaining for "${item.description}".`);
//     }
//   };

//   return (
//     <div className="wishlist">
//       <h1 className="text-2xl font-bold mb-4">Your Wishlist</h1>

//       {/* Filters
//       <div className="filters mb-6">
//         <select
//           value={filters.category}
//           onChange={(e) => setFilters({ ...filters, category: e.target.value })}
//         >
//           <option value="All">All Categories</option>
//           <option value="Painting">Painting</option>
//           <option value="Sculpture">Sculpture</option>
//           <option value="Digital Art">Digital Art</option>
//           <option value="Photography">Photography</option>
//           <option value="Workshop">Workshop</option>
//         </select>
//         <input
//           type="number"
//           placeholder="Min Price"
//           value={filters.minPrice}
//           onChange={(e) => setFilters({ ...filters, minPrice: Number(e.target.value) })}
//         />
//         <input
//           type="number"
//           placeholder="Max Price"
//           value={filters.maxPrice}
//           onChange={(e) => setFilters({ ...filters, maxPrice: Number(e.target.value) })}
//         />
//         <button onClick={() => setSortBy("price")}>Sort by Price</button>
//         <button onClick={() => setSortBy("priority")}>Sort by Priority</button>
//       </div> */}

//        {/* Filters Section */}
//        <div className="mb-8 bg-white shadow rounded p-4 flex flex-wrap gap-4 justify-center items-center">
//          <select
//           className="border border-gray-300 rounded p-2 text-gray-700"
//           value={filters.category}
//           onChange={(e) => setFilters({ ...filters, category: e.target.value })}
//         >
//           <option value="All">All Categories</option>
//           <option value="Painting">Painting</option>
//           <option value="Sculpture">Sculpture</option>
//           <option value="Digital Art">Digital Art</option>
//           <option value="Photography">Photography</option>
//           <option value="Workshop">Workshop</option>
//         </select>
//         <input
//           type="number"
//           placeholder="Min Price"
//           className="border border-gray-300 rounded p-2 text-gray-700"
//           value={filters.minPrice}
//           onChange={(e) => setFilters({ ...filters, minPrice: Number(e.target.value) })}
//         />
//         <input
//           type="number"
//           placeholder="Max Price"
//           className="border border-gray-300 rounded p-2 text-gray-700"
//           value={filters.maxPrice}
//           onChange={(e) => setFilters({ ...filters, maxPrice: Number(e.target.value) })}
//         />
//         <button
//           className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//           onClick={() => setSortBy("price")}
//         >
//           Sort by Price
//         </button>
//         <button
//           className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
//           onClick={() => setSortBy("priority")}
//         >
//           Sort by Priority
//         </button>
//       </div>

//       {/* Wishlist Items */}
//       <div className="wishlist-items grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {sortedWishlist.map((item) => (
//           <div
//             key={item.id}
//             className="wishlist-item p-4 border rounded shadow-sm relative"
//           >
//             <img
//               src={item.thumbnail}
//               alt={item.description}
//               className="w-full h-32 object-cover mb-2"
//             />
//             <h3 className="font-medium">{item.description}</h3>
//             <p className="text-gray-500">Price: ${item.price.toFixed(2)}</p>
//             <p className={`status ${item.isAvailable ? "text-green-500" : "text-red-500"}`}>
//               {item.isAvailable ? "Available" : "Unavailable"}
//             </p>

//             {/* Quick Action Buttons */}
//             <div className="actions flex justify-between mt-4">
//               <button
//                 className="btn btn-danger"
//                 onClick={() => handleRemove(item.id)}
//               >
//                 Remove from Wishlist
//               </button>
//               {item.isAvailable && (
//                 <button
//                   className="btn btn-primary"
//                   onClick={() => handlePurchase(item.id)}
//                 >
//                   Purchase Now
//                 </button>
//               )}
//             </div>

//             {/* Notification Alerts */}
//             {/* {handleNotification(item)} */}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Wishlist;


import React, { useState, useEffect } from "react";
import { FaList, FaTh } from "react-icons/fa";
import im1 from '../assets/After Marylin.png';
import im2 from '../assets/hattan5.jpg';
import im3 from '../assets/pif2.png';
import im4 from '../assets/pif3.png';
import im5 from '../assets/shady.jpeg';

interface WishlistItem {
  id: string;
  thumbnail: string; // URL of the image/icon
  description: string;
  price: number;
  isAvailable: boolean;
  category: string; // e.g., Painting, Sculpture, etc.
  priority: number; // Higher number = higher priority
}

const Wishlist: React.FC = () => {
  // Static data for the wishlist
  const staticWishlist: WishlistItem[] = [
    {
      id: "1",
      thumbnail: im1,
      description: "After Marylin",
      price: 20000,
      isAvailable: true,
      category: "Painting",
      priority: 2,
    },
    {
      id: "2",
      thumbnail: im3,
      description: "Frog by Hannan Al Medi",
      price: 4500,
      isAvailable: false,
      category: "Digital Art",
      priority: 5,
    },
    {
      id: "3",
      thumbnail: im4,
      description: "Landscape (XI)",
      price: 15000,
      isAvailable: true,
      category: "Painting",
      priority: 10,
    },
    {
      id: "4",
      thumbnail: im2,
      description: "Pyramids (IX)",
      price: 30000,
      isAvailable: true,
      category: "Digital Art",
      priority: 7,
    },
    {
      id: "5",
      thumbnail: im5,
      description: "Mixed Media Collage Workshop by Shady Sirajuddin",
      price: 100,
      isAvailable: true,
      category: "Workshop",
      priority: 3,
    },
  ];

  const [wishlist, setWishlist] = useState<WishlistItem[]>(staticWishlist);
  const [sortedWishlist, setSortedWishlist] = useState<WishlistItem[]>(staticWishlist);
  const [viewMode, setViewMode] = useState<"card" | "list">("card"); // New state for view mode
  const [filters, setFilters] = useState({
    category: "All",
    minPrice: 0,
    maxPrice: 1000000,
  });
  const [sortBy, setSortBy] = useState<"price" | "priority" | null>(null);

  useEffect(() => {
    // Apply filters and sorting
    let filtered = wishlist.filter(
      (item) =>
        (filters.category === "All" || item.category === filters.category) &&
        item.price >= filters.minPrice &&
        item.price <= filters.maxPrice
    );

    if (sortBy === "price") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === "priority") {
      filtered.sort((a, b) => b.priority - a.priority);
    }

    setSortedWishlist(filtered);
  }, [filters, sortBy, wishlist]);

  const handleRemove = (id: string) => {
    // Remove item from wishlist
    setWishlist(wishlist.filter((item) => item.id !== id));
  };

  const handlePurchase = (id: string) => {
    // Navigate to checkout for the selected item
    alert(`Proceeding to purchase for item ID: ${id}`);
  };

  const handleNotification = (item: WishlistItem) => {
    if (!item.isAvailable) {
      alert(`The item "${item.description}" is no longer available.`);
    } else if (item.category === "Workshop" && item.priority <= 5) {
      alert(`Hurry! Limited slots remaining for "${item.description}".`);
    }
  };

  return (
    <div className="panel h-full">
     <h2 className="text-lg mb-8 font-montserrat-regular text-yankees-blue dark:text-gray-200">
            Wishlist
          </h2>

      {/* Filters
      <div className="filters mb-6">
        <select
          value={filters.category}
          onChange={(e) => setFilters({ ...filters, category: e.target.value })}
        >
          <option value="All">All Categories</option>
          <option value="Painting">Painting</option>
          <option value="Sculpture">Sculpture</option>
          <option value="Digital Art">Digital Art</option>
          <option value="Photography">Photography</option>
          <option value="Workshop">Workshop</option>
        </select>
        <input
          type="number"
          placeholder="Min Price"
          value={filters.minPrice}
          onChange={(e) => setFilters({ ...filters, minPrice: Number(e.target.value) })}
        />
        <input
          type="number"
          placeholder="Max Price"
          value={filters.maxPrice}
          onChange={(e) => setFilters({ ...filters, maxPrice: Number(e.target.value) })}
        />
        <button onClick={() => setSortBy("price")}>Sort by Price</button>
        <button onClick={() => setSortBy("priority")}>Sort by Priority</button>
      </div> */}

       {/* Filters Section */}
       <div className="mb-8  p-4 flex flex-wrap gap-4 justify-center items-center">
         <select
          className="border border-gray-300 rounded p-2 text-yankees-blue font-montserrat-light"
          value={filters.category}
          onChange={(e) => setFilters({ ...filters, category: e.target.value })}
        >
          <option value="All">All Categories</option>
          <option value="Painting">Painting</option>
          <option value="Sculpture">Sculpture</option>
          <option value="Digital Art">Digital Art</option>
          <option value="Photography">Photography</option>
          <option value="Workshop">Workshop</option>
        </select>
        {/* <input
          type="number"
          placeholder="Min Price"
          className="border border-gray-300 rounded p-2 text-gray-700"
          value={filters.minPrice}
          onChange={(e) => setFilters({ ...filters, minPrice: Number(e.target.value) })}
        />
        <input
          type="number"
          placeholder="Max Price"
          className="border border-gray-300 rounded p-2 text-gray-700"
          value={filters.maxPrice}
          onChange={(e) => setFilters({ ...filters, maxPrice: Number(e.target.value) })}
        /> */}
        <button
          className={`p-2 rounded ${
            viewMode === "list" ? "bg-yankees-blue text-white" : "bg-gray-200 text-yankees-blue"
          }`}
          onClick={() => setViewMode("list")}
        >
          <FaList size={16} />
        </button>
        <button
          className={`p-2  rounded ${
            viewMode === "card" ? "bg-yankees-blue text-white" : "bg-gray-200 text-yankees-blue"
          }`}
          onClick={() => setViewMode("card")}
        >
          <FaTh size={16} />
        </button>
        <button
          className="bg-yankees-blue text-white px-4 py-2 rounded hover:bg-yankees-blue"
          onClick={() => setSortBy("price")}
        >
          Sort by Price
        </button>
        <button
          className="bg-palatinate-purple text-white px-4 py-2 rounded hover:bg-palatinate-purple"
          onClick={() => setSortBy("priority")}
        >
          Sort by Priority
        </button>
      </div>

      {/* <div className="mb-4">
        <button
          className={`px-4 py-2 rounded ${
            viewMode === "card" ? "bg-yankees-blue text-white" : "bg-gray-300"
          }`}
          onClick={() => setViewMode("card")}
        >
          Card View
        </button>
        <button
          className={`px-4 py-2 rounded ml-2 ${
            viewMode === "list" ? "bg-yankees-blue text-white" : "bg-gray-300"
          }`}
          onClick={() => setViewMode("list")}
        >
          List View
        </button>
      </div> */}

      {/* Wishlist Items */}
      <div
        className={`wishlist-items ${
          viewMode === "card"
            ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
            : "flex flex-col space-y-4"
        }`}
      >
        {sortedWishlist.map((item) => (
          <div
            key={item.id}
            className={`wishlist-item p-4 border rounded shadow-sm ${
              viewMode === "list" ? "flex items-center space-x-4" : "flex flex-col"
            }`}
          >
            <img
              src={item.thumbnail}
              alt={item.description}
              className={`${
                viewMode === "list" ? "w-24 h-24" : "w-full h-40"
              } object-cover mb-2`}
            />
            <div className={`${viewMode === "list" ? "flex-grow" : ""}`}>
              <h3 className="font-montserrat-medium text-yankees-blue">
                {item.description}
              </h3>
              <p className="text-yankees-blue font-montserrat-light mb-2">
                Price: SAR {item.price.toFixed(2)}
              </p>
              <p
                className={`status font-montserrat-light ${
                  item.isAvailable ? "text-green-500" : "text-red-500"
                }`}
              >
                {item.isAvailable ? "Available" : "Unavailable"}
              </p>
            </div>
            <div className={`${viewMode === "list" ? "ml-auto" : "mt-4"} flex gap-x-4`}>
              <button
                className="btn  border-madder-lake bg-madder-lake text-white shadow-madder-lake px-4 py-2 rounded"
                onClick={() => handleRemove(item.id)}
              >
                Remove from Wishlist
              </button>
              {item.isAvailable && (
                <button
                  className="btn border-fire-opal bg-fire-opal text-white shadow-fire-opal px-4 py-2 rounded"
                  onClick={() => handlePurchase(item.id)}
                >
                  Purchase Now
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;