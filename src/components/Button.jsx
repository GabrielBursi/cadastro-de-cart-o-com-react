import { useNavigate } from 'react-router-dom'

function Button({nav, text, inputs}) {

    const navigate = useNavigate()

    function handleClick(e){
        e.preventDefault()
        
        const arrayInputs = Array.from(inputs())
        const valueEmpty = arrayInputs.filter((inp) => inp.value === "");
        const valueNotEmpty = arrayInputs.filter(inp => inp.value !== "");

        if(valueEmpty.length > 0){
            showInputEmpty(valueEmpty, valueNotEmpty)
        }else{
            navigate(`${nav}`)
        }
    }

    function showInputEmpty(valueEmpty, valueNotEmpty){
        valueEmpty[0].focus()
        valueEmpty.forEach(element => {
            element.style.borderColor = "#FF8A8A";
        });
        valueNotEmpty.forEach(element => {
            element.style.borderColor = "#bbbbbb";
        })
    }
    
    return (
        <button onClick={handleClick}>{text}</button>
    );
}

export default Button;