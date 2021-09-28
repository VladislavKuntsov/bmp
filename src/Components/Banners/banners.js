import React from "react";

import classesBaners from "./banners.module.scss";

const Banners = () => (
        <div className={classesBaners.banners}>
            <div className={classesBaners["season-sale"]}>
                <div className={classesBaners.season}>
                    <div>
                        <div>New Season</div>
                        <div>lookbook collection</div>                        
                    </div>
                </div>
                <div className={classesBaners.sale}>
                    <div>
                        <div>Sale</div>
                        <div>Get UP to <span>50% off</span></div>   
                    </div>
                </div>
            </div>
            <div className={classesBaners["special-offer"]}>
                <div>
                    <div className={classesBaners.title}>Special Offer</div>
                    <div className={classesBaners.text}>Subscribe<br/> And <span>Get 10% Off</span></div>
                    <form className={classesBaners.form}>
                        <input 
                            className={classesBaners["input-email"]}
                            type="text" 
                            placeholder="Enter your email" 
                        />
                        <input 
                        className={classesBaners["input-submit"]}
                            type="submit" 
                            value="SUBSCRIBE" 
                        />
                    </form>   
                </div>
            </div>
        </div>
    )

export default Banners;
