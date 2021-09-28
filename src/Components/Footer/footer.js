import React from "react";

import classesFooter from "./footer.module.scss";

const Footer = () => (
        <div className={classesFooter.footer}>
            <div className={classesFooter.header}>
                <form className={classesFooter.form}>
                    <h3><span>Be in touch with us:</span></h3>
                    <input 
                        className={classesFooter["input-email"]}
                        type="text" 
                        placeholder="Enter your email" 
                    />
                    <input 
                        className={classesFooter["input-submit"]}
                        type="submit" 
                        value="JOIN US" 
                    />
                </form>   
                <div className={classesFooter.social}>
                    <a className={classesFooter.facebook} href="https://www.facebook.com/MiSto.ru" alt="Facebook MiSto">Facebook</a>               
                    <a className={classesFooter.twitter} href="https://www.twitter.com/MiSto.ru" alt="Twitter MiSto">Twitter</a> 
                    <a className={classesFooter.instagram} href="https://www.instagram.com/MiSto.ru" alt="Instagram MiSto">Instagrem</a>
                    <a className={classesFooter.pinterest} href="https://www.pinterest.com/MiSto.ru" alt="Pinterest MiSto">Pinterest</a>
                </div>                
            </div>
            <div className={classesFooter["content-info"]}>
                <div className={classesFooter.categories}>
                    <h3>Categories</h3>
                    <ul>
                        <li>Men</li>
                        <li>Women</li>
                        <li>Accessories</li>
                        <li>Beauty</li>
                    </ul>
                </div>
                <div className={classesFooter.information}>
                    <h3>Information</h3>
                    <ul>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Blog</li>
                        <li>FAQs</li>
                    </ul>    
                </div>
                <div className={classesFooter.links}>
                    <h3>Useful links</h3>
                    <ul>
                        <li>Term &#38; Canditions</li>
                        <li>return &#38; Exchanges</li>
                        <li>Shipping &#38; Delivery</li>
                        <li>Privacy &#38; Policy</li>
                    </ul>
                </div>
                <div className={classesFooter.contact}>
                    <h3>Contact us</h3>
                    <ul>
                        <li className={classesFooter.location} >Ukraine, Kyiv, Khreshchatyk 1</li>
                        <li className={classesFooter.call}>+38 (050) 12 34 567</li>
                        <li className={classesFooter["working-hours"]}>All week 24/7</li>
                        <li className={classesFooter.email}>shaman.magic.music@gmail.com</li>
                    </ul>                    
                </div>

            </div>
            <div className={classesFooter["c-p-d"]}>
                <div className={classesFooter.copyright}>Copyright © 2032 all rigths reserved</div>
                <div className={classesFooter.payment}/>
                <div className={classesFooter.designed}>
                    <a href="https://www.behance.net/shamandesign" alt="Designed by Oleh Chabanov">Designed by <span>Oleh Chabanov</span></a>
                </div>
            </div>
        </div>
    )

export default Footer;