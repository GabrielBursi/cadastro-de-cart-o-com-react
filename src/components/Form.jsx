import { useContext } from 'react';
import { FormContext } from '../context/FormContext';

import Button from './Button';

function Form() {

    const {
        setName,
        setNumber,
        setMounth,
        setYear,
        setCVC,
    } = useContext(FormContext);

    function isEmpty(e){
        return e === '';
    }


    return (
        <form>
            <div className="form-container">
                <label htmlFor="cardholder">CARDHOLDER NAME</label>
                <input id="cardholder" type="text" autoComplete='off' placeholder='Gabriel Bursi' onChange={(e) => {
                        if(isEmpty(e.target.value)) {
                            setName('Gabriel Bursi')
                        }else{

                            setName(e.target.value)
                        }
                    }}/>
                <label htmlFor="card-number">CARD NUMBER</label>
                <input id="card-number" type="card" placeholder='0000 0000 0000 0000' onChange={(e) => {
                        if(isEmpty(e.target.value)) {
                            setNumber('0000 0000 0000 0000')
                        }else{

                            setNumber(e.target.value)
                        }
                    }}/>
                <div className="data-cvc">
                    <div className='date'>
                        <label htmlFor="date">EXP. DATE (MM/YY)</label>
                        <div className='inputs-my'>
                            <input id="date" type="number" placeholder='MM' onChange={(e) => {
                                if(isEmpty(e.target.value)) {
                                    setMounth('00')
                                }else{

                                    setMounth(e.target.value)
                                }
                            }}/>
                            <input id="date" type="number" placeholder='YY' onChange={(e) => {
                                if(isEmpty(e.target.value)) {
                                    setYear('00')
                                }else{

                                    setYear(e.target.value)
                                }
                            }}/>
                        </div>
                    </div>
                    <div className='cvc-form'>
                        <label htmlFor="cvc-form">CVC</label>
                        <input id="cvc-form" type="number" placeholder='123' onChange={(e) => {
                            if(isEmpty(e.target.value)) {
                                setCVC('000')
                            }else{

                                setCVC(e.target.value)
                            }
                        }}/>
                    </div>
                </div>
                <Button nav='/complete' text='Confirm'/>
            </div>
        </form>
    );
}

export default Form;