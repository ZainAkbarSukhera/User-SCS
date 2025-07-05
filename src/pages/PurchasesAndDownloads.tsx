// import { Link, NavLink } from 'react-router-dom';
// import { DataTable, DataTableSortStatus } from 'mantine-datatable';
// import '@mantine/core/styles.layer.css';
// import 'mantine-datatable/styles.layer.css';
// import '../layout.css';
// import { useState, useEffect } from 'react';
// import sortBy from 'lodash/sortBy';
// import { useDispatch } from 'react-redux';
// import { setPageTitle } from '../store/themeConfigSlice';
// import IconTrashLines from '../components/Icon/IconTrashLines';
// import IconPlus from '../components/Icon/IconPlus';
// import IconEdit from '../components/Icon/IconEdit';
// import IconEye from '../components/Icon/IconEye';

// // Define TypeScript interfaces for better type checking
// // interface ItemStatus {
 
// // }

// interface Item {
//   id: number;
//   invoice: string;
//   name: string;
//   email: string;
//   date: string;
//   amount: string;
//   tooltip: string;
//   color: string;
//   profile: string;
// }

// const List = () => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(setPageTitle('Invoice List'));
//   }, [dispatch]);

//   const [items, setItems] = useState<Item[]>([
//     {
//       id: 1,
//       invoice: '081451',
//       name: 'Laurie Fox',
//       email: 'lauriefox@company.com',
//       date: '15 Dec 2020',
//       amount: '2275.45',
//       color:'bg-success',
//       tooltip: 'Paid',
//       profile: 'profile-1.jpeg',
//     },
//         {
//             id: 2,
//             invoice: '081452',
//             name: 'Alexander Gray',
//             email: 'alexGray3188@gmail.com',
//             date: '20 Dec 2020',
//             amount: '1044.00',
//             color:'bg-success',
//             tooltip: 'Paid',

//             profile: 'profile-1.jpeg',
//         },
//         {
//             id: 3,
//             invoice: '081681',
//             name: 'James Taylor',
//             email: 'jamestaylor468@gmail.com',
//             date: '27 Dec 2020',
//             amount: '20.00',
//             color:'bg-danger',
//             tooltip: 'Pending',
//             profile: 'profile-1.jpeg',
//         },
//         {
//             id: 4,
//             invoice: '082693',
//             name: 'Grace Roberts',
//             email: 'graceRoberts@company.com',
//             date: '31 Dec 2020',
//             amount: '344.00',
//             color:'bg-success',
//             tooltip: 'Paid',
//             profile: 'profile-1.jpeg',
//         },
//         {
//             id: 5,
//             invoice: '084743',
//             name: 'Donna Rogers',
//             email: 'donnaRogers@hotmail.com',
//             date: '03 Jan 2021',
//             amount: '405.15',
//             color:'bg-success',
//             tooltip: 'Paid',
//             profile: 'profile-1.jpeg',
//         },
//         {
//             id: 6,
//             invoice: '086643',
//             name: 'Amy Diaz',
//             email: 'amy968@gmail.com',
//             date: '14 Jan 2020',
//             amount: '100.00',
//             color:'bg-success',
//             tooltip: 'Paid',
//             profile: 'profile-1.jpeg',
//         },
//         {
//             id: 7,
//             invoice: '086773',
//             name: 'Nia Hillyer',
//             email: 'niahillyer666@comapny.com',
//             date: '20 Jan 2021',
//             amount: '59.21',
//             color:'bg-danger',
//             tooltip: 'Pending',
//             profile: 'profile-1.jpeg',
//         },
//         {
//             id: 8,
//             invoice: '087916',
//             name: 'Mary McDonald',
//             email: 'maryDonald007@gamil.com',
//             date: '25 Jan 2021',
//             amount: '79.00',
//             color:'bg-danger',
//             tooltip: 'Pending',
//             profile: 'profile-1.jpeg',
//         },
//         {
//             id: 9,
//             invoice: '089472',
//             name: 'Andy King',
//             email: 'kingandy07@company.com',
//             date: '28 Jan 2021',
//             amount: '149.00',
//             color:'bg-success',
//             tooltip: 'Paid',
//             profile: 'profile-1.jpeg',
//         },
//         {
//             id: 10,
//             invoice: '091768',
//             name: 'Vincent Carpenter',
//             email: 'vincentcarpenter@gmail.com',
//             date: '30 Jan 2021',
//             amount: '400',
//             color:'bg-success',
//             tooltip: 'Paid',
//             profile: 'profile-1.jpeg',
//         },
//         {
//             id: 11,
//             invoice: '095841',
//             name: 'Kelly Young',
//             email: 'youngkelly@hotmail.com',
//             date: '06 Feb 2021',
//             amount: '49.00',
//             color:'bg-danger',
//             tooltip: 'Pending',
          
