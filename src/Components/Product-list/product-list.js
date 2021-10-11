import React from "react";
import {nanoid} from "nanoid"
import ProductCard from "../Product-card/product-card";

import classesProductList from "./product-list.module.scss";

const ProductList = () => {
    const gender = "WOMEN'S";
    const productArr = [1, 2, 3, 4, 5, 6, 7, 8];

    return (
        <div className={classesProductList["product-list"]}>
            <div className={classesProductList.header}>
                <div className={classesProductList.gender}>{gender}</div>
                <div className={classesProductList.navigation}>
                    <span className={classesProductList.active}>NEW ARRIVALS</span>
                    <span>SPECIALS</span>
                    <span>BESTSELLERS</span>
                    <span>MOST VIEWED</span>
                    <span>FEATURED PRODUCTS</span>
                </div>
            </div>
            <div className={classesProductList.product}>
                {productArr.map(()=> (
                        <ProductCard key={nanoid(4)}/>    
                ))}
            </div>
            <div className={classesProductList.more}>
                <span>SEE ALL</span>
            </div>
        </div>
    )
}

export default ProductList;