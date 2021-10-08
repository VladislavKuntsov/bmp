import React from "react";
import {Link} from 'react-router-dom';
import classesMenu from "./menu.module.scss"

const Menu = () => {

    const numberOfSelectedItem = 2;

    return (
        <div className={classesMenu.menu}>
            <div className={classesMenu["brend-name"]}>
                <span>MiSto</span>
            </div>
            <ul className={classesMenu.navigation}>
                <li>About Us</li>
                <li>Women</li>
                <li>Men</li>
                <li>Beauty</li>
                <li>Accessories</li>
                <li>Blog</li>
                <li>Contact</li>
            </ul>
            <div className={classesMenu['user-block']}>
                <div className={classesMenu.search}/>
                <div className={classesMenu.world}/>
                <div className={classesMenu.account}><Link to="/misto/sign-in"/></div>
                <div className={classesMenu.basket}>
                    <div className={classesMenu["number-goods"]}>
                            {numberOfSelectedItem}
                    </div>                    
                </div>
            </div>
        </div>
    )
}      

export default Menu;