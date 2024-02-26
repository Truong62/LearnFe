import React, { useEffect, useRef, useState } from 'react';
import lodash from "lodash"
import axios from "axios"

const HackerNew = () => {
    const [hits, setHits] = useState([]);
    const [query, setQuery] = useState("react");
    const [loadding, setLoading] = useState(true)
    const getData = useRef({})
    getData.current = async () => {
        try {
            setLoading(false)
            const res = await axios.get(`https://hn.algolia.com/api/v1/search?query=${query}`);
            console.log(res.data)
            setHits(res.data?.hits || []);
        } catch (error) {
            setLoading(true)
        }
    }
    const handleUpdate = lodash.debounce((e) => {
        setQuery(e.target.value)
    }, 200)
    useEffect(() => {
        getData.current();
    }, [query])
    return (
        <div>
            <input type="text" className="p-5 mb-5 border border-green-500 text-back" onChange={handleUpdate} defaultValue={query} />
            {loadding && (<div className="w-8 h-8 border-4 border-r-4 border-blue-500 rounded-full loadding border-r-transparent animate-spin"></div>)}
            {!loadding && hits.length > 0 && hits.map((item, index) => (
                <h3 key={item.title}>{item.title}</h3>
            ))}
        </div>
    );
};

export default HackerNew;


