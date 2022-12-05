import { useEffect, useMemo, useState } from "react";

export const useForm = (initalState={}, validationForm={}) => {
 
    const [formState, setformState] = useState(initalState);
    const [stateValidation, setstateValidation] = useState({})

    useEffect(() => {
        validation();
    }, [formState])
    
    const isFormValid = useMemo(()=>{
        for(let key of Object.keys(stateValidation) ){
           if(stateValidation[key] !==null) return false
        }
        return true;
    },[stateValidation])

   
    const onInputChange = ( { target } )=>{
        const {name, value} = target;
        setformState({
            ...formState,
            [name]:value
        })
    }

    const validation = () =>{
        const stateValidationFlag ={};
        for(let item of Object.keys(validationForm) ){
            const [fn, message] = validationForm[item];
            stateValidationFlag[`${item}Values`] = fn(formState[item])? null : message;
        }
        setstateValidation(stateValidationFlag);
    }


    const resetForm = ()=>{
        setformState(initalState)
    }

    return {formState, onInputChange, resetForm, ...formState, ...stateValidation, isFormValid }
}