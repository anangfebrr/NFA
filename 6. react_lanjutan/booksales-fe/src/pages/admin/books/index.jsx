import { useEffect, useState } from "react";
import { getBooks } from "../../../_services/books";
import { getGenres } from "../../../_services/genres";
import { Link } from "react-router-dom";
import { getAuthors } from "../../../_services/authors";

export default function AdminBooks() {
   const [books, setBooks] = useState([]); // Untuk melakukan simpan data
   const [genres, setGenres] = useState([]);
   const [authors, setAuthors] = useState([]);

   const [openDropdownId, setOpenDropdownId] = useState(null);

   // Untuk melakukan pengambilan data
   useEffect(() => {
      const fetchData = async () => {
         // Kode yang akan dijalankan
         const [booksData, genresData, authorData] = await Promise.all([
            getBooks(),
            getGenres(),
            getAuthors(),
         ]);

         setBooks(booksData);
         setGenres(genresData);
         setAuthors(authorData);
      };
      fetchData();
   }, []);

   // Menampilkan genre
   const getGenreName = (id) => {
      const genre = genres.find((genre) => genre.id === id);
      return genre ? genre.name : "Unknown Genre";
   };
   // Menampilkan author
   const getAuthorName = (id) => {
      const author = authors.find((author) => author.id === id);
      return author ? author.name : "Unknown Author";
   };

   // Untuk menggunakan dropdown
   const toggleDropdown = (id) => {
      setOpenDropdownId(openDropdownId === id ? null : id);
   };

   return (
      <>
         <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5">
            <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
               <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                  <div className="w-full md:w-1/2">
                     <form className="flex items-center">
                        <label htmlFor="simple-search" className="sr-only">
                           Search
                        </label>
                        <div className="relative w-full">
                           <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                              <svg
                                 aria-hidden="true"
                                 className="w-5 h-5 text-gray-500 dark:text-gray-400"
                                 fill="currentColor"
                                 viewBox="0 0 20 20"
                                 xmlns="http://www.w3.org/2000/svg"
                              >
                                 <path
                                    fillRule="evenodd"
                                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                    clipRule="evenodd"
                                 />
                              </svg>
                           </div>
                           <input
                              type="text"
                              id="simple-search"
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                              placeholder="Search"
                              required=""
                           />
                        </div>
                     </form>
                  </div>
                  <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                     <Link to={"/admin/books/create"}
                        type="button"
                        className="flex items-center justify-center text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-indigo-600 dark:hover:bg-indigo-700 focus:outline-none dark:focus:ring-indigo-800"
                     >
                        <svg
                           className="h-3.5 w-3.5 mr-2"
                           fill="currentColor"
                           viewBox="0 0 20 20"
                           xmlns="http://www.w3.org/2000/svg"
                           aria-hidden="true"
                        >
                           <path
                              clipRule="evenodd"
                              fillRule="evenodd"
                              d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                           />
                        </svg>
                        Add product
                     </Link>
                  </div>
               </div>
               <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                     <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                           <th scope="col" className="px-4 py-3">
                              Title
                           </th>
                           <th scope="col" className="px-4 py-3">
                              Price
                           </th>
                           <th scope="col" className="px-4 py-3">
                              Stock
                           </th>
                           <th scope="col" className="px-4 py-3">
                              Cover
                           </th>
                           <th scope="col" className="px-4 py-3">
                              Genre
                           </th>
                           <th scope="col" className="px-4 py-3">
                              Author
                           </th>
                           <th scope="col" className="px-4 py-3">
                              <span className="sr-only">Actions</span>
                           </th>
                        </tr>
                     </thead>
                     <tbody>
                        {books.length > 0 ? (
                           books.map((book) => (
                              <tr
                                 key={book.id}
                                 className="border-b dark:border-gray-700"
                              >
                                 <th
                                    scope="row"
                                    className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                 >
                                    {book.title}
                                 </th>
                                 <td className="px-4 py-3">{book.price}</td>
                                 <td className="px-4 py-3">{book.stock}</td>
                                 <td className="px-4 py-3">
                                    {book.cover_photo}
                                 </td>
                                 <td className="px-4 py-3">
                                    {getGenreName(book.genre_id)}
                                 </td>
                                 <td className="px-4 py-3">
                                    {getAuthorName(book.author_id)}
                                 </td>
                                 <td className="px-4 py-3 flex items-center justify-end relative">
                                    <button
                                       id={`dropdown-button-${book.id}`}
                                       onClick={() => toggleDropdown(book.id)}
                                       className="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
                                       type="button"
                                    >
                                       <svg
                                          className="w-5 h-5"
                                          aria-hidden="true"
                                          fill="currentColor"
                                          viewBox="0 0 20 20"
                                          xmlns="http://www.w3.org/2000/svg"
                                       >
                                          <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                       </svg>
                                    </button>
                                    {openDropdownId === book.id && (
                                       <div
                                          id="apple-imac-27-dropdown"
                                          className="absolute right-0 mt-2 z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                                          style={{ top: "100%", righ: "0" }}
                                       >
                                          <ul
                                             className="py-1 text-sm text-gray-700 dark:text-gray-200"
                                             aria-labelledby={`dropdown-button-${book.id}`}
                                          >
                                             <li>
                                                <Link
                                                   to={`/admin/books/edit/${book.id}`}
                                                   className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                                >
                                                   Edit
                                                </Link>
                                             </li>
                                          </ul>
                                          <div className="py-1">
                                             <button
                                                onClick={""}
                                                className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                             >
                                                Delete
                                             </button>
                                          </div>
                                       </div>
                                    )}
                                 </td>
                              </tr>
                           ))
                        ) : (
                           <tr>
                              <td colSpan="7" className="px-4 py-3 text-center">
                                 Data tidak ditemukan
                              </td>
                           </tr>
                        )}
                     </tbody>
                  </table>
               </div>
               <nav
                  className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4"
                  aria-label="Table navigation"
               >
                  <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                     Showing
                     <span className="font-semibold text-gray-900 dark:text-white">
                        1-10
                     </span>
                     of
                     <span className="font-semibold text-gray-900 dark:text-white">
                        1000
                     </span>
                  </span>
                  <ul className="inline-flex items-stretch -space-x-px">
                     <li>
                        <a
                           href="#"
                           className="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                           <span className="sr-only">Previous</span>
                           <svg
                              className="w-5 h-5"
                              aria-hidden="true"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                           >
                              <path
                                 fillRule="evenodd"
                                 d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                 clipRule="evenodd"
                              />
                           </svg>
                        </a>
                     </li>
                     <li>
                        <a
                           href="#"
                           className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                           1
                        </a>
                     </li>
                     <li>
                        <a
                           href="#"
                           className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                           2
                        </a>
                     </li>
                     <li>
                        <a
                           href="#"
                           aria-current="page"
                           className="flex items-center justify-center text-sm z-10 py-2 px-3 leading-tight text-indigo-600 bg-indigo-50 border border-indigo-300 hover:bg-indigo-100 hover:text-indigo-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                        >
                           3
                        </a>
                     </li>
                     <li>
                        <a
                           href="#"
                           className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                           ...
                        </a>
                     </li>
                     <li>
                        <a
                           href="#"
                           className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                           100
                        </a>
                     </li>
                     <li>
                        <a
                           href="#"
                           className="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                           <span className="sr-only">Next</span>
                           <svg
                              className="w-5 h-5"
                              aria-hidden="true"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                           >
                              <path
                                 fillRule="evenodd"
                                 d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                 clipRule="evenodd"
                              />
                           </svg>
                        </a>
                     </li>
                  </ul>
               </nav>
            </div>
         </section>
      </>
   );
}
