import { useState } from "react";

export const useForm = (initial = {}) => {
 
    const [formState, setformState] = useState(initial)

    const onInputChange = ( { target } )=>{
        const {name, value} = target;
        setformState({
            ...formState,
            [name]:value
        })
    }

    const resetForm = ()=>{
        setformState(initial)
    }

    return {formState, onInputChange, resetForm, ...formState }
}