/* eslint-disable default-case */
import { useNavigate } from 'react-router-dom'

function Button({nav, text, inputs }) {

    const navigate = useNavigate()

    function handleClick(e){
        e.preventDefault()
        
        const arrayInputs = Array.from(inputs())

        if(arrayInputs.length > 1){
            var [ nameInput, numberInput, monthInput, yearInput, cvcInput] = arrayInputs
            var inputsMinLength = 
                numberInput.value.length < 16 || 
                monthInput.value.length < 2 || 
                yearInput.value.length < 2 || 
                cvcInput.value.length < 3 || 
                nameInput.value.length < 2 || 
                monthInput.value <= 0 || 
                monthInput.value > 12 || 
                yearInput.value < 22 || 
                yearInput.value > 37
        }

        const valueEmpty = arrayInputs.filter((inp) => inp.value === "");
        const valueNotEmpty = arrayInputs.filter(inp => inp.value !== "");

        if(valueEmpty.length > 0){
            showInputEmpty(valueEmpty, valueNotEmpty)
        }else if(inputsMinLength){
            showInputMinLength(inputsMinLength, numberInput, monthInput, yearInput, cvcInput)
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

    function showInputMinLength(inputsMinLength, number, month, year, cvc){
        switch (inputsMinLength) {
        case number.value.length < 16:
            number.classList.add("errado");
            break;
        case month.value.length < 2:
            month.classList.add("errado");
            break;
        case year.value.length < 2:
            year.classList.add("errado");
            break;
        case cvc.value.length < 3:
            cvc.classList.add("errado");
            break;
        case month.value <=0:
            month.classList.add("errado");
            break;
        case month.value > 12:
            month.classList.add("errado");
            break;
        case year.value <= 22:
            year.classList.add("errado");
            break;
        case year.value > 37:
            year.classList.add("errado");
            break;
        }
    }
    
    return <button onClick={handleClick}>{text}</button>
    
}

export default Button;