import Button from './Button';
import CompleteLogo from "../images/icon-complete.svg";

function Complete() {

    function teste(){
        return [{value: "Gabriel"}]
    }

    return (
        <section className='section-complete'>
            <img src={CompleteLogo} alt='complete'></img>
            <div className='text-complete'>
                <p>THANK YOU!</p>
                <span>We've added your card details</span>
            </div>
            <Button nav='/' text='Continue' inputs={teste}/>
        </section>
    );
}

export default Complete;