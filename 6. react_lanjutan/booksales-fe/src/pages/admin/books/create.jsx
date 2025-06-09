import { useEffect, useState } from "react";
import { getGenres } from "../../../_services/genres";
import { getAuthors } from "../../../_services/authors";
import { useNavigate } from "react-router-dom";
import { createBook } from "../../../_services/books";

export default function BookCreate() {
   const [genres, setGenres] = useState([]);
   const [authors, setAuthors] = useState([]);
   const [formData, setFormData] = useState({
      title: "",
      price: 0,
      stock: 0,
      genre_id: 0,
      author_id: 0,
      cover_photo: null,
      description: "",
   });

   const navigate = useNavigate();

   useEffect(() => {
      const fetchData = async () => {
         const [genresData, authorsData] = await Promise.all([
            getGenres(),
            getAuthors(),
         ]);
         setGenres(genresData);
         setAuthors(authorsData);
      };

      fetchData();
   }, []);

   const handleChange = (e) => {
      const { name, value, files } = e.target;

      if (name === "cover_photo") {
         setFormData({
            ...formData,
            cover_photo: files[0],
         });
      } else {
         setFormData({
            ...formData,
            [name]: value,
         });
      }
   };

   const handleSubmit = async (e) => {
      e.preventDefault();

      try {
         const payload = new FormData();
         for (const key in formData) {
            payload.append(key, formData[key]);
         }

         await createBook(payload);
         navigate("/admin/books");
      } catch (error) {
         console.log(error);
         alert("Error creating book");
      }
   }

   console.log(formData)

   return (
      <>
         <section className="bg-white dark:bg-gray-900">
            <div className="max-w-2xl px-4 py-8 mx-auto lg:py-16">
               <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
                  Create New Book
               </h2>
               <form onSubmit={handleSubmit}>
                  <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
                     <div className="sm:col-span-2">
                        <label
                           for="name"
                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                           Title
                        </label>
                        <input
                           type="text"
                           name="title"
                           id="title"
                           value={formData.title}
                           onChange={handleChange}
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                           placeholder="Book Ttile"
                           required=""
                        />
                     </div>
                     <div className="w-full">
                        <label
                           for="price"
                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                           Price
                        </label>
                        <input
                           type="number"
                           name="price"
                           id="price"
                           value={formData.price}
                           onChange={handleChange}
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                           placeholder="e.g. 150000"
                           required
                        />
                     </div>
                     <div className="w-full">
                        <label
                           for="stock"
                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                           Stock
                        </label>
                        <input
                           type="number"
                           name="stock"
                           id="stock"
                           value={formData.stock}
                           onChange={handleChange}
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                           placeholder="e.g. 20"
                           required
                        />
                     </div>

                     <div>
                        <label
                           for="genre_id"
                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                           Genre_id
                        </label>
                        <select
                           id="genre_id"
                           name="genre_id"
                           value={formData.genre_id}
                           onChange={handleChange}
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                        >
                           <option value="">--select genre--</option>
                           {genres.map((genre) => (
                              <option key={genre.id} value={genre.id}>
                                 {genre.name}
                              </option>
                           ))}
                        </select>
                     </div>
                     <div>
                        <label
                           for="author_id"
                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                           Author_id
                        </label>
                        <select
                           id="author_id"
                           name="author_id"
                           value={formData.author_id}
                           onChange={handleChange}
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                        >
                           <option value="">--select author--</option>
                           {authors.map((author) => (
                              <option key={author.id} value={author.id}>
                                 {author.name}
                              </option>
                           ))}
                        </select>
                     </div>

                     <div className="w-full">
                        <label
                           for="cover_photo"
                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                           Cover Photo
                        </label>
                        <input
                           type="file"
                           name="cover_photo"
                           id="cover_photo"
                           accept="image/*"                           
                           onChange={handleChange}
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full cursor-pointer dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                           required
                        />
                     </div>
                     <div className="sm:col-span-2">
                        <label
                           for="description"
                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                           Description
                        </label>
                        <textarea
                           id="description"
                           name="description"
                           value={formData.description}
                           onChange={handleChange}
                           rows="8"
                           className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                           placeholder="Write a description of the book..."
                        ></textarea>
                     </div>
                  </div>
                  <div className="flex items-center space-x-4">
                     <button
                        type="submit"
                        className="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
                     >
                        Create Book
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
      </>
   );
}
