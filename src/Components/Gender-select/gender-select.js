import React from "react";
/* import Advantage from "../Advantage/advantage" */

import classesGenderSelect from './gender-select.module.scss';

const GenderSelect = () => {

    const advantageObj = [
        {
            title: "Free shipping",
            text: "On all UA order or order above $100",
            classAdvantage: "car"
        },
        {
            title: "30 days return",
            text: "Simply return it within 30 days for an exchange",
            classAdvantage: "return"
        },
        {
            title: "Support 24/7",
            text: "Contact us 24 hours a day, 7 days a week",
            classAdvantage: "support"
        },
    ]

    return (
        <div className={classesGenderSelect["gender-select"]}>
            <div className={classesGenderSelect.slider}> 
                <span>You title text</span>                
            </div>
            <div className={classesGenderSelect.women}>
                <span>Women</span>
            </div>
            <div className={classesGenderSelect.men}>
                <span>Men</span>
            </div>
            <div className={classesGenderSelect.accessories}>
                <span>Accessories</span>
            </div>
            <div className={classesGenderSelect.advantage}>
                {advantageObj.map(({title, text, classAdvantage}) => (
                    <div className={classesGenderSelect[`${classAdvantage}`]} key={title}>
                        <div className={classesGenderSelect["advantage-item"]}/>
                        <div className={classesGenderSelect.title}>{title}</div>
                        <div className={classesGenderSelect.text}>{text}</div>                    
                    </div>               
                ))}
            </div>
        </div>   
    )

}

export default GenderSelect;