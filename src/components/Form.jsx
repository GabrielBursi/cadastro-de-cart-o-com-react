import { useContext } from 'react';
import { FormContext } from '../context/FormContext';

import Button from './Button';

function Form() {

    const {
        name,
        setName,
        setNumber,
        setMounth,
        setYear,
        setCVC,
    } = useContext(FormContext);

    function isEmpty(e){
        return e === '';
    }
    
    function filterInput(e){
        const regexStr = /^[a-zA-Z\s]+$/
        if(!e.target.value.match(regexStr)){
            if(name === "Gabriel Bursi"){
                e.target.value = ''
            }else{

                e.target.value = name
            }
        }
    }

    function formatName(e){
        setName((e.target.value).toUpperCase());
    }

    function getInputs() {
        const inputsNodeList = document.querySelectorAll("input");
        return inputsNodeList
    }

    return (
        <form>
            <div className="form-container">
                <label htmlFor="cardholder">CARDHOLDER NAME</label>
                <input id="cardholder" type="text" autoComplete='off' placeholder='ex: Gabriel Bursi' onKeyUp={(e) => {
                        if(isEmpty(e.target.value)) {
                            setName('Gabriel Bursi')
                        }else{
                            filterInput(e);
                            formatName(e)
                        }
                    }}/>
                <label htmlFor="card-number">CARD NUMBER</label>
                <input id="card-number" type="number" placeholder='0000 0000 0000 0000' maxLength={16} autoComplete='off' onChange={(e) => {
                        if(isEmpty(e.target.value)) {
                            setNumber('0000 0000 0000 0000')
                        }else{
                            setNumber(e.target.value.slice(0,16))
                        }
                    }}/>
                <div className="data-cvc">
                    <div className='date'>
                        <label htmlFor="date">EXP. DATE (MM/YY)</label>
                        <div className='inputs-my'>
                            <input id="date" type="number" placeholder='MM' maxLength={2} autoComplete='off' onChange={(e) => {
                                if(isEmpty(e.target.value)) {
                                    setMounth('00')
                                }else{
                                    setMounth(e.target.value.slice(0, 2));
                                }
                            }}/>
                            <input id="date" type="number" placeholder='YY' maxLength={2} autoComplete='off' onChange={(e) => {
                                if(isEmpty(e.target.value)) {
                                    setYear('00')
                                }else{
                                    setYear(e.target.value.slice(0,2))
                                }
                            }}/>
                        </div>
                    </div>
                    <div className='cvc-form'>
                        <label htmlFor="cvc-form">CVC</label>
                        <input id="cvc-form" type="number" placeholder='123' maxLength={3} autoComplete='off' onChange={(e) => {
                            if(isEmpty(e.target.value)) {
                                setCVC('000')
                            }else{
                                setCVC(e.target.value.slice(0, 3));
                            }
                        }}/>
                    </div>
                </div>
                <Button nav='/complete' text='Confirm' inputs={getInputs}/>
            </div>
        </form>
    );
}

export default Form;