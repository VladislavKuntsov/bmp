import React from "react";
import Header from "../Header/header";
import Menu from "../Menu/menu"
/* import SignIn from "../Sign-in/sign-in"; */
import GenderSelect from "../Gender-select/gender-select"
import ProductList from "../Product-list/product-list";
import Banners from "../Banners/banners";
import BlogPreview from "../Blog-preview/blog-preview";
import Footer from "../Footer/footer";

const App = () => (
    <div>
        <Header/>
        <Menu/>
        <GenderSelect/>
        <ProductList/>
        <ProductList/>
        <Banners/>
        <BlogPreview/>
        <Footer/>
        {/* <SignIn/> */}
    </div>
)

export default App;

