/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import { FormContext } from "../context/FormContext";

import Button from './Button';
import CompleteLogo from "../images/icon-complete.svg";
import { useNavigate } from "react-router-dom";

function Complete() {

    const navigate = useNavigate()

    const {
        setName,
        setNumber,
        setMonth,
        setYear,
        setCVC,
    } = useContext(FormContext);

    useEffect(() => {
        setName('')
        setNumber('')
        setMonth('')
        setYear('')
        setCVC('')
    }, []);


    return (
        <section className='section-complete'>
            <img src={CompleteLogo} alt='complete'></img>
            <div className='text-complete'>
                <p>THANK YOU!</p>
                <span>We've added your card details</span>
            </div>
            <Button text='Continue' handleSubmit={() => navigate('/')}/>
        </section>
    );
}

export default Complete;