import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import * as yup from 'yup'
import { FormContext } from '../context/FormContext';

import Button from './Button';

const formValidation = yup.object({
    name: yup.string().required().min(5),
    number: yup.number().required().min(16),
    month: yup.number().required().min(2).lessThan(12).moreThan(0),
    year: yup.number().required().moreThan(23),
    cvc: yup.number().required().min(3)
})

function Form() {

    const navigate = useNavigate()
    
    const { 
            setName, 
            setNumber, 
            setMonth, 
            setYear, 
            setCVC, 
            setNameError,
            setNumberError,
            setMonthError,
            setYearError,
            setCVCError, 
            setPreName, 
            setPreNumber, 
            setPreMonth, 
            setPreYear, 
            setPreCVC, 
            name, 
            number, 
            month, 
            year, 
            cvc, 
            nameError,
            numberError,
            monthError,
            yearError,
            cvcError, 
            changedLocalStorage, 
            setChangedLocalStorage 
        } = useContext(FormContext);
    
    function handleSubmit(e){
        e.preventDefault()
        
        const dataUser = {
            name, 
            number :Number(number), 
            month :Number(month), 
            year :Number(year), 
            cvc :Number(cvc),
        }

        formValidation.validate(dataUser, {abortEarly: false})
            .then(() => {
                localStorage.setItem('user', JSON.stringify(dataUser))
                setChangedLocalStorage(!changedLocalStorage)
                navigate('/complete')
            })
            .catch((errors) => {
                errors.inner.forEach(error => {
                    switch (error.path) {
                        case 'name':
                            setNameError(error.message);
                            break
                        case 'number':
                            setNumberError(error.message);
                            break
                        case 'month':
                            setMonthError(error.message);
                            break
                        case 'year':
                            setYearError(error.message);
                            break
                        case 'cvc':
                            setCVCError(error.message);
                            break
                            
                            default: 
                            break
                    }
                });
            })
    }

    return (
        <form>
            <div className="form-container">
                <label htmlFor="cardholder">CARDHOLDER NAME</label>
                <input 
                    id="cardholder" 
                    name="name"
                    type="text" 
                    autoComplete='off'
                    placeholder='ex: Gabriel Bursi' 
                    onChange={(e) => {setName(e.target.value);setPreName(e.target.value);setNameError('')}}
                    value={name}
                />
                <span className='error-input'>{nameError}</span>

                <label htmlFor="card-number">CARD NUMBER</label>
                <input 
                    id="card-number" 
                    name="number"
                    type="text" 
                    placeholder='0000 0000 0000 0000' 
                    maxLength={16} 
                    autoComplete='off' 
                    onChange={(e) => {setNumber(e.target.value);setPreNumber(e.target.value);setNumberError('')}}
                    value={number}
                />
                <span className='error-input'>{numberError}</span>
                <div className="data-cvc">
                    <div className='date'>
                        <label htmlFor="date">EXP. DATE (MM/YY)</label>
                        <div className='inputs-my'>
                            <input 
                                id="date" 
                                name="month"
                                type="text" 
                                placeholder='MM' 
                                maxLength={2} 
                                autoComplete='off'
                                onChange={(e) => {setMonth(e.target.value);setPreMonth(e.target.value);setMonthError('')}}
                                value={month}
                            />
                            <span className='error-input'>{monthError}</span>
                            <input 
                                id="date" 
                                name="year"
                                type="text" 
                                placeholder='YY' 
                                maxLength={2} 
                                autoComplete='off' 
                                onChange={(e) => {setYear(e.target.value);setPreYear(e.target.value);setYearError('')}}
                                value={year}
                            />
                            <span className='error-input'>{yearError}</span>
                        </div>
                    </div>
                    <div className='cvc-form'>
                        <label htmlFor="cvc-form">CVC</label>
                        <input 
                            id="cvc-form" 
                            name="cvc"
                            type="text" 
                            placeholder='123' 
                            maxLength={3} 
                            autoComplete='off' 
                            onChange={(e) => {setCVC(e.target.value);setPreCVC(e.target.value);setCVCError('')}}
                            value={cvc}
                        />
                        <span className='error-input'>{cvcError}</span>
                    </div>
                </div>
                <Button handleSubmit={handleSubmit} text='Confirm'/>
            </div>
        </form>
    );
}

export default Form;