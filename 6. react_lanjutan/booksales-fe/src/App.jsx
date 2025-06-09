import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages";
import PublicLayout from "./layouts/public";
import Books from "./pages/public/books";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import AdminLayout from "./layouts/admin";
import Dashboard from "./pages/admin";
import AdminBooks from "./pages/admin/books";
import BookCreate from "./pages/admin/books/create";
import AdminAuthors from "./pages/admin/authors";
import AuthorCreate from "./pages/admin/authors/create";
import AdminGenres from "./pages/admin/genres";
import GenreCreate from "./pages/admin/genres/create";

function App() {
   return (
      <>
         <BrowserRouter>
            <Routes>
               {/* Public Routes */}
               <Route element={<PublicLayout />}>
                  <Route index element={<Home />} />
                  <Route path="books" element={<Books />} />
               </Route>

               {/* Auth Routes */}
               <Route path="login" element={<Login />} />
               <Route path="register" element={<Register />} />

               {/* Admin Routs */}
               <Route path="admin" element={<AdminLayout />}>
                  <Route index element={<Dashboard />} />
                  
                  {/* Path admin books */}
                  <Route path="books">
                     <Route index element={<AdminBooks />} />
                     <Route path="create" element={<BookCreate />} />
                  </Route>
                  
                  {/* Path admin authors */}
                  <Route path="authors">
                     <Route index element={<AdminAuthors />} />
                     <Route path="create" element={<AuthorCreate />} />
                  </Route>

                  {/* Path admin genres */}
                  <Route path="genres">
                     <Route index element={<AdminGenres />} />
                     <Route path="create" element={<GenreCreate />} />
                  </Route>
               </Route>
            </Routes>
         </BrowserRouter>
      </>
   );
}

export default App;
