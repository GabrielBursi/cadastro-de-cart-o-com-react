/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import { FormContext } from "../context/FormContext";

import Button from './Button';
import CompleteLogo from "../images/icon-complete.svg";

function Complete() {

    const {
        name,
        number,
        month,
        year,
        cvc,
        infoCard,
        setInfoCard,
        setName,
        setNumber,
        setMonth,
        setYear,
        setCVC
    } = useContext(FormContext);

    useEffect(() => {
        setLocalInfoCard();
    }, [infoCard]);

    function setLocalInfoCard() {
        localStorage.setItem("cardInfo", JSON.stringify(infoCard));
    }

    function setLocalStorage(e){
        const infos = {
            name,
            number,
            month,
            year,
            cvc,
        }
        setInfoCard(infos)
        e.target.textContent = 'Prontinho !';
    }

    function reset(){
        setName("GABRIEL BURSI");
        setNumber("0000 0000 0000 0000");
        setMonth("00");
        setYear("00");
        setCVC("123");
        return [{value: " "}]
    }

    return (
        <section className='section-complete'>
            <img src={CompleteLogo} alt='complete'></img>
            <div className='text-complete'>
                <p>THANK YOU!</p>
                <span>We've added your card details</span>
            </div>
            <button onClick={setLocalStorage}>Quer salvar seus dados ?</button>
            <Button nav='/' text='Continue' inputs={reset} />
        </section>
    );
}

export default Complete;