//             profile: 'profile-1.jpeg',
//         },
//         {
//             id: 12,
//             invoice: '098424',
//             name: 'Alma Clarke',
//             email: 'alma.clarke@gmail.com',
//             date: '10 Feb 2021',
//             amount: '234.40',
//             color:'bg-success',
//             tooltip: 'Paid',
//             profile: 'profile-1.jpeg',
//         },
//     ]);

//     const [initialRecords, setInitialRecords] = useState<Item[]>(sortBy(items, 'invoice'));
//   const [records, setRecords] = useState<Item[]>(initialRecords);
//   const [selectedRecords, setSelectedRecords] = useState<Item[]>([]);
//   const [page, setPage] = useState(1);
//   const PAGE_SIZES = [10, 20, 30, 50, 100];
//   const [pageSize, setPageSize] = useState(PAGE_SIZES[0]);
//   const [search, setSearch] = useState('');
//   const [sortStatus, setSortStatus] = useState<DataTableSortStatus>({
//     columnAccessor: 'invoice',
//     direction: 'asc',
//   });

//   const deleteRow = (id: number | null = null) => {
//     if (window.confirm('Are you sure you want to delete the selected row?')) {
//       if (id) {
//         const updatedItems = items.filter((item) => item.id !== id);
//         setItems(updatedItems);
//         setInitialRecords(updatedItems);
//         setRecords(updatedItems);
//         setSelectedRecords([]);
//         setSearch('');
//       } else {
//         const selectedIds = selectedRecords.map((record) => record.id);
//         const updatedItems = items.filter((item) => !selectedIds.includes(item.id));
//         setItems(updatedItems);
//         setInitialRecords(updatedItems);
//         setRecords(updatedItems);
//         setSelectedRecords([]);
//         setSearch('');
//         setPage(1);
//       }
//     }
//   };

//   useEffect(() => {
//     const from = (page - 1) * pageSize;
//     const to = from + pageSize;
//     setRecords(initialRecords.slice(from, to));
//   }, [page, pageSize, initialRecords]);

//   useEffect(() => {
//     const filteredRecords = items.filter((item) => {
//       return (
//         item.invoice.toLowerCase().includes(search.toLowerCase()) ||
//         item.name.toLowerCase().includes(search.toLowerCase()) ||
//         item.email.toLowerCase().includes(search.toLowerCase()) ||
//         item.date.toLowerCase().includes(search.toLowerCase()) ||
//         item.amount.toLowerCase().includes(search.toLowerCase()) ||
//         item.tooltip.toLowerCase().includes(search.toLowerCase()) ||
//         item.color.toLowerCase().includes(search.toLowerCase())       
//       );
//     });
//     setInitialRecords(filteredRecords);
//   }, [search, items]);

//   useEffect(() => {
//     const sortedRecords = sortBy(initialRecords, sortStatus.columnAccessor);
//     setRecords(sortStatus.direction === 'desc' ? sortedRecords.reverse() : sortedRecords);
//     setPage(1);
//   }, [sortStatus, initialRecords]);

//   return (
//     <div className="panel px-0 border-white-light dark:border-[#1b2e4b]">
//       <div className="invoice-table">
//         <div className="mb-4.5 px-5 flex md:items-center md:flex-row flex-col gap-5">
//           <div className="flex items-center gap-2">
//             <button type="button" className="btn btn-danger gap-2" onClick={() => deleteRow()}>
//               <IconTrashLines />
//               Delete
//             </button>
//             <Link to="/apps/invoice/add" className="btn btn-primary gap-2">
//               <IconPlus />
//               Add New
//             </Link>
//           </div>
//           <div className="ltr:ml-auto rtl:mr-auto">
//             <input
//               type="text"
//               className="form-input w-auto"
//               placeholder="Search..."
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//             />
//           </div>
//         </div>

