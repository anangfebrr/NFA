export default function Books() {
   return (
      <>
         <section className="bg-gray-50 py-8 antialiased dark:bg-gray-900 md:py-12">
            <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
               <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
                  <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                     <div className="h-56 w-full">
                        <a href="#">
                           <img
                              className="mx-auto h-full dark:hidden"
                              src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
                              alt=""
                           />
                           <img
                              className="mx-auto hidden h-full dark:block"
                              src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg"
                              alt=""
                           />
                        </a>
                     </div>
                     <div className="pt-6">
                        <a
                           href="#"
                           className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white"
                        >
                           Apple iMac 27", 1TB HDD, Retina 5K Display, M3 Max
                        </a>

                        <ul className="mt-2 flex items-center gap-4">
                           <li className="flex items-center gap-2">
                              <svg
                                 className="h-4 w-4 text-gray-500 dark:text-gray-400"
                                 ariaHidden="true"
                                 xmlns="http://www.w3.org/2000/svg"
                                 fill="none"
                                 viewBox="0 0 24 24"
                              >
                                 <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
                                 />
                              </svg>
                              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                 Fast Delivery
                              </p>
                           </li>

                           <li className="flex items-center gap-2">
                              <svg
                                 className="h-4 w-4 text-gray-500 dark:text-gray-400"
                                 ariaHidden="true"
                                 xmlns="http://www.w3.org/2000/svg"
                                 fill="none"
                                 viewBox="0 0 24 24"
                              >
                                 <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeWidth="2"
                                    d="M8 7V6c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1h-1M3 18v-7c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1H4a1 1 0 0 1-1-1Zm8-3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                                 />
                              </svg>
                              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                 Best Price
                              </p>
                           </li>
                        </ul>

                        <div className="mt-4 flex items-center justify-between gap-4">
                           <p className="text-2xl font-extrabold leading-tight text-gray-900 dark:text-white">
                              $1,699
                           </p>

                           <button
                              type="button"
                              className="inline-flex items-center rounded-lg bg-indigo-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-indigo-800 focus:outline-none focus:ring-4  focus:ring-indigo-300 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
                           >
                              <svg
                                 className="-ms-2 me-2 h-5 w-5"
                                 ariaHidden="true"
                                 xmlns="http://www.w3.org/2000/svg"
                                 width="24"
                                 height="24"
                                 fill="none"
                                 viewBox="0 0 24 24"
                              >
                                 <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
                                 />
                              </svg>
                              Add to cart
                           </button>
                        </div>
                     </div>
                  </div>
                  <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                     <div className="h-56 w-full">
                        <a href="#">
                           <img
                              className="mx-auto h-full dark:hidden"
                              src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/iphone-light.svg"
                              alt=""
                           />
                           <img
                              className="mx-auto hidden h-full dark:block"
                              src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/iphone-dark.svg"
                              alt=""
                           />
                        </a>
                     </div>

                     <div className="pt-6">
                        <a
                           href="#"
                           className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white"
                        >
                           Apple iPhone 15 Pro Max, 256GB, Blue Titanium
                        </a>

                        <ul className="mt-2 flex items-center gap-4">
                           <li className="flex items-center gap-2">
                              <svg
                                 className="h-4 w-4 text-gray-500 dark:text-gray-400"
                                 ariaHidden="true"
                                 xmlns="http://www.w3.org/2000/svg"
                                 width="24"
                                 height="24"
                                 fill="none"
                                 viewBox="0 0 24 24"
                              >
                                 <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m7.171 12.906-2.153 6.411 2.672-.89 1.568 2.34 1.825-5.183m5.73-2.678 2.154 6.411-2.673-.89-1.568 2.34-1.825-5.183M9.165 4.3c.58.068 1.153-.17 1.515-.628a1.681 1.681 0 0 1 2.64 0 1.68 1.68 0 0 0 1.515.628 1.681 1.681 0 0 1 1.866 1.866c-.068.58.17 1.154.628 1.516a1.681 1.681 0 0 1 0 2.639 1.682 1.682 0 0 0-.628 1.515 1.681 1.681 0 0 1-1.866 1.866 1.681 1.681 0 0 0-1.516.628 1.681 1.681 0 0 1-2.639 0 1.681 1.681 0 0 0-1.515-.628 1.681 1.681 0 0 1-1.867-1.866 1.681 1.681 0 0 0-.627-1.515 1.681 1.681 0 0 1 0-2.64c.458-.361.696-.935.627-1.515A1.681 1.681 0 0 1 9.165 4.3ZM14 9a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
                                 />
                              </svg>
                              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                 Best Seller
                              </p>
                           </li>

                           <li className="flex items-center gap-2">
                              <svg
                                 className="h-4 w-4 text-gray-500 dark:text-gray-400"
                                 ariaHidden="true"
                                 xmlns="http://www.w3.org/2000/svg"
                                 fill="none"
                                 viewBox="0 0 24 24"
                              >
                                 <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeWidth="2"
                                    d="M8 7V6c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1h-1M3 18v-7c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1H4a1 1 0 0 1-1-1Zm8-3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                                 />
                              </svg>
                              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                 Best Price
                              </p>
                           </li>
                        </ul>

                        <div className="mt-4 flex items-center justify-between gap-4">
                           <p className="text-2xl font-extrabold leading-tight text-gray-900 dark:text-white">
                              $1,199
                           </p>

                           <button
                              type="button"
                              className="inline-flex items-center rounded-lg bg-indigo-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-indigo-800 focus:outline-none focus:ring-4  focus:ring-indigo-300 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
                           >
                              <svg
                                 className="-ms-2 me-2 h-5 w-5"
                                 ariaHidden="true"
                                 xmlns="http://www.w3.org/2000/svg"
                                 width="24"
                                 height="24"
                                 fill="none"
                                 viewBox="0 0 24 24"
                              >
                                 <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
                                 />
                              </svg>
                              Add to cart
                           </button>
                        </div>
                     </div>
                  </div>
                  <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                     <div className="h-56 w-full">
                        <a href="#">
                           <img
                              className="mx-auto h-full dark:hidden"
                              src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ipad-light.svg"
                              alt=""
                           />
                           <img
                              className="mx-auto hidden h-full dark:block"
                              src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ipad-dark.svg"
                              alt=""
                           />
                        </a>
                     </div>

                     <div className="pt-6">
                        <a
                           href="#"
                           className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white"
                        >
                           iPad Pro 13-Inch (M4): XDR Display, 512GB
                        </a>

                        <ul className="mt-2 flex items-center gap-4">
                           <li className="flex items-center gap-2">
                              <svg
                                 className="h-4 w-4 text-gray-500 dark:text-gray-400"
                                 ariaHidden="true"
                                 xmlns="http://www.w3.org/2000/svg"
                                 fill="none"
                                 viewBox="0 0 24 24"
                              >
                                 <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
                                 />
                              </svg>
                              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                 Shipping Today
                              </p>
                           </li>

                           <li className="flex items-center gap-2">
                              <svg
                                 className="h-4 w-4 text-gray-500 dark:text-gray-400"
                                 ariaHidden="true"
                                 xmlns="http://www.w3.org/2000/svg"
                                 fill="none"
                                 viewBox="0 0 24 24"
                              >
                                 <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeWidth="2"
                                    d="M8 7V6c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1h-1M3 18v-7c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1H4a1 1 0 0 1-1-1Zm8-3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                                 />
                              </svg>
                              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                 Best Price
                              </p>
                           </li>
                        </ul>

                        <div className="mt-4 flex items-center justify-between gap-4">
                           <p className="text-2xl font-extrabold leading-tight text-gray-900 dark:text-white">
                              $799
                           </p>

                           <button
                              type="button"
                              className="inline-flex items-center rounded-lg bg-indigo-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-indigo-800 focus:outline-none focus:ring-4  focus:ring-indigo-300 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
                           >
                              <svg
                                 className="-ms-2 me-2 h-5 w-5"
                                 ariaHidden="true"
                                 xmlns="http://www.w3.org/2000/svg"
                                 width="24"
                                 height="24"
                                 fill="none"
                                 viewBox="0 0 24 24"
                              >
                                 <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
                                 />
                              </svg>
                              Add to cart
                           </button>
                        </div>
                     </div>
                  </div>
                  <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                     <div className="h-56 w-full">
                        <a href="#">
                           <img
                              className="mx-auto h-full dark:hidden"
                              src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ps5-light.svg"
                              alt=""
                           />
                           <img
                              className="mx-auto hidden h-full dark:block"
                              src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ps5-dark.svg"
                              alt=""
                           />
                        </a>
                     </div>

                     <div className="pt-6">
                        <a
                           href="#"
                           className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white"
                        >
                           PlayStation®5 Console – 1TB, PRO Controller
                        </a>

                        <ul className="mt-2 flex items-center gap-4">
                           <li className="flex items-center gap-2">
                              <svg
                                 className="h-4 w-4 text-gray-500 dark:text-gray-400"
                                 ariaHidden="true"
                                 xmlns="http://www.w3.org/2000/svg"
                                 fill="none"
                                 viewBox="0 0 24 24"
                              >
                                 <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
                                 />
                              </svg>
                              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                 Fast Delivery
                              </p>
                           </li>

                           <li className="flex items-center gap-2">
                              <svg
                                 className="h-4 w-4 text-gray-500 dark:text-gray-400"
                                 ariaHidden="true"
                                 xmlns="http://www.w3.org/2000/svg"
                                 fill="none"
                                 viewBox="0 0 24 24"
                              >
                                 <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeWidth="2"
                                    d="M8 7V6c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1h-1M3 18v-7c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1H4a1 1 0 0 1-1-1Zm8-3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                                 />
                              </svg>
                              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                 Best Price
                              </p>
                           </li>
                        </ul>

                        <div className="mt-4 flex items-center justify-between gap-4">
                           <p className="text-2xl font-extrabold leading-tight text-gray-900 dark:text-white">
                              $499
                           </p>

                           <button
                              type="button"
                              className="inline-flex items-center rounded-lg bg-indigo-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-indigo-800 focus:outline-none focus:ring-4  focus:ring-indigo-300 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
                           >
                              <svg
                                 className="-ms-2 me-2 h-5 w-5"
                                 ariaHidden="true"
                                 xmlns="http://www.w3.org/2000/svg"
                                 width="24"
                                 height="24"
                                 fill="none"
                                 viewBox="0 0 24 24"
                              >
                                 <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
                                 />
                              </svg>
                              Add to cart
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="w-full text-center">
                  <button
                     type="button"
                     className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-indigo-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                  >
                     Show more
                  </button>
               </div>
            </div>
         </section>
      </>
   );
}
