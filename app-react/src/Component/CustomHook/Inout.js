import React, { useState } from "react";
import useHandelChange from "../../hook/useHandelChange";

const Inout = () => {
    // const [value, setValue] = useState({
    //     fullname: "",
    //     email: ""
    // });

    // const handleInput = (e) => {
    //     const type = e.target.type
    //     console.log("e.target", e.target)
    //     console.log("e.target.name", e.target.name)
    //     console.log("e.target.value", e.target.value)

    //     setValue({
    //         ...value,
    //         [e.target.name]: type === "checkbox" ? e.target.checked : e.target.value
    //     });
    // };
    const { value, handleInput } = useHandelChange({

    })
    console.log(value)
    return (
        <div className="inline">
            <form autoComplete="off">
                <input
                    type="text"
                    name="fullname"
                    className="w-full max-w-[300px] p-5 border border-gray-500 rounded-lg"
                    placeholder="Enter your name"
                    onChange={handleInput}
                />
                <textarea
                    type="email"
                    name="email"
                    className="w-full max-w-[300px] p-5 border border-gray-500 rounded-lg"
                    onChange={handleInput}
                ></textarea>
                <input type="checkbox" name="love" onChange={handleInput} /> love
                <button className="border bg-blue-400 rounded-2xl p-3 text-white" type="submit">submit</button>
            </form>
        </div>
    );
};

export default Inout;
