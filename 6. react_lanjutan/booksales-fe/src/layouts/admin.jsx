import { Link, Outlet } from "react-router-dom";

export default function AdminLayout() {
   return (
      <>
         <div className="antialiased bg-gray-50 dark:bg-gray-900">
            <nav className="bg-white border-b border-gray-200 px-4 py-2.5 dark:bg-gray-800 dark:border-gray-700 fixed left-0 right-0 top-0 z-50">
               <div className="flex flex-wrap justify-between items-center">
                  <div className="flex justify-start items-center">
                     <button
                        data-drawer-target="drawer-navigation"
                        data-drawer-toggle="drawer-navigation"
                        aria-controls="drawer-navigation"
                        className="p-2 mr-2 text-gray-600 rounded-lg cursor-pointer md:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                     >
                        <svg
                           aria-hidden="true"
                           className="w-6 h-6"
                           fill="currentColor"
                           viewBox="0 0 20 20"
                           xmlns="http://www.w3.org/2000/svg"
                        >
                           <path
                              fillRule="evenodd"
                              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                              clipRule="evenodd"
                           ></path>
                        </svg>
                        <svg
                           aria-hidden="true"
                           className="hidden w-6 h-6"
                           fill="currentColor"
                           viewBox="0 0 20 20"
                           xmlns="http://www.w3.org/2000/svg"
                        >
                           <path
                              fillRule="evenodd"
                              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                              clipRule="evenodd"
                           ></path>
                        </svg>
                        <span className="sr-only">Toggle sidebar</span>
                     </button>
                     <Link
                        to={"/admin"}
                        className="flex items-center justify-between mr-4"
                     >
                        <img
                           src="https://flowbite.s3.amazonaws.com/logo.svg"
                           className="mr-3 h-8"
                           alt="Flowbite Logo"
                        />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                           Flowbite
                        </span>
                     </Link>
                  </div>
                  <div className="flex items-center lg:order-2">
                     <button
                        type="button"
                        data-drawer-toggle="drawer-navigation"
                        aria-controls="drawer-navigation"
                        className="p-2 mr-1 text-gray-500 rounded-lg md:hidden hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                     >
                        <span className="sr-only">Toggle search</span>
                        <svg
                           aria-hidden="true"
                           className="w-6 h-6"
                           fill="currentColor"
                           viewBox="0 0 20 20"
                           xmlns="http://www.w3.org/2000/svg"
                        >
                           <path
                              clipRule="evenodd"
                              fillRule="evenodd"
                              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                           ></path>
                        </svg>
                     </button>

                     <button
                        type="button"
                        className="flex mx-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                        id="user-menu-button"
                        aria-expanded="false"
                        data-dropdown-toggle="dropdown"
                     >
                        <span className="sr-only">Open user menu</span>
                        <img
                           className="w-8 h-8 rounded-full"
                           src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gough.png"
                           alt="user photo"
                        />
                     </button>
                     {/* <!-- Dropdown menu --> */}
                     <div
                        className="hidden z-50 my-4 w-56 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 rounded-xl"
                        id="dropdown"
                     >
                        <div className="py-3 px-4">
                           <span className="block text-sm font-semibold text-gray-900 dark:text-white">
                              Tampan & Berani
                           </span>
                           <span className="block text-sm text-gray-900 truncate dark:text-white">
                              handsome@example.com
                           </span>
                        </div>
                        <ul
                           className="py-1 text-gray-700 dark:text-gray-300"
                           aria-labelledby="dropdown"
                        >
                           <li>
                              <Link
                                 to={"/#"}
                                 className="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                 Sign out
                              </Link>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
            </nav>

            {/* <!-- Sidebar --> */}

            <aside
               className="fixed top-0 left-0 z-40 w-64 h-screen pt-14 transition-transform -translate-x-full bg-white border-r border-gray-200 md:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
               aria-label="Sidenav"
               id="drawer-navigation"
            >
               <div className="overflow-y-auto py-5 px-3 h-full bg-white dark:bg-gray-800">
                  <ul className="space-y-2">
                     <li>
                        <Link
                           to={"/admin"}
                           className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                        >
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              class="size-6"
                           >
                              <path
                                 fill-rule="evenodd"
                                 d="M2.25 13.5a8.25 8.25 0 0 1 8.25-8.25.75.75 0 0 1 .75.75v6.75H18a.75.75 0 0 1 .75.75 8.25 8.25 0 0 1-16.5 0Z"
                                 clip-rule="evenodd"
                              />
                              <path
                                 fill-rule="evenodd"
                                 d="M12.75 3a.75.75 0 0 1 .75-.75 8.25 8.25 0 0 1 8.25 8.25.75.75 0 0 1-.75.75h-7.5a.75.75 0 0 1-.75-.75V3Z"
                                 clip-rule="evenodd"
                              />
                           </svg>

                           <span className="ml-3">Overview</span>
                        </Link>
                     </li>
                     <li>
                        <Link
                           to={"admin/users"}
                           className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
                        >
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              class="size-6"
                           >
                              <path
                                 stroke-linecap="round"
                                 stroke-linejoin="round"
                                 d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                              />
                           </svg>

                           <span className="ml-3">Users</span>
                        </Link>
                     </li>
                     <li>
                        <Link
                           to={"/admin/authors"}
                           className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
                        >
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              class="size-6"
                           >
                              <path
                                 stroke-linecap="round"
                                 stroke-linejoin="round"
                                 d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                              />
                           </svg>

                           <span className="ml-3">Authors</span>
                        </Link>
                     </li>
                     <li>
                        <Link
                           to={"/admin/genres"}
                           className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
                        >
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              class="size-6"
                           >
                              <path
                                 stroke-linecap="round"
                                 stroke-linejoin="round"
                                 d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z"
                              />
                              <path
                                 stroke-linecap="round"
                                 stroke-linejoin="round"
                                 d="M6 6h.008v.008H6V6Z"
                              />
                           </svg>
                           <span className="ml-3">Genres</span>
                        </Link>
                     </li>
                  </ul>

                  <ul className="pt-5 mt-5 space-y-2 borderT border-gray-200 dark:border-gray-700">
                     <li>
                        <Link
                           to={"/admin/books"}
                           className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
                        >
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              class="size-6"
                           >
                              <path
                                 stroke-linecap="round"
                                 stroke-linejoin="round"
                                 d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                              />
                           </svg>

                           <span className="ml-3">Books</span>
                        </Link>
                     </li>
                     <li>
                        <Link
                           to={"/admin/transactions"}
                           className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
                        >
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              class="size-6"
                           >
                              <path
                                 stroke-linecap="round"
                                 stroke-linejoin="round"
                                 d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                              />
                           </svg>

                           <span className="ml-3">Transaction</span>
                        </Link>
                     </li>
                     <li>
                        <Link
                           to={"/admin/help"}
                           className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
                        >
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              class="size-6"
                           >
                              <path
                                 stroke-linecap="round"
                                 stroke-linejoin="round"
                                 d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
                              />
                           </svg>

                           <span className="ml-3">Help</span>
                        </Link>
                     </li>
                  </ul>
               </div>
            </aside>

            <main className="p-4 md:ml-64 h-auto pt-20">
               <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-auto px-4 pt-4 pb-6">
                  <Outlet />
               </div>
            </main>
         </div>
      </>
   );
}
