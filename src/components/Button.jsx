import { useNavigate } from 'react-router-dom'

function Button({nav, text, inputs}) {

    const navigate = useNavigate()

    function handleClick(e){
        e.preventDefault()
        
        const arrayInputs = Array.from(inputs())

        if(arrayInputs.length > 1){
            var [ nameInput, numberInput, mounthInput, yearInput, cvcInput] = arrayInputs
            var inputsMinLength = numberInput.value.length < 16 || mounthInput.value.length < 2 || yearInput.value.length < 2 || cvcInput.value.length < 3 || nameInput.value.length < 2
        }

        const valueEmpty = arrayInputs.filter((inp) => inp.value === "");
        const valueNotEmpty = arrayInputs.filter(inp => inp.value !== "");

        if(valueEmpty.length > 0 || inputsMinLength){
            showInputEmpty(valueEmpty, valueNotEmpty)
        }else{
            navigate(`${nav}`)
        }
    }

    function showInputEmpty(valueEmpty, valueNotEmpty){
        valueEmpty[0].focus()
        valueEmpty.forEach(element => {
            element.style.borderColor = "#FF2E2E";
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