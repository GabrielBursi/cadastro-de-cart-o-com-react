import Button from './Button';
import './style/form.css'

function Form() {
    return (
        <form>
            <div className="form-container">
                <label htmlFor="cardholder">CARDHOLDER NAME</label>
                <input id="cardholder" type="text" autoComplete='off'/>
                <label htmlFor="card-number">CARD NUMBER</label>
                <input id="card-number" type="number"/>
                <div className="data-cvc">
                    <div className='date'>
                        <label htmlFor="date">EXP. DATE (MM/YY)</label>
                        <input id="date" type="date"/>
                    </div>
                    <div className='cvc-form'>
                        <label htmlFor="cvc-form">CVC</label>
                        <input id="cvc-form" type="number"/>
                    </div>
                </div>
                <Button/>
            </div>
        </form>
    );
}

export default Form;