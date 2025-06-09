import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createAuthor } from "../../../_services/authors";

export default function AuthorCreate() {
   const [formData, setFormData] = useState({
      name: "",
      bio: "",
      photo: null,
   });

   const navigate = useNavigate();

   const handleChange = (e) => {
      const { name, value, files } = e.target;
      if (name === "photo") {
         setFormData((prev) => ({
            ...prev,
            photo: files[0],
         }));
      } else {
         setFormData((prev) => ({
            ...prev,
            [name]: value,
         }));
      }
   };

   const handleSubmit = async (e) => {
      e.preventDefault();
      try {
         const payload = new FormData();
         payload.append("name", formData.name);
         payload.append("bio", formData.bio);
         if (formData.photo) {
            payload.append("photo", formData.photo);
         }

         await createAuthor(payload);
         navigate("/admin/authors");
      } catch (error) {
         console.log("Create author error:", error.response?.data || error);
         alert("Failed to create author. Please check input and try again.");
      }
   };

   const handleReset = () => {
      setFormData({
         name: "",
         bio: "",
         photo: null,
      });
      const fileInput = document.getElementById("photo");
      if (fileInput) fileInput.value = "";
   };

   return (
      <section className="bg-white dark:bg-gray-900">
         <div className="max-w-2xl px-4 py-8 mx-auto lg:py-16">
            <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
               Create New Author
            </h2>
            <form onSubmit={handleSubmit} onReset={handleReset}>
               <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
                  <div className="sm:col-span-2">
                     <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Name
                     </label>
                     <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                        placeholder="Author Name"
                     />
                  </div>
                  <div className="sm:col-span-2">
                     <label htmlFor="bio" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Bio
                     </label>
                     <textarea
                        id="bio"
                        name="bio"
                        value={formData.bio}
                        onChange={handleChange}
                        rows="6"
                        required
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                        placeholder="Write a short bio..."
                     ></textarea>
                  </div>
                  <div className="sm:col-span-2">
                     <label htmlFor="photo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Photo
                     </label>
                     <input
                        type="file"
                        name="photo"
                        id="photo"
                        accept="image/*"
                        onChange={handleChange}
                        required
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full cursor-pointer dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                     />
                  </div>
               </div>
               <div className="flex items-center space-x-4">
                  <button
                     type="submit"
                     className="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
                  >
                     Create Author
                  </button>
                  <button
                     type="reset"
                     className="text-gray-600 inline-flex items-center hover:text-white border border-gray-600 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-gray-500 dark:text-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-900"
                  >
                     Reset
                  </button>
               </div>
            </form>
         </div>
      </section>
   );
}