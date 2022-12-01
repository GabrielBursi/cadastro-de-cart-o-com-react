import Logo from "../images/card-logo.svg";
import './style/card.css'

function Card() {
    return (
        <aside>
            <div className='container-cards'>
                <div className='card-front'>
                    <div className='icon'>
                        <img src={Logo} alt='logo'/>
                    </div>
                    <div className='numero'>
                        <p>0000 0000 0000 0000</p>
                    </div>
                    <div className='nome-data'>
                        <span>GABRIEL BURSI</span>
                        <span>00/00</span>
                    </div>
                </div>
                
                <div className='card-back'>
                    <div className="cvc">
                        <span>123</span>
                    </div>
                </div>
            </div>
        </aside>
    );
}

export default Card;