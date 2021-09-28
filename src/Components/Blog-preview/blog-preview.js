import React from "react";
import preview1 from "../../Images/BlogPreview/preview-1.jpg";
import preview2 from "../../Images/BlogPreview/preview-2.jpg";
import preview3 from "../../Images/BlogPreview/preview-3.jpg";

import classesBlogPreview from "./blog-preview.module.scss";

const BlogPreview = () => {

    const dataBlogPrewiew = [
        {
            title: "The Easiest Way to Break",
            text: "But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor",
            img: preview1,
        },
        {
            title: "Wedding Season",
            text: "But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor",
            img: preview2,
        },
        {
            title: "Recent Favorites On Repeat",
            text: "But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor",
            img: preview3,
        }
    ]

    return (
        <div className={classesBlogPreview["blog-preview"]}>
            <div>
                <span>LATEST FROM BLOG</span>
                <span>SEE ALL</span>                
            </div>
            <div>
                {dataBlogPrewiew.map(({title, text, img}) => (
                    <div className={classesBlogPreview.preview}>
                        <img className={classesBlogPreview.img} src={img} alt=""/>
                        <div className={classesBlogPreview.information}>
                            <div className={classesBlogPreview.title}>{title}<br/></div>
                            <div className={classesBlogPreview.text}>{text}</div>
                        </div>                    
                    </div>
                ))}    
            </div>
        </div>
    )
}

export default BlogPreview;