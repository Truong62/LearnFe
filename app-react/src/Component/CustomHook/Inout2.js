import React, { useState } from "react";

const Inout2 = () => {
    const [value, setValue] = useState({
        fullname: "",
        email: ""
    });

    const handleInput = (e) => {
        const type = e.target.type
        console.log("e.target", e.target)
        console.log("e.target.name", e.target.name)
        console.log("e.target.value", e.target.value)

        setValue({
            ...value,
            [e.target.name]: type === "checkbox" ? e.target.checked : e.target.value
        });
    };

    return (
        <div className="p-5">
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
                className="w-full max-w-[300px] p-4 border border-gray-500 rounded-lg"
                onChange={handleInput}
            ></textarea>
            <input type="checkbox" name="love"      onChange={handleInput}/> love
        </div>
    );
};

export default Inout2;
