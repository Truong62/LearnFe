import { useState } from "react";

export default function useHandelChange(initialValues) {
    const [value, setValue] = useState(initialValues);
    const handleInput = (e) => {
        const type = e.target.type
        setValue({
            ...value,
            [e.target.name]: type === "checkbox" ? e.target.checked : e.target.value
        });
    };
    return {
        value, handleInput
    }
}