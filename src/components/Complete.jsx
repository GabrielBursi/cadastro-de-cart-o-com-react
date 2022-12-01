import Button from './Button';
import CompleteLogo from "../images/icon-complete.svg";

function Complete() {
    return (
        <section className='section-complete'>
            <img src={CompleteLogo} alt='complete'></img>
            <div className='text-complete'>
                <p>THANK YOU!</p>
                <span>We've added your card details</span>
            </div>
            <Button nav='/' text='Continue'/>
        </section>
    );
}

export default Complete;