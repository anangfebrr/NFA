import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createGenre } from "../../../_services/genres";

export default function GenreCreate() {
   const [name, setName] = useState("");
   const [description, setDescription] = useState("");
   const navigate = useNavigate();

   const handleSubmit = async (e) => {
      e.preventDefault();
      try {
         await createGenre({ name, description });
         navigate("/admin/genres");
      } catch (error) {
         console.log(error);
         alert("Failed to create genre");
      }
   };

   return (
      <section className="bg-white dark:bg-gray-900">
         <div className="max-w-md px-4 py-8 mx-auto lg:py-16">
            <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
               Create New Genre
            </h2>
            <form onSubmit={handleSubmit}>
               <div className="mb-4">
                  <label
                     htmlFor="name"
                     className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                     Genre Name
                  </label>
                  <input
                     type="text"
                     id="name"
                     name="name"
                     value={name}
                     onChange={(e) => setName(e.target.value)}
                     className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                     placeholder="e.g. Fantasy"
                     required
                  />
               </div>
               <div className="mb-4">
                  <label
                     htmlFor="description"
                     className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                     Description
                  </label>
                  <textarea
                     id="description"
                     name="description"
                     value={description}
                     onChange={(e) => setDescription(e.target.value)}
                     className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                     placeholder="Describe the genre"
                     rows={3}
                  />
               </div>
               <button
                  type="submit"
                  className="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
               >
                  Create Genre
               </button>
            </form>
         </div>
      </section>
   );
}
