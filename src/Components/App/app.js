import React from "react";
import { BrowserRouter as Router, Route} from 'react-router-dom';

// import Header from "../Header/header";
// import Menu from "../Menu/menu"
// import SignIn from "../Sign-in/sign-in";
// import GenderSelect from "../Gender-select/gender-select"
// import ProductList from "../Product-list/product-list";
// import Banners from "../Banners/banners";
// import BlogPreview from "../Blog-preview/blog-preview";
// import Footer from "../Footer/footer";
import Test from "../Tests/test";

const App = () => (
        <div>
            <Router>
                <Route path={["/", "/misto"]} exact component={Test} />
                {/* <Route path="/misto/sign-in" exact component={SignIn} />
                <Route path={["/", "/misto"]} exact  component={Header} />
                <Route path={["/", "/misto"]} exact  component={Menu} />
                <Route path={["/", "/misto"]} exact  component={GenderSelect} />
                <Route path={["/", "/misto"]} exact  component={ProductList} />
                <Route path={["/", "/misto"]} exact  component={ProductList} />
                <Route path={["/", "/misto"]} exact  component={Banners} />
                <Route path={["/", "/misto"]} exact  component={BlogPreview} />
                <Route path={["/", "/misto"]} exact  component={Footer} /> */}
                
            </Router> 
        </div>          
      )

export default App;