//         <div className="datatables pagination-padding">
//           <DataTable
//             className="whitespace-nowrap table-hover invoice-table"
//             records={records}
//             columns={[
//               {
//                 accessor: 'invoice',
//                 sortable: true,
//                 render: ({ invoice }) => (
//                   <NavLink to="/apps/invoice/preview">
//                     <div className="text-primary underline hover:no-underline font-semibold">{`#${invoice}`}</div>
//                   </NavLink>
//                 ),
//               },
//               {
//                 accessor: 'name',
//                 sortable: true,
//                 render: ({ name, id }) => (
//                   <div className="flex items-center font-semibold">
//                     <div className="p-0.5 bg-white-dark/30 rounded-full w-max ltr:mr-2 rtl:ml-2">
//                       <img
//                         className="h-8 w-8 rounded-full object-cover"
//                         src={`/assets/images/profile-${id}.jpeg`}
//                         alt=""
//                       />
//                     </div>
//                     {name}
//                   </div>
//                 ),
//               },
//               {
//                 accessor: 'email',
//                 sortable: true,
//               },
//               {
//                 accessor: 'date',
//                 sortable: true,
//               },
//               {
//                 accessor: 'amount',
//                 sortable: true,
//                 render: ({ amount }) => <div className="text-right font-semibold">{`$${amount}`}</div>,
//               },
//               {
//                 accessor: 'status',
//                 sortable: true,
//                 render: ({ color, tooltip }) => (
//                   <span className={`badge ${color}`}>{tooltip}</span>
//                 ),
//               },
//               {
//                 accessor: 'action',
//                 title: 'Actions',
//                 sortable: false,
//                 render: ({ id }) => (
//                   <div className="flex gap-4 items-center w-max mx-auto">
//                     <NavLink to="/apps/invoice/edit" className="flex hover:text-info">
//                       <IconEdit className="w-4.5 h-4.5" />
//                     </NavLink>
//                     <NavLink to="/apps/invoice/preview" className="flex hover:text-primary">
//                       <IconEye />
//                     </NavLink>
//                     <button type="button" className="flex hover:text-danger" onClick={() => deleteRow(id)}>
//                       <IconTrashLines />
//                     </button>
//                   </div>
//                 ),
//               },
//             ]}
//             highlightOnHover
//             totalRecords={initialRecords.length}
//             recordsPerPage={pageSize}
//             page={page}
//             onPageChange={setPage}
//             sortStatus={sortStatus}
//             onSortStatusChange={setSortStatus}
//             onRecordsPerPageChange={setPageSize}
//             recordsPerPageOptions={PAGE_SIZES}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default List;

// import { Link, NavLink } from 'react-router-dom';
// import { DataTable, DataTableSortStatus } from 'mantine-datatable';
// import '@mantine/core/styles.layer.css';
// import 'mantine-datatable/styles.layer.css';
// import '../layout.css';
// import { useState, useEffect } from 'react';
// import sortBy from 'lodash/sortBy';
// import { useDispatch } from 'react-redux';
// import { setPageTitle } from '../store/themeConfigSlice';
// import IconDownload from '../components/Icon/IconDownload';
// import IconTrashLines from '../components/Icon/IconTrashLines';

// interface Item {
//   id: number;
//   reference: string; // Reference number
//   purchaseDate: string; // Purchase date
//   status: string; // Status like "Downloaded" or "Pending"
//   category: string; // Category of purchase
// }

// const List = () => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(setPageTitle('Purchase List'));
//   }, [dispatch]);

//   const [items, setItems] = useState<Item[]>([
//     { id: 1, reference: 'REF001', purchaseDate: '2024-06-01', status: 'Downloaded', category: 'Painting' },
//     { id: 2, reference: 'REF002', purchaseDate: '2024-06-05', status: 'Pending', category: 'Digital Art' },
//     { id: 3, reference: 'REF003', purchaseDate: '2024-06-10', status: 'Downloaded', category: 'Painting' },
//     { id: 4, reference: 'REF004', purchaseDate: '2024-06-12', status: 'Pending', category: 'Sculpture' },
//   ]);

//   const [records, setRecords] = useState<Item[]>(sortBy(items, 'purchaseDate'));
//   const [sortStatus, setSortStatus] = useState<DataTableSortStatus>({
//     columnAccessor: 'purchaseDate',
//     direction: 'asc',
//   });

//   useEffect(() => {
//     const sorted = sortBy(items, sortStatus.columnAccessor);
//     setRecords(sortStatus.direction === 'desc' ? sorted.reverse() : sorted);
//   }, [sortStatus, items]);

//   return (
//     <div className="panel px-0 border-white-light dark:border-[#1b2e4b]">
//       <div className="invoice-table">
//         <div className="mb-4 px-5 flex justify-between items-center">
//           <h2 className="text-lg font-semibold">Purchase List</h2>
//           <input
//             type="text"
//             className="form-input w-auto"
//             placeholder="Search..."
//             onChange={(e) => {
//               const searchTerm = e.target.value.toLowerCase();
//               const filtered = items.filter(
//                 (item) =>
//                   item.reference.toLowerCase().includes(searchTerm) ||
//                   item.category.toLowerCase().includes(searchTerm)
//               );
//               setRecords(filtered);
//             }}
//           />
//         </div>

