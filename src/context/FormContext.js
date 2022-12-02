import { createContext, useState } from "react";

export const FormContext = createContext()

function FormProvider({children}) {

    const [name, setName] = useState("Gabriel Bursi");
    const [number, setNumber] = useState("0000 0000 0000 0000");
    const [mounth, setMounth] = useState("00");
    const [year, setYear] = useState("00");
    const [cvc, setCVC] = useState("123");

    return (
        <FormContext.Provider 
            value = {{
                name, setName,
                number, setNumber,
                mounth, setMounth,
                year, setYear,
                cvc,setCVC
            }}
        >
            {children}
        </FormContext.Provider>
    );
}

export default FormProvider;