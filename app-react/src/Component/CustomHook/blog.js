import React, { useRef } from 'react';

const Blog = () => {
    const contenRef = useRef(null)
    return (
        <div className='entry-content' ref={contenRef}>
            <p class="mb-5">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, repellat quod excepturi autem alias laborum nostrum fuga nesciunt, nemo minima officia corrupti ducimus. Quam consectetur, repellat obcaecati facilis quae tenetur.
                <a href="google.com" className='underline'></a>
            </p>
            <p class="mb-5">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, repellat quod excepturi autem alias laborum nostrum fuga nesciunt, nemo minima officia corrupti ducimus. Quam consectetur, repellat obcaecati facilis quae tenetur.
                <a href="google.com" className='underline'></a>
            </p>
            <p class="mb-5">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, repellat quod excepturi autem alias laborum nostrum fuga nesciunt, nemo minima officia corrupti ducimus. Quam consectetur, repellat obcaecati facilis quae tenetur.
                <a href="google.com" className='underline'></a>
            </p>
        </div>
    );
};

export default Blog;