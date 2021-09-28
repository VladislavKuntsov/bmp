import React from "react";
import { Rate } from 'antd';
import 'antd/dist/antd.css';

import classesProductCard from "./product-card.module.scss";

const ProductCard = () => {

    const noPoster = 'https://kinomaiak.ru/wp-content/uploads/2018/02/noposter.png';
    const title = 'Cluse La Boheme Rose Gold'
    const price = '$ 30.00';
    const previousPrice  = '$ 60.00';

    return (
        <div className={classesProductCard["product-card"]}>
            <img className={classesProductCard.img} src={noPoster} alt=""/>
            <div className={classesProductCard["preview-information"]}>
                <div className={classesProductCard.title}>{title}</div>
                <span className={classesProductCard.price}>{price}</span>
                <span className={classesProductCard["previous-price"]}>{previousPrice}</span>
                <span className={classesProductCard.stars}><Rate/></span>
            </div>
        </div>
    )
}

export default ProductCard