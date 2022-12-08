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
        infoCard,
        setName,
        setNumber,
        setMonth,
        setYear,
        setCVC,
        setInfoCard
    } = useContext(FormContext);

    useEffect(() => {
        getLocalInfoCard();
    }, []);

    useEffect(() => {
        setLocalInfoCard();
    }, []);

    function getLocalInfoCard() {
        let localInfosCard = localStorage.getItem("cardInfo");
        if (localInfosCard === null) {
            localStorage.setItem("cardInfo", JSON.stringify({}));
        } else {
            localInfosCard = JSON.parse(localInfosCard);
            const { name, number, month, year, cvc } = localInfosCard;
            
            setName(name ? name : 'GABRIEL BURSI');
            setNumber(number ? number : "0000 0000 0000 0000");
            setMonth(month ? month : "00");
            setYear(year ? year : "00");
            setCVC(cvc ? cvc : "123");
        }
    }


    function setLocalInfoCard() {
        const infos = {
            name,
            number,
            month,
            year,
            cvc,
        };
        setInfoCard(infos);
        localStorage.setItem("cardInfo", JSON.stringify(infoCard));
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