import React, { useEffect, useState } from 'react';
import axios from 'axios';


const getPhoto = async (page) => {
    console.log("page: ", page)
    try {
        const response = await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=8`);
        console.log(response);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

const Photo = () => {
    const [random, setRandom] = useState([]);
    const [NextPage, setPage] = useState(1);
    const Test = () => {
        getPhoto(NextPage).then((img) => {
            setRandom(img)
            setPage(NextPage + 1)
        });
    }
    useEffect(() => {
        Test()
    }, [])
    console.log(NextPage)

    return (
        <div className='grid grid-cols-4 gap-5 p-5'>{random.length > 0 && random.map((item, index) => (
            <div key={item.id} className='p-3 bg-slate-400 shadow-md rounded-lg' >
                <img src={item.download_url} alt={item.author} />
            </div>

        ))}
            <button onClick={Test}>Load More</button>
        </div>
    );
};

export default Photo;