//         <DataTable
//           records={records}
//           columns={[
//             {
//               accessor: 'reference',
//               title: 'Reference Number',
//               sortable: true,
//             },
//             {
//               accessor: 'purchaseDate',
//               title: 'Purchase Date',
//               sortable: true,
//             },
//             {
//               accessor: 'category',
//               title: 'Category',
//               sortable: true,
//             },
//             {
//               accessor: 'status',
//               title: 'Status',
//               sortable: true,
//               render: ({ status }) => (
//                 <span
//                   className={`badge ${
//                     status === 'Downloaded' ? 'bg-success' : 'bg-warning'
//                   } text-white`}
//                 >
//                   {status}
//                 </span>
//               ),
//             },
//             {
//               accessor: 'actions',
//               title: 'Actions',
//               render: ({ status }) =>
//                 status === 'Pending' ? (
//                   <span>--</span>
//                 ) : (
//                   <button className="btn btn-primary btn-sm">
//                     <IconDownload className="mr-1" />
//                     Download
//                   </button>
//                 ),
//             },
//           ]}
//           sortStatus={sortStatus}
//           onSortStatusChange={setSortStatus}
//           highlightOnHover
//           pagination
//         />
//       </div>
//     </div>
//   );
// };

// export default List;

import { Link, NavLink } from 'react-router-dom';
import { DataTable, DataTableSortStatus } from 'mantine-datatable';
import '@mantine/core/styles.layer.css';
import 'mantine-datatable/styles.layer.css';
import '../layout.css';
import { useState, useEffect } from 'react';
import sortBy from 'lodash/sortBy';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../store/themeConfigSlice';
import IconDownload from '../components/Icon/IconDownload';
import IconTrashLines from '../components/Icon/IconTrashLines';

interface Item {
  [key: string]: unknown; // ✅ Index signature to allow Record<string, unknown> compatibility
  id: number;
  reference: string; // Reference number
  purchaseDate: string; // Purchase date
  status: string; // Status like "Downloaded" or "Pending"
  category: string; // Category of purchase
}


