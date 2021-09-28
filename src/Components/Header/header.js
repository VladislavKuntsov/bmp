import React from "react";
import classesHeader from "./header.module.scss";

const Header = () => (
        <div className={classesHeader.header}>
            <div className={classesHeader.header__contact}>
                <span className={classesHeader.call}>+38 (050) 12 34 567</span>
                <span className={classesHeader.location}>Ukraine, Kyiv,Khreshchatyk 1</span>
                <span className={classesHeader["working-hours"]}>All week 24/7</span>
            </div>
            <div className={classesHeader.header__social}>
                <a className={classesHeader.facebook} href="https://www.facebook.com/MiSto.ru" alt="Facebook MiSto">{null}</a>               
                <a className={classesHeader.twitter} href="https://www.twitter.com/MiSto.ru" alt="Twitter MiSto">{null}</a> 
                <a className={classesHeader.instagram} href="https://www.instagram.com/MiSto.ru" alt="Instagram MiSto">{null}</a>
                <a className={classesHeader.pinterest} href="https://www.pinterest.com/MiSto.ru" alt="Pinterest MiSto">{null}</a>
            </div>
        </div>
    )

export default Header;