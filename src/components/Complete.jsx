import { useContext } from 'react';
import { FormContext } from "../context/FormContext";

import Button from './Button';
import CompleteLogo from "../images/icon-complete.svg";

function Complete() {

    const {
        setName,
        setNumber,
        setMounth,
        setYear,
        setCVC,
    } = useContext(FormContext);

    function reset(){
        setName("Gabriel Bursi")
        setNumber("0000 0000 0000 0000");
        setMounth('00')
        setYear('00')
        setCVC('123')
        return [{value: " "}]
    }

    return (
        <section className='section-complete'>
            <img src={CompleteLogo} alt='complete'></img>
            <div className='text-complete'>
                <p>THANK YOU!</p>
                <span>We've added your card details</span>
            </div>
            <Button nav='/' text='Continue' inputs={reset}/>
        </section>
    );
}

export default Complete;