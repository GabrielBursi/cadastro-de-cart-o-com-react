import { createContext, useState } from "react";

export const FormContext = createContext()

function FormProvider({children}) {

    const [preName, setPreName] = useState("GABRIEL BURSI");
    const [preNumber, setPreNumber] = useState("0000 0000 0000 0000");
    const [preMonth, setPreMonth] = useState("00");
    const [preYear, setPreYear] = useState("00");
    const [preCvc, setPreCVC] = useState("123");

    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [month, setMonth] = useState("");
    const [year, setYear] = useState("");
    const [cvc, setCVC] = useState("");

    const [nameError, setNameError] = useState("");
    const [numberError, setNumberError] = useState("");
    const [monthError, setMonthError] = useState("");
    const [yearError, setYearError] = useState("");
    const [cvcError, setCVCError] = useState("");

    const [changedLocalStorage, setChangedLocalStorage] = useState(false);

    return (
        <FormContext.Provider 
            value = {{
                name, setName,
                number, setNumber,
                month, setMonth,
                year, setYear,
                cvc,setCVC,
                nameError, setNameError,
                numberError, setNumberError,
                monthError, setMonthError,
                yearError, setYearError,
                cvcError, setCVCError,
                preName, setPreName,
                preNumber, setPreNumber,
                preMonth, setPreMonth,
                preYear, setPreYear,
                preCvc, setPreCVC,
                changedLocalStorage, setChangedLocalStorage
            }}
        >
            {children}
        </FormContext.Provider>
    );
}

export default FormProvider;