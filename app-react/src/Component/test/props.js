import React from 'react';

const infor = [
    {
        id: 1,
        name: "nnt1",
        address: "hanoi",
        age: "18"
    },
    {
        id: 2,
        name: "nnt2",
        address: "hanoi",
        age: "18"
    },
    {
        id: 3,
        name: "nnt3",
        address: "hanoi",
        age: "18"
    },
    {
        id: 4,
        name: "nnt4",
        address: "hanoi",
        age: "18"
    },
    {
        id: 5,
        name: "nnt5",
        address: "hanoi",
        age: "18"
    }
]

const Huhu = (props) => {
    return (<div>
        <h1>Name: {props.name}</h1>
        <h1>address: {props.add}</h1>
        <h1>Age: {props.age}</h1>
    </div>)
}

const Child = (props) => (
    <div>
        {props.children}
        {infor.map((item) => (
            <Huhu key={item.id}
                name={item.name}
                add={item.address}
                age={item.age}
            ></Huhu>
        ))}
    </div>
);
export default Child;