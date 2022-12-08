import { createContext, useState } from "react";

export const FormContext = createContext()

function FormProvider({children}) {

    const [name, setName] = useState("GABRIEL BURSI");
    const [number, setNumber] = useState("0000 0000 0000 0000");
    const [month, setMonth] = useState("00");
    const [year, setYear] = useState("00");
    const [cvc, setCVC] = useState("123");
    const [infoCard, setInfoCard] = useState({});

    return (
        <FormContext.Provider 
            value = {{
                name, setName,
                number, setNumber,
                month, setMonth,
                year, setYear,
                cvc,setCVC,
                infoCard, setInfoCard,
            }}
        >
            {children}
        </FormContext.Provider>
    );
}

export default FormProvider;