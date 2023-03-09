/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from 'react';
import { FormContext } from '../context/FormContext';

import Logo from "../images/card-logo.svg";
import './style/card.css'

function Card() {

    const { 
            preName, 
            preNumber, 
            preMonth, 
            preYear, 
            preCvc, 
            setPreName, 
            setPreNumber, 
            setPreMonth, 
            setPreYear, 
            setPreCVC, 
            changedLocalStorage 
        } = useContext(FormContext);

    useEffect(() => {
        const userLocalStorage = localStorage.getItem('user')
        if(!userLocalStorage) return

        const userInfo = JSON.parse(userLocalStorage)

        setPreName(userInfo.name)
        setPreNumber(userInfo.number)
        setPreMonth(userInfo.month)
        setPreYear(userInfo.year)
        setPreCVC(userInfo.cvc)
    }, [changedLocalStorage]);

    return (
        <aside>
            <div className='container-cards'>
                <div className='card-front'>
                    <div className='icon'>
                        <img src={Logo} alt='logo'/>
                    </div>
                    <div className='numero'>
                        <p>{preNumber}</p>
                    </div>
                    <div className='nome-data'>
                        <span>{preName}</span>
                        <span>{preMonth}/{preYear}</span>
                    </div>
                </div>
                
                <div className='card-back'>
                    <div className="cvc">
                        <span>{preCvc}</span>
                    </div>
                </div>
            </div>
        </aside>
    );
}

export default Card;