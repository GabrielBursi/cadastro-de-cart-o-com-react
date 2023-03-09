/* eslint-disable default-case */

function Button({text, handleSubmit}) {

    return <button onClick={handleSubmit}>{text}</button>
}

export default Button;