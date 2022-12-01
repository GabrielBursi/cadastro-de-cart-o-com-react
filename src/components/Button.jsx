import { useNavigate } from 'react-router-dom'

function Button({nav, text, inputs}) {

    const navigate = useNavigate()

    function handleClick(e){
        e.preventDefault()
        
        const arrayInputs = Array.from(inputs())
        const valueEmpty = arrayInputs.find(inp => inp.value === '')


        if(valueEmpty){
            console.log("VAzio")
        }else{
            navigate(`${nav}`)
        }
    }
    return (
        <button onClick={handleClick}>{text}</button>
    );
}

export default Button;