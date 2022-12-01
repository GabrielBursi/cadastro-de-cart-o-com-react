import { useContext } from 'react';
import { FormContext } from '../context/FormContext';

import Logo from "../images/card-logo.svg";
import './style/card.css'

function Card() {

    const {
        name,
        number,
        mounth,
        year,
        cvc,
    } = useContext(FormContext);

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
                        <span>{mounth}/{year}</span>
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