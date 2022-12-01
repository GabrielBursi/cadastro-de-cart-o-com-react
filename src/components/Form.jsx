import Button from './Button';

function Form() {
    return (
        <form>
            <div className="form-container">
                <label htmlFor="cardholder">CARDHOLDER NAME</label>
                <input id="cardholder" type="text" autoComplete='off' placeholder='Gabriel Bursi'/>
                <label htmlFor="card-number">CARD NUMBER</label>
                <input id="card-number" type="card" placeholder='0000 0000 0000 0000'/>
                <div className="data-cvc">
                    <div className='date'>
                        <label htmlFor="date">EXP. DATE (MM/YY)</label>
                        <div className='inputs-my'>
                            <input id="date" type="number" placeholder='MM'/>
                            <input id="date" type="number" placeholder='YY'/>
                        </div>
                    </div>
                    <div className='cvc-form'>
                        <label htmlFor="cvc-form">CVC</label>
                        <input id="cvc-form" type="number" placeholder='123' max='3'/>
                    </div>
                </div>
                <Button nav='/complete' text='Confirm'/>
            </div>
        </form>
    );
}

export default Form;