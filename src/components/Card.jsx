/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from 'react';
import { FormContext } from '../context/FormContext';

import Logo from "../images/card-logo.svg";
import './style/card.css'

function Card() {

    const {
        name,
        number,
        month,
        year,
        cvc,
        setName,
        setNumber,
        setMonth,
        setYear,
        setCVC,
    } = useContext(FormContext);

    useEffect(() => {
        getLocalInfoCard();
    }, []);

    function getLocalInfoCard() {
        let localInfosCard = localStorage.getItem("cardInfo");
        if (localInfosCard === null) {
            localStorage.setItem("cardInfo", JSON.stringify({}));
        } else {
            localInfosCard = JSON.parse(localInfosCard);
            const { name, number, month, year, cvc } = localInfosCard;
            setName(name);
            setNumber(number);
            setMonth(month);
            setYear(year);
            setCVC(cvc);
        }
    }

    return (
        <aside>
            <div className='container-cards'>
                <div className='card-front'>
                    <div className='icon'>
                        <img src={Logo} alt='logo'/>
                    </div>
                    <div className='numero'>
                        <p>{number}</p>
                    </div>
                    <div className='nome-data'>
                        <span>{name}</span>
                        <span>{month}/{year}</span>
                    </div>
                </div>
                
                <div className='card-back'>
                    <div className="cvc">
                        <span>{cvc}</span>
                    </div>
                </div>
            </div>
        </aside>
    );
}

export default Card;