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
        setName,
        setNumber,
        setMonth,
        setYear,
        setCVC,
    } = useContext(FormContext);

    useEffect(() => {
        setName(name)
        setNumber(number)
        setMonth(month)
        setYear(year)
        setCVC(cvc)
    }, []);

    function reset(){
        return [{ value: " " }];
    }

    return (
        <section className='section-complete'>
            <img src={CompleteLogo} alt='complete'></img>
            <div className='text-complete'>
                <p>THANK YOU!</p>
                <span>We've added your card details</span>
            </div>
            <Button nav='/' text='Continue' inputs={reset} />
        </section>
    );
}

export default Complete;