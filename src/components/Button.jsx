import { useNavigate } from 'react-router-dom'

function Button({nav, text}) {
    const navigate = useNavigate()
    return (
        <button onClick={() => navigate(`${nav}`)}>{text}</button>
    );
}

export default Button;