const List = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle('Purchase List'));
  }, [dispatch]);

  const [items, setItems] = useState<Item[]>([
    { id: 1, reference: '081243', purchaseDate: '2024-06-01', status: 'Downloaded', category: 'Painting' },
    { id: 2, reference: '081658', purchaseDate: '2024-06-05', status: 'Pending', category: 'Digital Art' },
    { id: 3, reference: '081285', purchaseDate: '2024-06-10', status: 'Downloaded', category: 'Painting' },
    { id: 4, reference: '081499', purchaseDate: '2024-06-12', status: 'Pending', category: 'Sculpture' },
    { id: 5, reference: '081500', purchaseDate: '2024-06-15', status: 'Downloaded', category: 'Photography' },
    { id: 6, reference: '081600', purchaseDate: '2024-06-20', status: 'Pending', category: 'Digital Art' },
    { id: 7, reference: '081789', purchaseDate: '2024-06-22', status: 'Downloaded', category: 'Digital Art' },
    { id: 8, reference: '081800', purchaseDate: '2024-06-25', status: 'Pending', category: 'Painting' },
    { id: 9, reference: '081900', purchaseDate: '2024-06-30', status: 'Downloaded', category: 'Sculpture' },
    { id: 10, reference: '081905', purchaseDate: '2024-07-01', status: 'Pending', category: 'Photography' },
    { id: 11, reference: '082243', purchaseDate: '2024-07-05', status: 'Downloaded', category: 'Painting' },
    { id: 12, reference: '082658', purchaseDate: '2024-07-07', status: 'Downloaded', category: 'Digital Art' },
    { id: 13, reference: '082285', purchaseDate: '2024-07-10', status: 'Downloaded', category: 'Painting' },
    { id: 14, reference: '082499', purchaseDate: '2024-07-12', status: 'Downloaded', category: 'Sculpture' },
    { id: 15, reference: '082500', purchaseDate: '2024-07-15', status: 'Downloaded', category: 'Photography' },
    { id: 16, reference: '082600', purchaseDate: '2024-07-18', status: 'Pending', category: 'Digital Art' },
    { id: 17, reference: '082789', purchaseDate: '2024-07-20', status: 'Downloaded', category: 'Digital Art' },
    { id: 18, reference: '082800', purchaseDate: '2024-07-22', status: 'Pending', category: 'Painting' },
    { id: 19, reference: '082900', purchaseDate: '2024-07-30', status: 'Downloaded', category: 'Sculpture' },
    { id: 20, reference: '082905', purchaseDate: '2024-08-01', status: 'Pending', category: 'Photography' },
    { id: 21, reference: '083243', purchaseDate: '2024-08-05', status: 'Downloaded', category: 'Painting' },
    { id: 22, reference: '083658', purchaseDate: '2024-08-07', status: 'Pending', category: 'Digital Art' },
  ]);

  const [records, setRecords] = useState<Item[]>(sortBy(items, 'purchaseDate'));
  const [sortStatus, setSortStatus] = useState<DataTableSortStatus>({
    columnAccessor: 'purchaseDate',
    direction: 'asc',
  });

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10;

  const totalRecords = items.length;

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

  const currentRecords = records.slice(indexOfFirstRecord, indexOfLastRecord);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  useEffect(() => {
    const sorted = sortBy(items, sortStatus.columnAccessor);
    setRecords(sortStatus.direction === 'desc' ? sorted.reverse() : sorted);
  }, [sortStatus, items]);

  return (
    <div className="panel px-0 border-white-light dark:border-[#1b2e4b]">
      <div className="purchase-table">
        <div className="mb-4 px-5 flex justify-between items-center">
          <h2 className="text-lg font-montserrat-regular text-yankees-blue dark:text-gray-200">
            Purchase List
          </h2>
          <input
            type="text"
            className="form-input w-auto border-gray-300 rounded-md focus:ring-primary focus:border-primary font-montserrat-extralight"
            placeholder="Search..."
            onChange={(e) => {
              const searchTerm = e.target.value.toLowerCase();
              const filtered = items.filter(
                (item) =>
                  item.reference.toLowerCase().includes(searchTerm) ||
                  item.category.toLowerCase().includes(searchTerm)
              );
              setRecords(filtered);
            }}
          />
        </div>

        <DataTable
          className="whitespace-nowrap table-hover purchase-datatable font-montserrat-light text-yankees-blue"
          // records={currentRecords}  // Use custom sliced records here
          records={currentRecords.slice((currentPage - 1) * recordsPerPage, currentPage * recordsPerPage)} // Slice records for pagination
          columns={[
            {
              accessor: 'reference',
              title: 'Reference Number',
              sortable: true,
              render: ({ reference }) => (
                <NavLink to={`/purchase/${reference}`}>
                  <div className="text-yankees-blue underline hover:no-underline font-montserrat-light">
                    {`#${reference}`}
                  </div>
                </NavLink>
              ),
            },
            {
              accessor: 'purchaseDate',
              title: 'Purchase Date',
              sortable: true,
              render: (record) => {
                const { purchaseDate } = record as Item; // Explicitly cast record to Item type
                return (
                  <div className="text-yankees-blue font-montserrat-light dark:text-gray-300">
                    {purchaseDate}
                  </div>
                );
              },
            },
            
            {
              accessor: 'category',
              title: 'Category',
              sortable: true,
              render: (record) => {
                const { category } = record as Item; // Explicitly cast record to Item type
                return (
                  <div className="text-yankees-blue font-montserrat-light dark:text-gray-200">
                    {category}
                  </div>
                );
              },
            },
            
            {
              accessor: 'status',
              title: 'Status',
              sortable: true,
              render: (record) => {
                const { status } = record as Item; // Explicitly cast record to Item type
                return (
                  <span
                  className={`badge font-montserrat-light ${status === 'Downloaded' ? 'bg-success text-white' : 'bg-danger text-white'}`}
                  >
                    {status}
                  </span>
                );
              },
            },
            
            {
              accessor: 'actions',
              title: 'Actions',
              render: ({ status }) =>
                status === 'Pending' ? (
                  <span className="text-yankees-blue">--</span>
                ) : (
                  <button className="text-center btn btn-sm btn-outline-primary gap-2">
                    <IconDownload />
                    Download item
                  </button>
                ),
            },
          ]}
          sortStatus={sortStatus}
          onSortStatusChange={setSortStatus}
          highlightOnHover
          // pagination={false}  // Disable Mantine's pagination
        />

        {/* Custom Pagination */}
        {totalRecords > recordsPerPage && (
          <div className="pagination mt-6 flex justify-center">
            <ul className="flex space-x-2">
              {[...Array(Math.ceil(totalRecords / recordsPerPage))].map((_, index) => (
                <li key={index + 1}>
                  <button
                    className={`px-3 py-1 rounded-md border ${
                      index + 1 === currentPage ? 'bg-yankees-blue font-montserrat-light text-white' : 'text-yankees-blue'
                    }`}
                    onClick={() => paginate(index + 1)}
                  >
                    {index + 1}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default List;
