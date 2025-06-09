import { Link } from "react-router-dom";

export default function Footer() {
   return (
      <>
         <footer className="border-t-2 p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800">
            <div className="mx-auto max-w-screen-xl text-center">
               <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
                  <li>
                     <Link to={"#"} className="mr-4 hover:underline md:mr-6">
                        About
                     </Link>                     
                  </li>
                  <li>
                     <Link to={"#"} className="mr-4 hover:underline md:mr-6">
                        Premium
                     </Link>                     
                  </li>
                  <li>
                     <Link to={"#"} className="mr-4 hover:underline md:mr-6">
                        Campaigns
                     </Link>  
                  </li>
                  <li>
                     <Link to={"#"} className="mr-4 hover:underline md:mr-6">
                        Blog
                     </Link>  
                  </li>
                  <li>
                     <Link to={"#"} className="mr-4 hover:underline md:mr-6">
                        Affiliate Program
                     </Link>  
                  </li>
                  <li>
                     <Link to={"#"} className="mr-4 hover:underline md:mr-6">
                        FAQs
                     </Link>  
                  </li>
                  <li>
                     <Link to={"#"} className="mr-4 hover:underline md:mr-6">
                        Contact
                     </Link>  
                  </li>
               </ul>
               <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                  ©{" "}
                     <Link to={"#"} className="mr-4 hover:underline">
                        2025
                     </Link>  
                  . All Rights Reserved.
               </span>
            </div>
         </footer>
      </>
   );
}
