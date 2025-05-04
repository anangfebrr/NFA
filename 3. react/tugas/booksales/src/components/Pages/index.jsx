import Header from "../shared/Header";
import Hero from "../shared/Hero";
// import ProductList from "../shared/ProductList";
import Footer from "../shared/Footer";
import BookList from "../shared/BookLists";

export default function Home(){
    return(
        <>
            <Header />
            <Hero />
            <BookList />
            {/* <ProductList /> */}
            <Footer /> 
        </>
    )
}